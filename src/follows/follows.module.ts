import { Module } from '@nestjs/common';
import { FollowsController } from "./controllers/follows/follows.controller";
import { FollowsService } from './services/follows/follows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from 'src/entities/follow.entity';
import { CommonModule } from 'src/common.module';

@Module({
    imports: [TypeOrmModule.forFeature([Follow]), CommonModule],
    controllers: [FollowsController],
    providers: [FollowsService]
})
export class FollowsModule { }
