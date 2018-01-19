import { Component, OnInit, Input } from '@angular/core';
import { Manual } from '../../models/manual';

@Component({
  selector: 'iman-info-bubble',
  templateUrl: './info-bubble.component.html',
  styleUrls: ['./info-bubble.component.scss']
})
export class InfoBubbleComponent implements OnInit {

  @Input() manual: Manual;

  constructor() { }

  ngOnInit() {
    console.log(this.manual.steps[this.manual.currentStep].hasButton);
  }

}
