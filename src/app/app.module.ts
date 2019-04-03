import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleRouteReuseStrategy} from './service/simple-route-reuse-strategy';
import {FormsModule} from '@angular/forms';
import {RoutesModule} from "./routes/routes.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutesModule,
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: SimpleRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
