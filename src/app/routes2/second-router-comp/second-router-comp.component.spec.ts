import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRouterCompComponent } from './second-router-comp.component';

describe('SecondRouterCompComponent', () => {
  let component: SecondRouterCompComponent;
  let fixture: ComponentFixture<SecondRouterCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondRouterCompComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRouterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
