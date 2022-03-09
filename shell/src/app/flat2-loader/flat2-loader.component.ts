import { Component } from '@angular/core';

@Component({
  selector: 'flat2',
  template: '<router-outlet name="2"></router-outlet>',
})
export class Flat2LoaderComponent {
  constructor() { }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Flat2Router } from './flat2-routing.module';

@NgModule({
  declarations: [
    Flat2LoaderComponent,
  ],
  exports:[Flat2LoaderComponent],
  imports: [
    BrowserModule,
    Flat2Router
  ],
  providers: [],
  bootstrap: []
})
export class Flat2Module { }
