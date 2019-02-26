import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResolveDataComponent } from './resolve-data/resolve-data.component';
import { ResolveDataService } from './resolve-data.service';

const routes: Routes = [
  {path: 'merge-map', component: MergeMapComponent},
  {
    path: 'resolve-data',
    component: ResolveDataComponent,
    resolve: {
      data: ResolveDataService
    }
  },
  {path: '', redirectTo: 'merge-map', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
