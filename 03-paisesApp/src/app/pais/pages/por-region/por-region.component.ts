import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-left: 5px;
    }

    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC', 'EU'];
  paises: any[] = [];

  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe(
      {
        next: (response) => { 
          console.log(response);
          this.paises = response },
        complete: () => console.info('complete')
      });
  }


  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
