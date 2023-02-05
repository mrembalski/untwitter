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

    findFollow(followeeUsername: string, followerUsername: string) {
        return this.followRepository.findOneOrFail({
            where: {
                followeeUsername: followeeUsername,
                followerUsername: followerUsername
            }
        });
    }

    createFollow(createFollowDto: CreateFollowDto) {
        const newFollow = this.followRepository.create(createFollowDto);
        return this.followRepository.save(newFollow);
    }
}
