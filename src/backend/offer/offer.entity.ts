import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {AnimalType} from '../animal/animalType.entity';
import {ServiceType} from '../services/services.entity';
import {User} from '../user/user.entity';


/**
 * holt die angebote von personen die gassi gehen würden
 */
@Entity()
export class Offer {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(type => AnimalType)
    @JoinTable()
    animalTypes: AnimalType[];

    @ManyToMany(type => ServiceType)
    @JoinTable()
    serviceTypes: ServiceType[];

    @ManyToOne(type => User, user => user.offers)
    owner: User;

    @Column()
    description: string;

    @Column()
    plz: string;


}
