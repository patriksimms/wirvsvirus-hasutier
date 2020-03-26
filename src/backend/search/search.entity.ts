import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {ServiceType} from '../services/services.entity';
import {User} from '../user/user.entity';
import {Animal} from '../animal/animal.entity';

/**
 * holt die inhalte einer anfrage eines tierbesitzers
 */
@Entity()
export class Search {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Animal)
    @JoinTable()
    animals: Animal[];

    @ManyToMany(() => ServiceType)
    @JoinTable()
    serviceTypes: ServiceType[];

    @ManyToOne(() => User, user => user.offers)
    owner: User;

    @Column()
    description: string;

    @Column()
    plz: string;

    @Column()
    from: Date;
}
