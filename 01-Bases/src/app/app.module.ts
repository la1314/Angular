import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';
import { AcumuladoresModules } from './acumuladores/acumuladores.modules';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    AcumuladoresModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
