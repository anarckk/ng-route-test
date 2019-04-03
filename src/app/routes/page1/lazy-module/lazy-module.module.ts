import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {LazyModuleCompComponent} from './lazy-module-comp/lazy-module-comp.component';

@NgModule({
  declarations: [
    LazyModuleCompComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: LazyModuleCompComponent}
    ])
  ]
})
export class LazyModuleModule {
}
