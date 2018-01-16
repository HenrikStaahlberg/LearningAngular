import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <div style="text-align:center">
    <button mat-button><mat-icon>face</mat-icon>Click me!</button>
    <mat-checkbox>Check me!</mat-checkbox>
  </div>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
