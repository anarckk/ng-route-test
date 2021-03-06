import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReuseComponentInterface} from '../../../../service/reuse-component.interface';

@Component({
  selector: 'app-data-list2',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataList2Component implements OnInit, OnDestroy, AfterViewChecked, ReuseComponentInterface<number> {
  array = new Array(100).fill(0);
  @ViewChild('container') containerRef: ElementRef<HTMLDivElement>;
  private retrieveData;

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  get scrollTop(): number {
    return this.containerRef && this.containerRef.nativeElement.scrollTop;
  }

  set scrollTop(value: number) {
    if (this.containerRef)
      this.containerRef.nativeElement.scrollTop = value;
  }

  ngOnInit() {
    console.log('data-list2 ng init.');
  }

  ngAfterViewChecked(): void {
    if (this.retrieveData) {
      this.scrollTop = this.retrieveData;
      this.retrieveData = null;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    console.log('data-list2 ng destroy.');
  }

  scroll() {
    // empty
  }

  setValue(value) {
    this.scrollTop = value.scrollTop;
  }

  retrieve(value: number) {
    this.retrieveData = value;
  }

  store(): number {
    return this.scrollTop;
  }
}
