import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from 'typeorm';

@Entity()
export class Snack {
    @PrimaryGeneratedColumn()
    snackId: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    currentStock: number;

    @Column({ type: "varchar", length:"10000" })
    imageURL: string;
}
