import { IsNotEmpty, IsString } from "class-validator";

export class ValidateUserDto {
    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsNotEmpty()
    @IsString()
    public password: string;
}
