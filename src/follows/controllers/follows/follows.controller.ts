import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicationController } from 'src/communication/user_exists';
import { CreateFollowDto } from '../../dtos/create.follow.dto';
import { FollowsService } from '../../services/follows/follows.service';

@Controller('follows')
export class FollowsController extends CommunicationController {
  constructor(
    private readonly followsService: FollowsService,
    configService: ConfigService,
  ) {
    super(configService)
    console.log("XD", this)
  }


  @Get('follows/:followeeUsername/:followerUsername')
  findFollow(
    @Param('followeeUsername') followeeUsername: string,
    @Param('followerUsername') followerUsername: string,
  ) {
    return this.followsService.findFollow(followeeUsername, followerUsername);
  }


  @Post('create')
  @UsePipes(ValidationPipe)
  createFollow(@Body() createFollowDto: CreateFollowDto) {
    /** 1. Add jwt authentication */
    // This proves follower exists 

    /** 2. Check if followee exists */

    return this.followsService.createFollow(createFollowDto);
  }
}
