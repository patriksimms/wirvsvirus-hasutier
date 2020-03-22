import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AnimalType } from '../animal/animalType.entity';
import { ManyToMany } from 'typeorm';
import { ServiceType } from '../services/services.entity';
import { User } from '../user/user.entity';
import { Animal } from '../animal/animal.entity';

@Entity()
export class Search {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(type => Animal)
  @JoinTable()
  animals: Animal[];

  @ManyToMany(type => ServiceType)
  @JoinTable()
  serviceTypes: ServiceType[];

  @ManyToOne(type => User, user => user.offers)
  owner: User;

  @Column()
  description: string;

  @Column()
  plz: string;

  @Column()
  from: Date;


}
