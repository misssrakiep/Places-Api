"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Reviews_1 = require("./Reviews");
var Place = /** @class */ (function () {
    function Place() {
    }
    Place_1 = Place;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Place.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Place.prototype, "lat", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Place.prototype, "lng", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Place.prototype, "placeName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Place.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Place.prototype, "website", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Place_1; }, function (place) { return place.review; }),
        __metadata("design:type", Reviews_1.Reviews)
    ], Place.prototype, "review", void 0);
    Place = Place_1 = __decorate([
        typeorm_1.Entity()
    ], Place);
    return Place;
    var Place_1;
}());
exports.Place = Place;
//# sourceMappingURL=Places.js.map