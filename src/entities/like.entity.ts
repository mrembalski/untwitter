import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Like {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'like_id',
    })
    id: number;

    @Column({
        nullable: false,
    })
    username: string;

    @Column({
        nullable: false,
    })
    tweetId: number;
}