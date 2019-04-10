import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CusDragdropComponent} from './cus-dragdrop.component';

describe('CusDragdropComponent', () => {
  let component: CusDragdropComponent;
  let fixture: ComponentFixture<CusDragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CusDragdropComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
