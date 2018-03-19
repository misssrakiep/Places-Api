import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Place} from "../entity/Places";
import {Reviews} from "../entity/Reviews";

/**
 * Loads post by a given id.
 */
export async function placeGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const placeRepository = getRepository(Place);
    const reviewsRepository = getRepository(Reviews);

    // load a post by a given post id
    const place = await placeRepository.findOneById(request.params.id);
    const reviews = await reviewsRepository.find({place: request.params.id})
    

    // if post was not found return 404 to the client
    if (!place) {
        response.status(404);
        response.end();
        return;
    }
    if (!reviews) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(place);
}
