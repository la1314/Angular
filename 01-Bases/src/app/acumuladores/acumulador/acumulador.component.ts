import { Component } from '@angular/core'

@Component({
    selector: 'app-acumulador',
    template: `
    <h1>{{title}}</h1>
    <h2>La base es: <strong>{{base}}</strong></h2>

    <button (click)="acumular(-base)" >-{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(base)">{{base}}</button>
    `
})

export class AcumuladorComponent {
    title: string = 'Acumulador App';
    numero: number = 0;
    base: number = 5;

    acumular(value: number) {

        this.numero += value;

    }
}