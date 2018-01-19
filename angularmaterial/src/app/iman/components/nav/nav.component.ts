import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Manual } from '../../models/manual';

@Component({
  selector: 'iman-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() manual: Manual;
  
  @Output() stepForward = new EventEmitter<void>();
  @Output() stepBackward = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

}
