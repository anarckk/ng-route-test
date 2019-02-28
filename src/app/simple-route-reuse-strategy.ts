/**
 * Created by kkcra on 2019/2/27
 */
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class SimpleRouteReuseStrategy implements RouteReuseStrategy {
  private _cacheRouters: { [key: string]: any } = {};

  /**
   * 是不是应该在离开的时候存一下路由状态
   * detach 分离
   * 在分离的时候，是不是应该存一下旧路由？
   * @param route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 对路由 data 里 reuse 字段为 true 的路由进行存储
    const result = route && route.routeConfig && route.routeConfig.data && (route.routeConfig.data.reuse === true);
    console.log(route.url + ' should detach: ' + !!result);
    return !!result;
  }

  /**
   * 我把路由和路由处理对象告诉你，你存一下
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }

  /**
   * 在进入的时候，是不是应该用还原的方式显示组件
   * attach 附加
   * 在加载的时候，是不是应该取一下新路由
   * @param route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由
    const result = !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path] && (
      // 对路由 data 里 reuse 字段为 true 的路由进行存储
      route && route.routeConfig && route.routeConfig.data && (route.routeConfig.data.reuse === true)
    );
    console.log(route.url + ' should attach: ' + !!result);
    return !!result;
  }

  /**
   * 我把我要去的地方告诉你，你把之前存的路由处理对象还给我
   * @param route
   */
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
