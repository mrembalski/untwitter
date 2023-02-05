import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Like} from 'src/entities/like.entity';
import {CreateLikesDto} from 'src/likes/dtos/create.likes.dto';
import {Repository} from 'typeorm';

@Injectable()
export class LikesService {
    constructor(
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>,
    ) {
    }

    likesCount(tweetId: number) {
        return this.likeRepository.count({
            where: {
                tweetId: tweetId
            }
        });
    }

    createLike(createLikesDto: CreateLikesDto) {
        const like = this.likeRepository.create(createLikesDto);
        return this.likeRepository.save(like);
    }
}
