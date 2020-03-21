import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Animal {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: type;

  @Column({type: 'varchar'})
  @ManyToOne(type => User, user => user.animals)
  owner: User;
}

export enum type {
  DOG,
  CAT,
  BIRD,
  MOUSE,
  FISH
}
