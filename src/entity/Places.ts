import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Reviews } from './Reviews';

@Entity()
export class Place {


    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("decimal", { precision: 10, scale: 5 })
    lat: number;

    @Column("decimal", { precision: 10, scale: 5 })
    lng: number;

    @Column()
    placeName: string;

    @Column()
    address: string;

    @Column()
    place_id: string;

    @Column()
    type?: string;

    @Column()
    website?: string;
    
    @OneToMany(type => Reviews, review => review.place)
    review?: Reviews[];

}
