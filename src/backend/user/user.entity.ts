import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animal/animal.entity';
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

  @Column({nullable: true})
  verifiedBy: string;

  @Column()
  description: string;

  @Column()
  birthDate: Date;

  @Column()
  hashedPassword: string;

  @OneToMany(type => Animal, animal => animal.owner)
  animals: Animal[];

  @OneToMany(type => Note, note => note.owner)
  notes: Note[];
}
