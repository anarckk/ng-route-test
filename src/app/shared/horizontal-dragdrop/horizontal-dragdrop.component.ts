import {ChangeDetectorRef, Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
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
  get connectTo(): CdkDropList[] {
    return this.dragdropService.cdkDropListArray.filter(r => r !== this.cdkDropList);
  }

  enterPredicate = (drag: CdkDrag<IDragConfig>, drop: CdkDropList<IDropConfig>) => drop.data.isEnter && !isInChild(drop.data);
  @Input() data: IDropConfig;
  @ViewChild(CdkDropList) cdkDropList: CdkDropList;

  constructor(
    private dragdropService: HorizontalDragdropService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.dragdropService.cdkDropListArray.push(this.cdkDropList);
  }

  ngOnDestroy(): void {
    this.dragdropService.cdkDropListArray.splice(this.dragdropService.cdkDropListArray.indexOf(this.cdkDropList), 1);
  }

  drop(event: CdkDragDrop<IDropConfig>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.dragList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data.dragList,
        event.container.data.dragList,
        event.previousIndex,
        event.currentIndex);
    }
    this.cd.markForCheck();
    this.cd.detectChanges();
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
