import { IsDate, IsNotEmpty, IsNumber} from "class-validator";
import { TableList } from "src/table-list/entities/table-list.entity";
import { User } from "src/user/entities/user.entity";

export class CreateTableTrackDto {
    @IsNotEmpty()
    public tableId: TableList;

    @IsNotEmpty()
    public userId: User;

    @IsDate()
    public checkInTime: Date;

    @IsDate()
    public checkOutTime?: Date;
}
