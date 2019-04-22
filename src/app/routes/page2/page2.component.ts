/**
 * Created by kkcra on 2019/4/3
 */
import {Component, OnInit} from '@angular/core';
import {HorizontalDragDrop} from "../../shared/horizontal-dragdrop/horizantal-dragdrop.namespace";
import IData = HorizontalDragDrop.IData;

@Component({
  selector: 'page-2',
  template: `
    <app-horizontal-dragdrop #comp1 [otherDropList]="[comp2.cdkDropList]" [data]="data"></app-horizontal-dragdrop>
    <app-horizontal-dragdrop #comp2 [otherDropList]="[comp1.cdkDropList]" [data]="data1"></app-horizontal-dragdrop>
  `
})
export class Page2Component implements OnInit {
  data: IData = {
    group: 'group0',
    list: [
      {
        txt: 'A00', children: {
          group: 'group01',
          list: [
            {txt: 'A001'},
            {
              txt: 'A002', children: {
                group: 'group012',
                list: [
                  {txt: 'A0021'},
                  {txt: 'A0022'},
                  {txt: 'A0023'},
                ]
              }
            },
            {txt: 'A003'},
          ]
        }
      },
      {txt: 'A01'},
      {txt: 'A02'},
      {txt: 'A03'},
      {txt: 'A04'},
    ],
  };
  data1: IData = {
    group: 'group1',
    list: [
      {txt: 'B00'},
      {txt: 'B01'},
      {txt: 'B02'},
      {txt: 'B03'},
      {txt: 'B04'},
    ],
  };

  constructor() {
  }

  ngOnInit() {
  }
}
