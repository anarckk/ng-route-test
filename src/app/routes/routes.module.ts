import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ResolveDataComponent } from './resolve-data/resolve-data.component';
import { ResolveDataService } from '../resolve-data.service';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DataListComponent } from './data-list/data-list.component';
import { DataDetailComponent } from './data-detail/data-detail.component';

const routes: Routes = [
  {path: 'merge-map', component: MergeMapComponent},
  {
    path: 'resolve-data',
    component: ResolveDataComponent,
    resolve: {
      data: ResolveDataService
    }
  },
  {
    path: 'data-list',
    component: DataListComponent,
    data: {
      reuse: true
    }
  },
  {
    path: 'data-detail/:index',
    component: DataDetailComponent,
    data: {
      reuse: true
    }
  },
  {path: '', redirectTo: 'merge-map', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RoutesComponent,
    MergeMapComponent,
    ResolveDataComponent,
    DataListComponent,
    DataDetailComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ResolveDataService
  ]
})
export class RoutesModule {
}
