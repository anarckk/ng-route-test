import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, OperatorFunction, PartialObserver, Subject} from 'rxjs';
import {delay, finalize, mergeMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
  host: {
    '[class.d-block]': 'true',
  }
})
export class MergeMapComponent implements OnInit, OnDestroy {
  private click$ = new Subject<MouseEvent>();
  private stop$ = new Subject<MouseEvent>();

  constructor() { }

  ngOnInit() {
    console.log('merge-map ng init.');
    this.click$.pipe(
      o2oRxOpLog('通过mergeMap前'),
      mergeMap(() => interval(1000)),
      o2oRxOpLog('通过mergeMap后'),
      delay(1000),
      takeUntil(this.stop$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    console.log('merge-map ng destroy.');
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

export function o2oRxOperate<T, R>(observable: PartialObserver<T>, replace?: Partial<PartialObserver<R>>): PartialObserver<T | R> {
  return Object.assign({
    next: (data: T) => observable.next(data),
    error: err => observable.error(err),
    complete: () => observable.complete(),
  }, replace);
}

const $rx = '的 rx log:';

export function o2oRxOpLog<T>(where: string): OperatorFunction<T, T> {
  return (source: Observable<T>) => {
    return new Observable<T>(observable => {
      return source.subscribe(o2oRxOperate(observable));
    }).pipe(
      tap(x => console.log(where, $rx, x), e => console.error(where, $rx, e), () => console.log(where, $rx, 'complete.')),
      finalize(() => console.log(where, $rx, 'finalize.')),
    );
  };
}
