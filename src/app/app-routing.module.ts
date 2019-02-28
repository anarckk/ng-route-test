import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondRouterCompComponent } from './routes2/second-router-comp/second-router-comp.component';

const routes: Routes = [
  {path: 'comp', component: SecondRouterCompComponent, outlet: 'second'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
