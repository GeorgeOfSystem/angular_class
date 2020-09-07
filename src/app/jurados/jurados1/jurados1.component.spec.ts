import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jurados1Component } from './jurados1.component';

describe('Jurados1Component', () => {
  let component: Jurados1Component;
  let fixture: ComponentFixture<Jurados1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jurados1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jurados1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
