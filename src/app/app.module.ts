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
import { RoutesModule } from './routes/routes.module';
import { RouteReuseStrategy } from '@angular/router';
import { SimpleRouteReuseStrategy } from './simple-route-reuse-strategy';
import { SecondRouterCompComponent } from './routes2/second-router-comp/second-router-comp.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SecondRouterCompComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
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
