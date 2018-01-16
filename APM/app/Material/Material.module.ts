import { MatButtonModule, MatStepperModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule, MatStepperModule,BrowserAnimationsModule],
  exports: [MatButtonModule, MatStepperModule,BrowserAnimationsModule],
})
export class MaterialModule { }