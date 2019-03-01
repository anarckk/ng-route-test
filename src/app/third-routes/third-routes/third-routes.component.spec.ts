import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRoutesComponent } from './third-routes.component';

describe('ThirdRoutesComponent', () => {
  let component: ThirdRoutesComponent;
  let fixture: ComponentFixture<ThirdRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdRoutesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
