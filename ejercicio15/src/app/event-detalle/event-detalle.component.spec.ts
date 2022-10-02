import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetalleComponent } from './event-detalle.component';

describe('EventDetalleComponent', () => {
  let component: EventDetalleComponent;
  let fixture: ComponentFixture<EventDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
