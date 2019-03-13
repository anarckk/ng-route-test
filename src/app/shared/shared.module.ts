import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { SharedCompComponent } from './shared-comp/shared-comp.component';

const export_module = [
  NgZorroAntdModule,
  FormsModule,
];
const export_components = [
  SharedCompComponent,
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
