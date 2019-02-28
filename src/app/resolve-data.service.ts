/**
 * Created by kkcra on 2019/2/26
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ResolveData } from './resolve-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ResolveDataService implements Resolve<ResolveData> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolveData> | Promise<ResolveData> | ResolveData {
    console.log('路由数据预加载', route, state);
    return of({
      a: 2
    }).pipe(
      delay(500)
    );
  }

  constructor() { }

}

