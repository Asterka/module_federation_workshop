import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flat1',
  template: '<router-outlet name="1"></router-outlet>',
})
export class Flat1LoaderComponent {
  constructor() { }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Flat1Router } from './flat1-routing.module';

@NgModule({
  declarations: [
    Flat1LoaderComponent,
  ],
  exports:[Flat1LoaderComponent],
  imports: [
    BrowserModule,
    Flat1Router
  ],
  providers: [],
  bootstrap: []
})
export class Flat1Module { }
