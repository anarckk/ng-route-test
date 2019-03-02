import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { o2oRxOpLog } from '../merge-map/merge-map.component';
import { Subject } from 'rxjs';
import { retry, takeUntil } from 'rxjs/operators';
import { InputData } from '../data-list/input-data';
import { ReuseComponentInterface } from '../reuse-component.interface';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit, OnDestroy, ReuseComponentInterface<null> {
  inputValue: string;
  private stop$ = new Subject();
  i: string;
  detail: InputData;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('data-detail init.');
    this.route.paramMap.pipe(o2oRxOpLog('data-detail route.paramMap'), retry(), takeUntil(this.stop$)).subscribe((params: ParamMap) => {
      this.i = params.get('index');
    });
    this.route.data.pipe(o2oRxOpLog('data-detail route data'), retry(), takeUntil(this.stop$)).subscribe((data: {
      detail: InputData
    }) => {
      this.detail = data.detail;
      this.inputValue = data.detail.inputValue;
    });
  }

  ngOnDestroy(): void {
    console.log('data-detail destroy.');
    this.stop$.next();
    this.stop$.complete();
  }

  retrieve(value: null) {
  }

  store(): null {
    this.detail.inputValue = this.inputValue;
    return null;
  }
}
