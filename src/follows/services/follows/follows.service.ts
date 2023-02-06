import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Follow} from 'src/entities/follow.entity';
import {CreateFollowDto} from 'src/follows/dtos/create.follow.dto';
import {Repository} from 'typeorm';

@Injectable()
export class FollowsService {
    constructor(
        @InjectRepository(Follow)
        private readonly followRepository: Repository<Follow>,
    ) {
    }

    doesFollowExist(followeeUsername: string, followerUsername: string) {
        return this.followRepository.findOne({
            where: {
                followeeUsername: followeeUsername,
                followerUsername: followerUsername
            }
        }) != null;
    }

    allFollows(username: string) {
        return this.followRepository.find({
            where: {
                followeeUsername: username
            }
        });
    }

    createFollow(createFollowDto: CreateFollowDto) {
        return this.followRepository.save(this.followRepository.create(createFollowDto));
    }

    deleteFollow(followeeUsername: string, followerUsername: string) {
        return this.followRepository.delete({
            followeeUsername: followeeUsername,
            followerUsername: followerUsername
        });
    }
}
