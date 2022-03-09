import { Flat2Module } from './flat2-loader/flat2-loader.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Flat1Module } from './flat1-loader/flat1-loader.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Flat1Module,
    Flat2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
