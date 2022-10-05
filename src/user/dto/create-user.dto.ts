import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    public cardUUID: number;

    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    @IsNotEmpty()
    @IsString()
    public role: string;

}
