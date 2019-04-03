import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WithLatestFromComponent} from './with-latest-from.component';

describe('WithLatestFromComponent', () => {
  let component: WithLatestFromComponent;
  let fixture: ComponentFixture<WithLatestFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithLatestFromComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
