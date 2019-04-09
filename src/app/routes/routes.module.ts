import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../shared/page-not-found/page-not-found.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: 'page1', loadChildren: './page1/page1.module#Page1Module'},
  {path: 'page2', loadChildren: './page2/page2.module#Page2Module'},
  {path: '', redirectTo: 'page1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'disabled'}),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {
}
