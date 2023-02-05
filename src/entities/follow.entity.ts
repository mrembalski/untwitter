import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

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
}
