/**
 * Created by kkcra on 2019/3/2
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {InputData} from '../data-list/input-data';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataDetailResolverService implements Resolve<InputData> {
  dataOb$: Observable<InputData[]>;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InputData> | Promise<InputData> | InputData {
    return this.dataOb$.pipe(map(inputArray => inputArray[(+route.paramMap.get('index'))]));
  }

  constructor() { }
}
