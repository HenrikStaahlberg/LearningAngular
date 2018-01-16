import { Component, Input } from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: 'tutorial-stepper',
    moduleId: module.id,
    templateUrl: './tutorial-stepper.component.html',
})
export class TutorialStepper implements OnChanges{

    currentStep: number = 1;

    @Input() steps: number;
    
    stepInfo: string[] = [];

    constructor() {
    }
    
    ngOnChanges(): void {
        console.log(this.steps);
        for(let i = 0; i < this.steps; i++) {
            this.stepInfo[i] = 'Step '+(i+1);
        }
        console.log(this.stepInfo);
    }
}