import { ElevatorStateService } from './elevator-state.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmptyroomComponent } from './emptyroom/emptyroom.component';
import { ElevatorButtonComponent } from './elevator-button/elevator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyroomComponent,
    ElevatorButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ElevatorStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
