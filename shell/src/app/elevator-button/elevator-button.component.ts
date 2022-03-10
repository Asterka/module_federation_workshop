import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-elevator-button',
  templateUrl: './elevator-button.component.html',
  styleUrls: ['./elevator-button.component.scss']
})
export class ElevatorButtonComponent implements OnInit {

  @Input() name: string = "";

  isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
