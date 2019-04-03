import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyCompComponent} from './lazy-comp/lazy-comp.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

const routes: Routes = [
  {path: '', component: LazyCompComponent}
];

@NgModule({
  declarations: [LazyCompComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutesModule {
}
