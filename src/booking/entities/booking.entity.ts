import { TableList } from "src/table-list/entities/table-list.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    bookingId: number;

    @ManyToOne(type => TableList, tableList => tableList.tableId)
    tableId: TableList;

    @ManyToOne(type => User, user => user.userId)
    userId: User;

    @Column({type: 'date'})
    bookingDate: string;

    @Column({type:'time'})
    bookingStartTime: string;

    @Column({type:'time'})
    bookingEndTime: string;

}
