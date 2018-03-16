import {Request, Response} from "express";
import {getManager, getRepository} from "typeorm";

export async function redirect(request:Request, response:Response) {
    response.redirect('/api/places')
}