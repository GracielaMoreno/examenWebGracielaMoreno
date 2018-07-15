import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloUsuarioComponent } from './modelo-usuario.component';

describe('ModeloUsuarioComponent', () => {
  let component: ModeloUsuarioComponent;
  let fixture: ComponentFixture<ModeloUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
