import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePeliculaComponent } from './componente-pelicula.component';

describe('ComponentePeliculaComponent', () => {
  let component: ComponentePeliculaComponent;
  let fixture: ComponentFixture<ComponentePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
