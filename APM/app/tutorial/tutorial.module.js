"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tutorial_main_component_1 = require("./tutorial-main.component");
var tutorial_stepper_component_1 = require("./tutorial-stepper.component");
var Material_module_1 = require("../Material/Material.module");
var common_1 = require("@angular/common");
var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = __decorate([
        core_1.NgModule({
            imports: [
                Material_module_1.MaterialModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'tutorial', component: tutorial_main_component_1.TutorialMain }
                ]),
            ],
            declarations: [
                tutorial_main_component_1.TutorialMain,
                tutorial_stepper_component_1.TutorialStepper,
            ],
            providers: []
        })
    ], TutorialModule);
    return TutorialModule;
}());
exports.TutorialModule = TutorialModule;
//# sourceMappingURL=tutorial.module.js.map