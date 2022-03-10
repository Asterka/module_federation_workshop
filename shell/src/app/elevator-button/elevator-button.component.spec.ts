import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorButtonComponent } from './elevator-button.component';

describe('ElevatorButtonComponent', () => {
  let component: ElevatorButtonComponent;
  let fixture: ComponentFixture<ElevatorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevatorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
