import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPeliculaComponent } from './modelo-pelicula.component';

describe('ModeloPeliculaComponent', () => {
  let component: ModeloPeliculaComponent;
  let fixture: ComponentFixture<ModeloPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
