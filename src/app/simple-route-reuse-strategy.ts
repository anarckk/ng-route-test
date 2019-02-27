/**
 * Created by kkcra on 2019/2/27
 */
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class SimpleRouteReuseStrategy implements RouteReuseStrategy {
  _cacheRouters: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this._cacheRouters[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    const cache = this._cacheRouters[route.routeConfig.path];
    return cache && cache.handle;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
