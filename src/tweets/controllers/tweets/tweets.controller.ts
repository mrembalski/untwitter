import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateTweetDto } from 'src/tweets/dtos/create.tweet.dto';
import { TweetsService } from "../../services/tweets/tweets.service";

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetService: TweetsService) { }


    @Get('id/:id')
    findTweetsById(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.tweetService.findTweetById(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(
        @Body() createTweetDto: CreateTweetDto
    ) {
        return this.tweetService.createTweet(createTweetDto);
    }
}