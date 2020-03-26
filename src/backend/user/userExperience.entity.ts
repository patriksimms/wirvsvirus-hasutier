import {Entity, PrimaryColumn} from "typeorm";

@Entity()
export class UserExperience {

    @PrimaryColumn()
    name: string;
}