import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevatorStateService {

  isMoving: boolean = false;
  public hasErrored: Array<boolean> = [false, false, false];

  public resetErrors(){
    this.hasErrored = [false, false, false];
  }
  constructor() { }
}
