import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit, OnDestroy {

  array = new Array(100).fill(0);

  constructor() { }

  ngOnInit() {
    console.log('data-list ng init.');
  }

  ngOnDestroy(): void {
    console.log('data-list ng destroy.');
  }
}
