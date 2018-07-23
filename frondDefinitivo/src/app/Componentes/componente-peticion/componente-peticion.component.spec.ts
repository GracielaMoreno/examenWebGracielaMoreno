import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePeticionComponent } from './componente-peticion.component';

describe('ComponentePeticionComponent', () => {
  let component: ComponentePeticionComponent;
  let fixture: ComponentFixture<ComponentePeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
