import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToMany } from 'typeorm';
import { ServiceType } from '../services/services.entity';
import { User } from '../user/user.entity';
import { Animal } from '../animal/animal.entity';

/**
 * holt die inhalte einer anfrage eines tierbesitzers
 */
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
