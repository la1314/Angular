export enum Color {
    rojo, azul, amarillo, negro, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}