import { SnackOrder } from 'src/snack-order/entities/snack-order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from 'typeorm';

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    cardUUID: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({default:"customer"})
    role: string;
}
