import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TutorialMain } from "./tutorial-main.component";
import { TutorialStepper } from "./tutorial-stepper.component";
import { MaterialModule } from "../Material/Material.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [        
        MaterialModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'tutorial', component: TutorialMain }
        ]),
    ],
    declarations: [
        TutorialMain,
        TutorialStepper,
    ],
    providers: [

    ]
})
export class TutorialModule {}