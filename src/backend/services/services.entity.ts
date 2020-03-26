import {Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class ServiceType {

    @PrimaryColumn()
    name: string;
}