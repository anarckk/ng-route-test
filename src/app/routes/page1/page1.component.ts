import {Component, OnInit} from '@angular/core';
import {SimpleRouteReuseStrategy} from "../../service/simple-route-reuse-strategy";
import {Router, RouteReuseStrategy} from "@angular/router";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(
    private routeReuseStrategy: RouteReuseStrategy,
    private router: Router,
  ) {
  }

  ngOnInit() {
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

  jumpToSecond() {
    this.router.navigate([{outlets: {second: 'lazy-comp'}}]);
  }
}
