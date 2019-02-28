import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { SimpleRouteReuseStrategy } from './simple-route-reuse-strategy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private routeReuseStrategy: RouteReuseStrategy,
    private router: Router,
  ) {
  }

  /**
   * 清理路由缓存
   */
  clear() {
    const cache = (<SimpleRouteReuseStrategy>this.routeReuseStrategy)._cacheRouters;
    for (let key in cache) {
      try {
        cache[key].handle.componentRef.destroy();
        delete cache[key];
        console.log('清理:', key);
      } catch (e) {
        // empty
      }
    }
  }

  look() {
    const cache = (<SimpleRouteReuseStrategy>this.routeReuseStrategy)._cacheRouters;
    console.log(cache);
  }

  clearSecond() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{outlets: {second: null}}]);
  }
}
