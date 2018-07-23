import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteActorComponent } from './componente-actor.component';

describe('ComponenteActorComponent', () => {
  let component: ComponenteActorComponent;
  let fixture: ComponentFixture<ComponenteActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
