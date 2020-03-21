import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


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
}