import { Entity, Column, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity()
@Unique(['followeeUsername', 'followerUsername'])
export class Follow {
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
