import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Reviews} from "../entity/Reviews";
import {Place} from "../entity/Places";


/**
 * Saves given post.
 */
export async function reviewSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const reviewsRepository = getRepository(Reviews);
    const placeRepository = getRepository(Place);
    let data = request.body;
    // console.log(data);
    
    // create a real post object from post json object sent over http
    const newReview = new Reviews();
    const place = await placeRepository.findOneById(request.params.id);

    console.log("PLACE ID PARAM", request.params.id);
    
    newReview.user_name = data.user_name;
    newReview.rating = data.rating;
    newReview.review = data.review;
    newReview.pictures = data.pictures;
    newReview.place = place;
    newReview.place_id = request.params.id;
    
    // save received post
    await reviewsRepository.save(newReview);

    // return saved post back
    response.send(newReview);
}