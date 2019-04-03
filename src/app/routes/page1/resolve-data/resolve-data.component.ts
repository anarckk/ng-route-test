import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ResolveData} from '../../../service/resolve-data';

@Component({
  selector: 'app-resolve-data',
  templateUrl: './resolve-data.component.html',
  styleUrls: ['./resolve-data.component.css']
})
export class ResolveDataComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  a: number;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.route.data.subscribe((data: {
      data: ResolveData
    }) => {
      this.a = data.data.a;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
