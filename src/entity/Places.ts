import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Reviews } from './Reviews';

@Entity()
export class Place {


    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    lat: number;

    @Column()
    lng: number;

    @Column()
    placeName: string;

    @Column()
    address: string;

    @Column()
    type?: string;

    @Column()
    website?: string;
    
    @OneToMany(type => Place, place => place.review)
    review?: Reviews;

}
