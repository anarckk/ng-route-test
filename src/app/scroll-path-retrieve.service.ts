/**
 * Created by kkcra on 2019/4/2
 * ```
 * @Host() private scrollPathRetrieveSer:ScrollPathRetrieveService,
 * ```
 */
import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, Scroll} from "@angular/router";
import {filter, takeUntil} from "rxjs/operators";
import {Subject, Subscription} from "rxjs";

@Injectable()
export class ScrollPathRetrieveService implements OnDestroy {
  private stop$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  retrieve<T>(store: () => T, retrieve: (value: T) => void): Subscription {
    let value: T = undefined;
    return this.router.events.pipe(filter(e => e instanceof Scroll), takeUntil(this.stop$)).subscribe((e: Scroll) => {
      if (value === undefined) {
        value = store();
      } else {
        retrieve(value);
        value = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
