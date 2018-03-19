import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Reviews} from "../entity/Reviews";

/**
 * Loads all posts from the database.
 */
export async function reviewGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const reviewRepository = getRepository(Reviews);

    // load a post by a given post id
    const reviews = await reviewRepository.find();

    // return loaded places
    response.send(reviews);
}