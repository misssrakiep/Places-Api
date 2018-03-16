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
const Places_1 = require("../entity/Places");
/**
 * Saves given post.
 */
function placePostAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const myPlaceRepository = typeorm_1.getRepository(Places_1.Place);
        let data = request.body;
        console.log("data", data);
        // create a real post object from post json object sent over http
        const newPlace = new Places_1.Place();
        newPlace.placeName = data.placeName;
        newPlace.type = data.type;
        newPlace.website = data.website;
        newPlace.latlng = data.latlng;
        newPlace.review = data.review;
        // save received post
        yield myPlaceRepository.save(newPlace);
        // return saved post back
        response.send(newPlace);
    });
}
exports.placePostAction = placePostAction;
//# sourceMappingURL=PlacePostAction.js.map