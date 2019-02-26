/**
 * Created by kkcra on 2019/2/26
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Data } from './data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ResolveDataService implements Resolve<Data> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Data> | Promise<Data> | Data {
    console.log('resolve data 服务触发', route, state);
    return of({
      a: 1
    }, {
      a: 2
    }).pipe(
      delay(1000)
    );
  }

  constructor() { }

}

