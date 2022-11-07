import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { User } from './user/entities/user.entity';
import { TableTrackModule } from './table-track/table-track.module';
import { TableListModule } from './table-list/table-list.module';
import { TableList } from './table-list/entities/table-list.entity';
import { TableTrack } from './table-track/entities/table-track.entity';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/entities/booking.entity';
import { SnackModule } from './snack/snack.module';
import { Snack } from './snack/entities/snack.entity';
import { SnackOrderModule } from './snack-order/snack-order.module';
import { SnackOrder } from './snack-order/entities/snack-order.entity';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_URL'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        port: configService.get<number>('DB_PORT'),
        entities: [
          User,
          TableList,
          TableTrack,
          Booking,
          Snack,
          SnackOrder,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ScheduleModule.forRoot(),
    TableTrackModule,
    TableListModule,
    BookingModule,
    SnackModule,
    SnackOrderModule,
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: 'MQTT_SERVICE',
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.MQTT,
        options: {
          url: configService.get<any>('MQTT_BROKER'),
          port: configService.get<any>('MQTT_PORT'),
          username: configService.get<any>('MQTT_USERNAME'),
          password: configService.get<any>('MQTT_PASSWORD'),
        },
      });
    },
    inject: [ConfigService],
  },],
})
export class AppModule {}
