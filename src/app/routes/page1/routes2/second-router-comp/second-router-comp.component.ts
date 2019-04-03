import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-router-comp',
  templateUrl: './second-router-comp.component.html',
  styleUrls: ['./second-router-comp.component.css']
})
export class SecondRouterCompComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('second-router-comp init.');
  }

}
