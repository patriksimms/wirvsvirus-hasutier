import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { AnimalType } from './animalType.entity';

@Entity()
export class Animal {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => AnimalType)
  @JoinColumn()
  type: AnimalType;

  @Column({ type: 'varchar' })
  @ManyToOne(type => User, user => user.animals)
  owner: User;

  @Column()
  age: number;

  @Column()
  size: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  description: string;

  @Column({ nullable: true })
  imageName: string;
}
