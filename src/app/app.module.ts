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
import { MergeMapComponent } from './merge-map/merge-map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResolveDataComponent } from './resolve-data/resolve-data.component';
import { ResolveDataService } from './resolve-data.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MergeMapComponent,
    PageNotFoundComponent,
    ResolveDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    ResolveDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
