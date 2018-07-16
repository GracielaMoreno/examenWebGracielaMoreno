import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionTransferenciaComponent } from './peticion-transferencia.component';

describe('PeticionTransferenciaComponent', () => {
  let component: PeticionTransferenciaComponent;
  let fixture: ComponentFixture<PeticionTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
