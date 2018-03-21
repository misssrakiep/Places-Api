import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Reviews } from './Reviews';

@Entity()
export class Place {


    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    lat: string;

    @Column()
    lng: string;

    @Column()
    placeName: string;

    @Column()
    type?: string;

    @Column()
    website?: string;
    
    @OneToMany(type => Place, place => place.review)
    review?: Reviews;

}
