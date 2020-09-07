import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Votacion1Component } from './votacion1.component';

describe('Votacion1Component', () => {
  let component: Votacion1Component;
  let fixture: ComponentFixture<Votacion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Votacion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Votacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
