import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn(
        {
            nullable: false,
            generated: true,
            type: "bigint"
        }
    )
    id: ObjectID;

    @Column({
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;
}