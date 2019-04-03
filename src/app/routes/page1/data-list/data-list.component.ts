import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReuseComponentInterface} from '../../../service/reuse-component.interface';
import {InputData} from './input-data';
import {DataDetailResolverService} from '../data-detail/data-detail-resolver.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit, OnDestroy, AfterViewChecked, ReuseComponentInterface<number> {
  array: InputData[];
  @ViewChild('container') private containerRef: ElementRef<HTMLDivElement>;
  private retrieveData;

  constructor(
    private cd: ChangeDetectorRef,
    private dataDetailResolverService: DataDetailResolverService,
  ) {
    this.array = new Array(100).fill(null).map<InputData>((v, i) => {
      return {inputValue: i + ''};
    });
    this.dataDetailResolverService.dataOb$ = of(this.array);
  }

  get scrollTop(): number {
    return this.containerRef && this.containerRef.nativeElement.scrollTop;
  }

  set scrollTop(value: number) {
    if (this.containerRef)
      this.containerRef.nativeElement.scrollTop = value;
  }

  ngOnInit() {
    console.log('data-list ng init.');
  }

  ngAfterViewChecked(): void {
    if (this.retrieveData) {
      this.scrollTop = this.retrieveData;
      this.retrieveData = null;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    console.log('data-list ng destroy.');
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
