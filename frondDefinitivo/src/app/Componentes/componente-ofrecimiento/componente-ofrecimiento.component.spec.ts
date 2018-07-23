import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOfrecimientoComponent } from './componente-ofrecimiento.component';

describe('ComponenteOfrecimientoComponent', () => {
  let component: ComponenteOfrecimientoComponent;
  let fixture: ComponentFixture<ComponenteOfrecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteOfrecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteOfrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
