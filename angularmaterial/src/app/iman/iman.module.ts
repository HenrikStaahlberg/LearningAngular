import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImanComponent } from './iman.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoBubbleComponent } from './components/info-bubble/info-bubble.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './components/step/step.component';
import { OutOfComponent } from './components/out-of/out-of.component';

const routes: Routes = [
  {path: '', component: ImanComponent}, 
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImanComponent, NavComponent, InfoBubbleComponent, StepComponent, OutOfComponent]
})
export class ImanModule { }
