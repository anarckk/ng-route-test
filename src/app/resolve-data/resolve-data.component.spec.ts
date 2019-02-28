import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveDataComponent } from './resolve-data.component';

describe('ResolveDataComponent', () => {
  let component: ResolveDataComponent;
  let fixture: ComponentFixture<ResolveDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
