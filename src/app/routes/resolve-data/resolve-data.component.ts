import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { o2oRxOpLog } from '../merge-map/merge-map.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resolve-data',
  templateUrl: './resolve-data.component.html',
  styleUrls: ['./resolve-data.component.css']
})
export class ResolveDataComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.data.pipe(o2oRxOpLog('resolve-data')).subscribe(data => {
      // console.log('resolve data: ', data);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
