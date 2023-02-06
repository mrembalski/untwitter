import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Like} from 'src/entities/like.entity';
import {CreateLikeDto} from 'src/likes/dtos/create.like.dto';
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

    createLike(createLikeDto: CreateLikeDto) {
        return this.likeRepository.save(this.likeRepository.create(createLikeDto));
    }
}
