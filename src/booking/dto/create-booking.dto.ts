import { IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { TableList } from "src/table-list/entities/table-list.entity";
import { User } from "src/user/entities/user.entity";

export class CreateBookingDto {
    @IsNotEmpty()
    public tableId: TableList;

    @IsNotEmpty()
    public userId: User;

    @IsString()
    bookingDate: string;

    @IsNotEmpty()
    bookingStartTime: string;

    @IsNotEmpty()
    bookingEndTime: string;
}
