import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { o2oRxOpLog } from '../../merge-map/merge-map.component';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetail2Component implements OnInit, OnDestroy {
  i: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('data-detail2 init.');
    this.sub = this.route.paramMap.pipe(o2oRxOpLog('route.paramMap')).subscribe((params: ParamMap) => {
      this.i = params.get('index');
    });
  }

  ngOnDestroy(): void {
    console.log('data-detail2 destroy.');
    this.sub.unsubscribe();
  }

  back() {
    this.router.navigate([{outlets: {second: 'data-list2'}}]);
  }
}
