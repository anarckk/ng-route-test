import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, interval, Subscription} from "rxjs";
import {withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent implements OnInit, OnDestroy {
  @ViewChild('btn', {read: ElementRef}) btnRef: ElementRef<HTMLButtonElement>;
  private sub: Subscription;

  ngOnInit(): void {
    const clicks = fromEvent(this.btnRef.nativeElement, 'click');
    const timer = interval(1000);
    const result = clicks.pipe(withLatestFrom(timer));
    this.sub = result.subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
