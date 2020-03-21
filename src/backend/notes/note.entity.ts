import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';


@Entity()
export class Note {

  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => User, User => User.notes)
  owner: User;

  @Column()
  description: string;

  @Column()
  type: NoteType;
}

enum NoteType {
  OFFER,
  SEARCH
}