import { IsNotEmpty, MinLength, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}