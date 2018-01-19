import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step';
import { Manual } from '../../models/manual';

const testManual: Manual = {
  steps: [
    {
      id: 1,
      description: 'Tester1',
    
      hasButton: true,
      buttonSkipTo: 4,
    },
    {
      id: 2,
      description: 'Tester2',
    
      hasButton: false,
      buttonSkipTo: 0,
    },
    {
      id: 3,
      description: 'Tester3',
    
      hasButton: false,
      buttonSkipTo: 0,
    },
    {
      id: 4,
      description: 'Tester4',
    
      hasButton: true,
      buttonSkipTo: 2,
    },
    {
      id: 5,
      description: 'Tester5',
    
      hasButton: true,
      buttonSkipTo: 0,
    }
  ],
  currentStep: 0,
}


@Component({
  selector: 'iman-step',
  templateUrl: './step.component.html',
  styles: []
})
export class StepComponent implements OnInit {

  private manual: Manual = testManual;

  step(steps: number) {
    let newStep = this.manual.currentStep + steps; 
    if(newStep >= 0 && newStep < this.manual.steps.length)
    {
      this.manual.currentStep = newStep;
    } 
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
