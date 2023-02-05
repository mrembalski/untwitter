import { IsNotEmpty, MinLength, MaxLength, IsString, IsDate } from "class-validator";

export class CreateTweetDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsDate()
    @IsNotEmpty()
    creationTime: Date;

    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    content: string;
}