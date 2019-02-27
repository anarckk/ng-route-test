import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { o2oRxOpLog } from '../merge-map/merge-map.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit, OnDestroy {
  i: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(o2oRxOpLog('route.paramMap')).subscribe((params: ParamMap) => {
      this.i = params.get('index');
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
