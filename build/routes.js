"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlaceGetAllAction_1 = require("./controller/PlaceGetAllAction");
var PlaceGetByIdAction_1 = require("./controller/PlaceGetByIdAction");
var ReviewSaveAction_1 = require("./controller/ReviewSaveAction");
var ReviewGetAllAction_1 = require("./controller/ReviewGetAllAction");
var PlacePostAction_1 = require("./controller/PlacePostAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/api/places",
        method: "get",
        action: PlaceGetAllAction_1.placeGetAllAction
    },
    {
        path: "/api/myPlace",
        method: "post",
        action: PlacePostAction_1.placePostAction
    },
    {
        path: "/api/getReviews",
        method: "get",
        action: ReviewGetAllAction_1.reviewGetAllAction
    },
    {
        path: "/api/places/:id",
        method: "get",
        action: PlaceGetByIdAction_1.placeGetByIdAction
    },
    {
        path: "/api/places/:id/postReviews",
        method: "post",
        action: ReviewSaveAction_1.reviewSaveAction
    }
];
//# sourceMappingURL=routes.js.map