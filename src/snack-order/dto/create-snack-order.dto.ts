import { IsNotEmpty, IsNumber} from "class-validator";
import { Snack } from "src/snack/entities/snack.entity";
import { User } from "src/user/entities/user.entity";

export class CreateSnackOrderDto {
    @IsNotEmpty()
    @IsNumber()
    snackId: Snack;

    @IsNotEmpty()
    @IsNumber()
    ownerId: User;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    totalAmount: number;
}
