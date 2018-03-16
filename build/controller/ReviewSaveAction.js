"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Reviews_1 = require("../entity/Reviews");
/**
 * Saves given post.
 */
function reviewSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const reviewsRepository = typeorm_1.getRepository(Reviews_1.Reviews);
        let data = request.body;
        console.log(data);
        // create a real post object from post json object sent over http
        const newReview = new Reviews_1.Reviews();
        newReview.user_name = data.user_name;
        newReview.rating = data.rating;
        newReview.review = data.review;
        newReview.pictures = data.pictures;
        newReview.place = data.place;
        // save received post
        yield reviewsRepository.save(newReview);
        // return saved post back
        response.send(newReview);
    });
}
exports.reviewSaveAction = reviewSaveAction;
//# sourceMappingURL=ReviewSaveAction.js.map