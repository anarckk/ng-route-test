import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteReuseStrategy } from '@angular/router';
import { SimpleRouteReuseStrategy } from './simple-route-reuse-strategy';
import { SecondRouterCompComponent } from './routes2/second-router-comp/second-router-comp.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ResolveDataComponent } from './resolve-data/resolve-data.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { DataList2Component } from './routes2/data-list/data-list.component';
import { DataDetail2Component } from './routes2/data-detail/data-detail.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SecondRouterCompComponent,
    MergeMapComponent,
    ResolveDataComponent,
    DataListComponent,
    DataDetailComponent,
    DataList2Component,
    DataDetail2Component,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: RouteReuseStrategy, useClass: SimpleRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
