import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Jorge';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Federico', 'Gaelle'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.genero = 'femenino';
    this.nombre = 'Gaelle';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Gaelle',
    edad: '30',
    direccion: 'Barcelona, España'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'acuaman',
      vuela: false
    }
  ];

  // AsyncPipe

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {resolve('Tenemos data de promesa')}, 3500 );

  });

}
