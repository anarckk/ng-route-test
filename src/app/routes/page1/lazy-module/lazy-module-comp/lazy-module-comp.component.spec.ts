import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LazyModuleCompComponent} from './lazy-module-comp.component';

describe('LazyModuleCompComponent', () => {
  let component: LazyModuleCompComponent;
  let fixture: ComponentFixture<LazyModuleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModuleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModuleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
