import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSnackDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    currentStock: number;

    @IsNotEmpty()
    @IsString()
    imageURL: string;
}
