import { IsNotEmpty, IsString } from "class-validator";

export class CreateTableListDto {
    @IsNotEmpty()
    @IsString()
    public status: string;
}
