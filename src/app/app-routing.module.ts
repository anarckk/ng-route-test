import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'merge-map', component: MergeMapComponent},
  {path: '', redirectTo: 'merge-map', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
