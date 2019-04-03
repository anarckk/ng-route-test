import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThirdRoutesComponent} from './third-routes/third-routes.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: ThirdRoutesComponent}
];

@NgModule({
  declarations: [
    ThirdRoutesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ThirdRoutesModule {
}
