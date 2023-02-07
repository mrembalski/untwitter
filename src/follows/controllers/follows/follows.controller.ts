import { HttpService } from '@nestjs/axios';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommunicationController } from 'src/communication/communication_controller';
import { CreateFollowDto } from '../../dtos/create.follow.dto';
import { FollowsService } from '../../services/follows/follows.service';

@Controller('follows')
export class FollowsController extends CommunicationController {
  constructor(
    private readonly followsService: FollowsService,
    httpService: HttpService,
    configService: ConfigService,
  ) {
    super(configService, httpService)
  }


  // returns true if a follow exists, false otherwise
  @Get('doesFollowExist/:followeeUsername/:followerUsername')
  doesFollowExist(
    @Param('followeeUsername') followeeUsername: string,
    @Param('followerUsername') followerUsername: string,
  ) {
    return this.followsService.doesFollowExist(followeeUsername, followerUsername);
  }

  // returns all users that follow a given username
  @Get('allFollows/:username')
    allFollows(@Param('username') username: string) {
        return this.followsService.allFollows(username);
  }

    // returns all users that a given username follows
    @Get('allFollowees/:username')
    allFollowees(@Param('username') username: string) {
        return this.followsService.allFollowees(username);
    }


  @Post('create')
  @UsePipes(ValidationPipe)
  createFollow(@Body() createFollowDto: CreateFollowDto) {
    /** 1. Add jwt authentication */
    // This proves follower exists 

    /** 2. Check if followee exists */

    return this.followsService.createFollow(createFollowDto);
  }

    @Post('delete')
    deleteFollow(@Body() createFollowDto: CreateFollowDto) {
      return this.followsService.deleteFollow(createFollowDto.followeeUsername, createFollowDto.followerUsername);
    }
}
