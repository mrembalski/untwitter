import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Tweet } from './tweet.entity';

@Entity()
export class User {
    @PrimaryColumn({
        nullable: false,
    })
    username: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;
}