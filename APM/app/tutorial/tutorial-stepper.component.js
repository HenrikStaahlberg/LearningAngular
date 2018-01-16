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
var core_1 = require("@angular/core");
var TutorialStepper = /** @class */ (function () {
    function TutorialStepper() {
        this.currentStep = 1;
        this.stepInfo = [];
    }
    TutorialStepper.prototype.ngOnChanges = function () {
        console.log(this.steps);
        for (var i = 0; i < this.steps; i++) {
            this.stepInfo[i] = 'Step ' + (i + 1);
        }
        console.log(this.stepInfo);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TutorialStepper.prototype, "steps", void 0);
    TutorialStepper = __decorate([
        core_1.Component({
            selector: 'tutorial-stepper',
            moduleId: module.id,
            templateUrl: './tutorial-stepper.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], TutorialStepper);
    return TutorialStepper;
}());
exports.TutorialStepper = TutorialStepper;
//# sourceMappingURL=tutorial-stepper.component.js.map