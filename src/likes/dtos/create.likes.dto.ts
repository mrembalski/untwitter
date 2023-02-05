import {IsNotEmpty, MinLength, IsString, IsNumber} from "class-validator";

export class CreateLikesDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsNumber()
    @IsNotEmpty()
    tweetId: number;
}