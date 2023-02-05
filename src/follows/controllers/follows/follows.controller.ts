import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFollowDto } from '../../dtos/create.follow.dto';
import { FollowsService } from '../../services/follows/follows.service';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}


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
    return this.followsService.createFollow(createFollowDto);
  }
}
