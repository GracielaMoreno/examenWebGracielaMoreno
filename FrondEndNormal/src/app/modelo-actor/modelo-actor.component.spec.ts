import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloActorComponent } from './modelo-actor.component';

describe('ModeloActorComponent', () => {
  let component: ModeloActorComponent;
  let fixture: ComponentFixture<ModeloActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
