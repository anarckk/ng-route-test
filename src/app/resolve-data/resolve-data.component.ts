import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-data',
  templateUrl: './resolve-data.component.html',
  styleUrls: ['./resolve-data.component.css']
})
export class ResolveDataComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('resolve data: ', data);
    });
  }

}
