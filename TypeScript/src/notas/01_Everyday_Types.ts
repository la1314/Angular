
let var_numero: number = 99;
let var_string: string = 'TypeScript';
let var_booleano: boolean = true;
let var_Numero_String: number | string = 0;


// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("Gaelle");