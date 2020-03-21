import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { animal } from '../animal/animal.entity';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @OneToMany(type => animal, animal => animal.owner)
  animals: animal[];
}