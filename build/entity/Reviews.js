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
const typeorm_1 = require("typeorm");
const Places_1 = require("./Places");
let Reviews = Reviews_1 = class Reviews {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reviews.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "user_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reviews.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "review", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "pictures", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Reviews_1, reviews => reviews.place),
    __metadata("design:type", Places_1.Place)
], Reviews.prototype, "place", void 0);
Reviews = Reviews_1 = __decorate([
    typeorm_1.Entity()
], Reviews);
exports.Reviews = Reviews;
var Reviews_1;
//# sourceMappingURL=Reviews.js.map