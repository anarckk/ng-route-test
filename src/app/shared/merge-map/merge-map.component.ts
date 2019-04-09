import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from "rxjs";
import {delay, mergeMap, takeUntil} from "rxjs/operators";
import {rxDebug} from "ngx-rx";

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit, OnDestroy {
  private click$ = new Subject<MouseEvent>();
  private stop$ = new Subject<MouseEvent>();

  constructor() {
  }

  ngOnInit() {
    console.log('merge-map ng init.');
    this.click$.pipe(
      mergeMap(() => interval(1000)),
      rxDebug('merge-map'),
      delay(1000),
      takeUntil(this.stop$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.stop$.complete();
    this.click$.complete();
  }

  click(event: MouseEvent) {
    this.click$.next(event);
  }

  stop(event: MouseEvent) {
    this.stop$.next(event);
  }
}
