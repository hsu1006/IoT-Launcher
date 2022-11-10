import { type } from "os";
import { Snack } from "src/snack/entities/snack.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SnackOrder {
    @PrimaryGeneratedColumn()
    snackOrderId: number;

    @ManyToOne(type => Snack, snack => snack.snackId)
    itemId: Snack;

    @ManyToOne(type => User, user => user.userId)
    ownerId: User;

    @Column()
    quantity: number;

    @Column()
    totalAmount: number;
}
