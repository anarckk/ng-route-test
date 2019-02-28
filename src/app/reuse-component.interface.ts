/**
 * Created by kkcra on 2019/2/28
 */
export interface ReuseComponentInterface<T> {
  /**
   * 由组件来提供一个api，在路由复用到达 store 阶段时调用
   */
  store(): T;

  retrieve(value: T);
}
