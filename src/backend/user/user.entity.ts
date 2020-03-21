import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { animal } from '../animal/animal.entity';
import { Note } from '../notes/note.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  email: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  isVerified: boolean;

  @Column()
  description: string;

  @OneToMany(type => animal, animal => animal.owner)
  animals: animal[];

  @OneToMany(type => Note, note => note.owner)
  notes: Note[];
}
