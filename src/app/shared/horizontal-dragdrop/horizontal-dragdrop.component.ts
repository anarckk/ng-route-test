import {Component, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {CdkDrag} from "@angular/cdk/typings/esm5/drag-drop";
import {HorizontalDragdropService} from "./horizontal-dragdrop.service";
import {HorizontalDragDrop} from "./horizantal-dragdrop.namespace";
import IDropConfig = HorizontalDragDrop.IDropConfig;
import IDragConfig = HorizontalDragDrop.IDragConfig;
import isInChild = HorizontalDragDrop.isInChild;

@Component({
  selector: 'app-horizontal-dragdrop',
  templateUrl: './horizontal-dragdrop.component.html',
  styleUrls: ['./horizontal-dragdrop.component.css'],
})
export class HorizontalDragdropComponent implements OnInit, OnDestroy {
  get myself(): HorizontalDragdropComponent {
    return this;
  }

  get connectTo(): CdkDropList[] {
    return this.dragdropService.cdkDropListArray.filter(r => r !== this.cdkDropList);
  }

  enterPredicate = (drag: CdkDrag<IDragConfig>, drop: CdkDropList<IDropConfig>) => {
    const result = drop.data.isEnter && !isInChild(drop.data);
    if (result) {
      console.log(drop.data.group);
    }
    return result;
  };
  @Input() data: IDropConfig;
  @Input() parentComp: HorizontalDragdropComponent | undefined;
  @ViewChild(CdkDropList) cdkDropList: CdkDropList;
  @ViewChildren(HorizontalDragdropComponent) childCompList: HorizontalDragdropComponent[] = [];

  constructor(
    private dragdropService: HorizontalDragdropService,
  ) {
  }

  ngOnInit() {
    this.dragdropService.cdkDropListArray.push(this.cdkDropList);
  }

  ngOnDestroy(): void {
    this.dragdropService.cdkDropListArray.splice(this.dragdropService.cdkDropListArray.indexOf(this.cdkDropList), 1);
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.data.dragList, event.previousIndex, event.currentIndex);
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.data.isEnter = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.data.isEnter = false;
  }
}
