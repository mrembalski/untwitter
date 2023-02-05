import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateTweetDto } from 'src/tweets/dtos/create.tweet.dto';
import { TweetsService } from "../../services/tweets/tweets.service";

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetService: TweetsService) { }


    @Get('username/:username')
    findTweetsByUsername(
        @Param('username') username: string
    ) {
        return this.tweetService.findTweetsByUsername(username);
    }

    @Get('phrase/:phrase')
    findTweetsWithPhrase(
        @Param('phrase') phrase: string
    ) {
        return this.tweetService.findTweetsWithPhrase(phrase);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(
        @Body() createTweetDto: CreateTweetDto
    ) {
        return this.tweetService.createTweet(createTweetDto);
    }
}