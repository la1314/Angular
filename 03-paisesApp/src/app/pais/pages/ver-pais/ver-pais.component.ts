import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activaredRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activaredRoute.params
      .pipe(
        switchMap(({ idPais }) => this.paisService.getPaisporCodigo(idPais)),
        tap(console.log)
      ).subscribe(
        resp => {
          this.pais = resp[0];
        }
      )

    // this.activaredRoute.params.subscribe(
    //   ({ idPais }) => {

    //     this.paisService.getPaisporCodigo(idPais).subscribe(
    //       pais => {
    //         console.log(pais);

    //       }
    //     );
    //   }
    // );

  }

}
