import { Component } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { SimpleRouteReuseStrategy } from './simple-route-reuse-strategy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private routeReuseStrategy: RouteReuseStrategy,
  ) {
  }

  /**
   * 清理路由缓存
   */
  clear() {
    const cache = (<SimpleRouteReuseStrategy>this.routeReuseStrategy)._cacheRouters;
    for (let key in cache) {
      cache[key].handle.componentRef.destroy();
    }
  }
}
