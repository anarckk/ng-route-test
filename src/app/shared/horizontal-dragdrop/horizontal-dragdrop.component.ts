import {Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {CdkDragDrop, CdkDragExit, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {CdkDragEnter} from "@angular/cdk/typings/esm5/drag-drop";
import {HorizontalDragDrop} from "./horizantal-dragdrop.namespace";
import IData = HorizontalDragDrop.IData;

@Component({
  selector: 'app-horizontal-dragdrop',
  templateUrl: './horizontal-dragdrop.component.html',
  styleUrls: ['./horizontal-dragdrop.component.css']
})
export class HorizontalDragdropComponent implements OnInit {
  @Input() parentComp: HorizontalDragdropComponent | undefined;
  @Input() otherDropList: CdkDropList[] = [];
  @ViewChild(CdkDropList) cdkDropList: CdkDropList;
  @ViewChildren(HorizontalDragdropComponent) childCompList: HorizontalDragdropComponent[] = [];
  @Input() data: IData;

  get connectDropList(): CdkDropList[] {
    return [...this.otherDropList, ...this.childCompList.map(comp => comp.cdkDropList)]
      .filter(drop => drop !== this.cdkDropList);
  }

  get myself(): HorizontalDragdropComponent {
    return this;
  }

  constructor() {
  }

  ngOnInit() {
    if (this.parentComp)
      console.log(this.data.group, this.parentComp.data.group);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.list, event.previousIndex, event.currentIndex);
  }

  dropEnter($event: CdkDragEnter<any>) {
    console.log(this.data.group, 'drop enter', $event);
  }

  dropExit($event: CdkDragExit<any>) {
    console.log(this.data.group, 'drop exit', $event);
  }
}
