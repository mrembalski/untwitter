import {IsNotEmpty, MinLength, IsString, IsNumber} from "class-validator";

export class CreateLikeDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsNumber()
    @IsNotEmpty()
    tweetId: number;
}