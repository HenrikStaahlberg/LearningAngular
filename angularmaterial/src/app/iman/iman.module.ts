import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImanComponent } from './iman.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoBubbleComponent } from './components/info-bubble/info-bubble.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImanComponent, NavComponent, InfoBubbleComponent]
})
export class ImanModule { }
