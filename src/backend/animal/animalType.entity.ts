import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnimalType {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;
}