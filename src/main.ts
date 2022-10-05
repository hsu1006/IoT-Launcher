import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const microserviceTCP = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });

  const microserviceMQTT = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: configService.get<any>('MQTT_BROKER'),
      port: configService.get<any>('MQTT_PORT'),
      username: configService.get<any>('MQTT_USERNAME'),
      password: configService.get<any>('MQTT_PASSWORD'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
