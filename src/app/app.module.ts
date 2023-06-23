import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { id_ID } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzResultModule } from 'ng-zorro-antd/result';
import { IconsProviderModule } from './icons-provider.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';

registerLocaleData(id);

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    IconsProviderModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzResultModule,

    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: id_ID }],
  bootstrap: [AppComponent],
})
export class AppModule {}
