/**
 * Created by kkcra on 2019/4/22
 */
import {Injectable} from '@angular/core';
import {CdkDropList} from "@angular/cdk/drag-drop";

@Injectable()
export class HorizontalDragdropService {
  cdkDropListArray: CdkDropList[] = [];

  constructor() {
  }
}
