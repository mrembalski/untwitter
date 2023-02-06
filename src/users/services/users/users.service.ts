import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto) {
        return this.userRepository.save(this.userRepository.create(createUserDto));
    }

    async findUserByUsername(username: string) {
        return this.userRepository.findOne({ where: { username } });
    }

    async doesUserExist(username: string) {
        return (await this.userRepository.findOne({where: {username}})) !== null;
    }
}