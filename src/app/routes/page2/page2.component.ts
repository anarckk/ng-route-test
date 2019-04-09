/**
 * Created by kkcra on 2019/4/3
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-2',
  template: `
    page2 work!
    <button (click)="click()">page1</button>
  `
})
export class Page2Component implements OnInit {
  constructor(
    // private router: Router,
  ) {
  }

  ngOnInit() {
  }

  click() {

  }
}
