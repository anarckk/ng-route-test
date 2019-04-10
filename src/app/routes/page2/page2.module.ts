import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page2Component} from "./page2.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: 'page', component: Page2Component},
  {path: '', redirectTo: 'page', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Page2Module {
}
