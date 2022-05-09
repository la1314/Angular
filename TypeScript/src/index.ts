/*
    ===== Código de TypeScript =====
*/
import './notas/01_Everyday_Types'

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: DireccionObj;
    mostrarDireccion: ()=> string;
}

interface DireccionObj {
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeroe: SuperHeroe = {

    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },

    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccion = superHeroe.mostrarDireccion();

console.log(direccion);