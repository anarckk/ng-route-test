import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-comp',
  templateUrl: './lazy-comp.component.html',
  styleUrls: ['./lazy-comp.component.css']
})
export class LazyCompComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
