import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  tipo: string = 'País';
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe(
        {
          next: (response) => {
            console.log(response);

            this.paises = response
          },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
            console.log(err);
          },
          complete: () => console.info('complete')
        });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(
        {
          next: (response) => {
            console.log(response);

            this.paisesSugeridos = response.splice(0, 8)
          },
          error: (err) => {
            this.hayError = true;
            this.paisesSugeridos = [];
            console.log(err);
          },
          complete: () => console.info('complete')
        });
  }


}
