import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorCapitalComponent
  ], exports: [
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorCapitalComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
