import { Component, OnInit, Output } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError = false;
  paises: Pais[] = [];
  termino: string = '';
  tipo: string = 'Capital';

  constructor(private paisService:PaisService) { }

  sugerencias(termino:string) {
    console.log(termino);
    
  }

  buscar(termino:string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
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

}
