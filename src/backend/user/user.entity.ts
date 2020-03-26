import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Animal} from '../animal/animal.entity';
import {Offer} from '../offer/offer.entity';
import {UserExperience} from "./userExperience.entity";

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

    @Column({nullable: true})
    imageName: string;

    @OneToMany(() => Animal, animal => animal.owner)
    animals: Animal[];

    @OneToMany(() => Offer, offer => offer.owner)
    offers: Offer[];

    @ManyToMany(() => UserExperience)
    @JoinTable()
    experiences: UserExperience[];
}
