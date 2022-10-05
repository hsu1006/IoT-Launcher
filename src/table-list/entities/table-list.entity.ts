import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TableList {
    @PrimaryGeneratedColumn()
    tableId: number;

    @Column()
    status: string;
}
