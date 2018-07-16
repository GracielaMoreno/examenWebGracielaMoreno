import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInicioComponent } from './barra-inicio.component';

describe('BarraInicioComponent', () => {
  let component: BarraInicioComponent;
  let fixture: ComponentFixture<BarraInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
