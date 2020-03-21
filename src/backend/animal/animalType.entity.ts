import { Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class AnimalType {

  @PrimaryColumn()
  name: string;
}