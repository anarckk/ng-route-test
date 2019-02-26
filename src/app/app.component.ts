import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { o2oRxOpLog } from './merge-map/merge-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      o2oRxOpLog('router event:')
    ).subscribe();
  }

}
