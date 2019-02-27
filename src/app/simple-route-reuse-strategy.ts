/**
 * Created by kkcra on 2019/2/27
 */
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class SimpleRouteReuseStrategy implements RouteReuseStrategy {
  private _cacheRouters: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 对所有路由允许复用
    return true;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由
    return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // 从缓存中获取快照，若无则返回null
    if (!route.routeConfig || !this._cacheRouters[route.routeConfig.path]) return null;
    return this._cacheRouters[route.routeConfig.path].handle;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 同一路由时复用路由
    return future.routeConfig === curr.routeConfig;
  }
}
