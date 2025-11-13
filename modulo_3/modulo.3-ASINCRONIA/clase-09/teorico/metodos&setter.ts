class User {
    private _nombre: string = '';

    // setter ->  va a asignar un nombre, con validación o transformación, no devuelven nada
    set nombre(valor: string) {
        this._nombre = valor.toLowerCase();
    }

    // getter -> nos va a mostrar la propiedad privada 
    get nombre() {
        return this._nombre;
    }

    // metodo: -> función -> va a realizar una accion
    saludar() {
        console.log(`Hola, soy ${this._nombre}`);
    }
}

const usuario1 = new User();
// setter
usuario1.nombre = "SOFIA"
// metodo
usuario1.saludar();
// getter
console.log(usuario1.nombre);