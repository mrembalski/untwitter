import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from './user.entity';

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'tweet_id',
    })
    id: number;

    @Column({
        nullable: false
    })
    username: string;

    @Column({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP" })
    creationTime: Date;

    @Column({
        nullable: false,
        default: ""
    })
    content: string;

    @ManyToOne(() => User, user => user.tweets)
    user: User;
}