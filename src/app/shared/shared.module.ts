import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedCompComponent} from './shared-comp/shared-comp.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const export_module = [
  FormsModule,
  DragDropModule,
];
const export_components = [
  SharedCompComponent,
  PageNotFoundComponent,
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
