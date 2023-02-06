import {
    Body,
    Controller,
    Get,
    ParseIntPipe,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicationController } from 'src/communication/user_exists';
import { CreateLikeDto } from '../../dtos/create.like.dto';
import { LikesService } from '../../services/likes/likes.service';

@Controller('likes')
export class LikesController extends CommunicationController {
    constructor(
        private readonly LikesService: LikesService,
        configService: ConfigService,
    ) {
        super(configService)
        console.log("XD", this)
        // todo usunąć?
    }

    // returns like count for a given tweet
    @Get('likesCount/:tweetId')
    likesCount(@Param('tweetId', ParseIntPipe) tweetId: number) {
        return this.LikesService.likesCount(tweetId);
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    createLike(@Body() createLikeDto: CreateLikeDto) {
        return this.LikesService.createLike(createLikeDto);
    }
}
