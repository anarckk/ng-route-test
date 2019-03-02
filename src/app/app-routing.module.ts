import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondRouterCompComponent } from './routes2/second-router-comp/second-router-comp.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ResolveDataComponent } from './resolve-data/resolve-data.component';
import { ResolveDataService } from './resolve-data.service';
import { DataList2Component } from './routes2/data-list/data-list.component';
import { DataDetail2Component } from './routes2/data-detail/data-detail.component';
import { DataDetailResolverService } from './data-detail/data-detail-resolver.service';

const routes: Routes = [
  {path: 'merge-map', component: MergeMapComponent},
  {
    path: 'resolve-data',
    component: ResolveDataComponent,
    resolve: {
      data: ResolveDataService
    },
    data: {
      reuse: true
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
    resolve: {
      detail: DataDetailResolverService
    },
    data: {
      reuse: true
    }
  },
  {path: 'comp', component: SecondRouterCompComponent, outlet: 'second'},
  {path: 'lazy-comp', loadChildren: './routes2/lazy-routes/lazy-routes.module#LazyRoutesModule', outlet: 'second'},
  {
    path: 'data-list2',
    component: DataList2Component,
    data: {
      reuse: true
    }, outlet: 'second'
  },
  {
    path: 'data-detail2/:index',
    component: DataDetail2Component,
    data: {
      reuse: true
    }, outlet: 'second'
  },
  {path: 'index', loadChildren: './third-routes/third-routes.module#ThirdRoutesModule', outlet: 'third'},
  {path: '', redirectTo: 'merge-map', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
