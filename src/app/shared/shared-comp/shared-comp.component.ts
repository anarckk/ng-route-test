import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-comp',
  templateUrl: './shared-comp.component.html',
  styleUrls: ['./shared-comp.component.css']
})
export class SharedCompComponent implements OnInit {
  title = 'shared-comp works!';
  constructor() { }

  ngOnInit() {
  }

}
