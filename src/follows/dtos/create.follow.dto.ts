import { IsNotEmpty, MinLength, IsString } from "class-validator";

export class CreateFollowDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    followeeUsername: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    followerUsername: string;
}