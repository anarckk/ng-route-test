import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page1Component} from './page1.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ResolveDataComponent} from "./resolve-data/resolve-data.component";
import {ResolveDataService} from "../../service/resolve-data.service";
import {DataListComponent} from "./data-list/data-list.component";
import {DataDetailComponent} from "./data-detail/data-detail.component";
import {DataDetailResolverService} from "./data-detail/data-detail-resolver.service";
import {SecondRouterCompComponent} from "./routes2/second-router-comp/second-router-comp.component";
import {DataList2Component} from "./routes2/data-list/data-list.component";
import {DataDetail2Component} from "./routes2/data-detail/data-detail.component";
import {PageNotFoundComponent} from "../../shared/page-not-found/page-not-found.component";
import {WithLatestFromComponent} from "../../shared/with-latest-from/with-latest-from.component";
import {MergeMapComponent} from "../../shared/merge-map/merge-map.component";

const page1Routes: Routes = [
  {
    path: 'page',
    component: Page1Component,
    children: [
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
      {
        path: 'withLatestFrom',
        component: WithLatestFromComponent
      },
      {
        path: 'lazy-module',
        loadChildren: './lazy-module/lazy-module.module#LazyModuleModule'
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
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: '', redirectTo: 'merge-map', pathMatch: 'full'},
    ]
  },
  {path: '', redirectTo: 'page', pathMatch: 'full'}
];

const page1_export_components = [
  Page1Component,
  SecondRouterCompComponent,
  ResolveDataComponent,
  DataListComponent,
  DataDetailComponent,
  DataList2Component,
  DataDetail2Component,
];

@NgModule({
  declarations: [
    ...page1_export_components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(page1Routes),
    SharedModule,
    RouterModule,
  ]
})
export class Page1Module {
}
