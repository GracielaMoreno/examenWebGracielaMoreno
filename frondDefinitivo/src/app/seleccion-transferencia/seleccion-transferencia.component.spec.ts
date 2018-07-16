import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTransferenciaComponent } from './seleccion-transferencia.component';

describe('SeleccionTransferenciaComponent', () => {
  let component: SeleccionTransferenciaComponent;
  let fixture: ComponentFixture<SeleccionTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
