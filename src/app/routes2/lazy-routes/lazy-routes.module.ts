import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LazyCompComponent}
];

@NgModule({
  declarations: [LazyCompComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutesModule {
}
