import { TableList } from "src/table-list/entities/table-list.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TableTrack {
    @PrimaryGeneratedColumn()
    trackId: number;

    @ManyToOne(type => TableList, tableList => tableList.tableId)
    tableId: TableList;

    @ManyToOne(type => User, user => user.userId)
    userId: User;

    @CreateDateColumn()
    checkInTime: Date;

    @Column()
    checkOutTime?: Date;
}
