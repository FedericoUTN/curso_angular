import { TestBed } from '@angular/core/testing';

import { GuardaEventoGuard } from './guarda-evento.guard';

describe('GuardaEventoGuard', () => {
  let guard: GuardaEventoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaEventoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
