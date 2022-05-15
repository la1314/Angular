import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localES from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
   
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
