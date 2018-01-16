import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { TutorialModule } from './tutorial/tutorial.module';

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    TutorialModule
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
