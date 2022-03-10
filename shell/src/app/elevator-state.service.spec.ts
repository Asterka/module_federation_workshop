import { TestBed } from '@angular/core/testing';

import { ElevatorStateService } from './elevator-state.service';

describe('ElevatorStateService', () => {
  let service: ElevatorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevatorStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
