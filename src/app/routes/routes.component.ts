/**
 * Created by kkcra on 2019/2/27
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes',
  template: `
    <router-outlet></router-outlet>
  `
})
export class RoutesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
