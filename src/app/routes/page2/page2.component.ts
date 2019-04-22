/**
 * Created by kkcra on 2019/4/3
 */
import {Component, OnInit} from '@angular/core';
import {HorizontalDragdropService} from "../../shared/horizontal-dragdrop/horizontal-dragdrop.service";
import {HorizontalDragDrop} from "../../shared/horizontal-dragdrop/horizantal-dragdrop.namespace";
import IDropConfig = HorizontalDragDrop.IDropConfig;

@Component({
  selector: 'page-2',
  template: `
    <app-horizontal-dragdrop [data]="data"></app-horizontal-dragdrop>
    <app-horizontal-dragdrop [data]="data1"></app-horizontal-dragdrop>
  `,
  providers: [
    HorizontalDragdropService,
  ]
})
export class Page2Component implements OnInit {
  data: IDropConfig = {
    group: 'group0',
    dragList: [
      {
        txt: 'A00', children: {
          group: 'group01',
          dragList: [
            {txt: 'A001'},
            {
              txt: 'A002', children: {
                group: 'group012',
                dragList: [
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
  data1: IDropConfig = {
    group: 'group1',
    dragList: [
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
