import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
@Unique(['followeeUsername', 'followerUsername'])
export class Follow {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'follow_id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  followeeUsername: string;

  @Column({
    nullable: false,
  })
  followerUsername: string;

  // todo jaka tu jest relacja do User?
}
