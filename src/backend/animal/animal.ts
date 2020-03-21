import { type } from './animalType';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class animal {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: type;
}