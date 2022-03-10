import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyroomComponent } from './emptyroom.component';

describe('EmptyroomComponent', () => {
  let component: EmptyroomComponent;
  let fixture: ComponentFixture<EmptyroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
