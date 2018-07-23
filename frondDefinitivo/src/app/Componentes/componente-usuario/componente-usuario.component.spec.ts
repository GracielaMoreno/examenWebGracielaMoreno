import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUsuarioComponent } from './componente-usuario.component';

describe('ComponenteUsuarioComponent', () => {
  let component: ComponenteUsuarioComponent;
  let fixture: ComponentFixture<ComponenteUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
