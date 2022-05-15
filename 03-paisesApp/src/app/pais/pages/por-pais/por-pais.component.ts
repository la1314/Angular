import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  tipo: string = 'País';

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe(
        {
          next: (response) => { 
            console.log(response);
            
            this.paises = response },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
            console.log(err);
          },
          complete: () => console.info('complete')
        });
  }

  sugerencias(termino: string) {

  }

}
