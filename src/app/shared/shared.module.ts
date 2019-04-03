import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DragdropComponent} from './dragdrop/dragdrop.component';
import {WithLatestFromComponent} from './with-latest-from/with-latest-from.component';
import {MergeMapComponent} from "./merge-map/merge-map.component";

const export_module = [
  FormsModule,
  DragDropModule,
];
const export_components = [
  PageNotFoundComponent,
  DragdropComponent,
  WithLatestFromComponent,
  MergeMapComponent,
];

@NgModule({
  declarations: [
    ...export_components,
  ],
  imports: [
    CommonModule,
    ...export_module,
  ],
  exports: [
    ...export_module,
    ...export_components,
  ]
})
export class SharedModule {
}
