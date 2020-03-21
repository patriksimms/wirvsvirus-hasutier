import { type } from './animalType';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { user } from '../user/user.entity';

@Entity()
export class animal {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: type;

  @ManyToOne(type => user, user => user.animals)
  owner: user;
}