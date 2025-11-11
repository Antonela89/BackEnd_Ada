// ### 1. Ejercicio de Bodega
// Diseña una clase `Bodega` que tenga propiedades privadas para `nombre`, `direccion`, y `inventario` (un array de objetos con producto y cantidad). Implementa métodos para agregar productos al inventario, eliminar productos, y listar el inventario. Si se intenta agregar un producto con una cantidad negativa, imprime un mensaje informativo.

class Bodega {
    constructor(private _nombre: string, private _direccion: string, private _inventario: {producto: string, cantidad: number}[] = []) {
    }

    // getters 
    public get nombre(): string {
        return this._nombre;
    }

    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log(`La cantidad de ${producto} no puede ser negativa`);
        } else {
            this._inventario.push({producto, cantidad});
            console.log(`Producto: ${producto} agregado con éxito`);
        }
    }

    public eliminarProducto(producto: string): void {
        const index = this._inventario.findIndex(item => item.producto === producto);

        if (index === -1 ) {
            console.log(`El producto: ${producto} no se encuentra en el inventario`);
        } else {
            this._inventario.splice(index, 1);
            console.log(`El producto: ${producto} eliminado del inventario`);
        }
    }

    public listarInventario(): void {
        this._inventario.forEach(item => {
            console.log(`Producto: ${item.producto} - Cantidad: ${item.cantidad} \n--------------`);
        });
    }
}

const bodega = new Bodega('Bodega Central', 'San Martin 1500');
bodega.agregarProducto('Manzana', 50);
bodega.agregarProducto('leche', 60);

console.log('Inventario:');
bodega.listarInventario();

bodega.eliminarProducto('manzanas')
console.log('Inventario:');
bodega.listarInventario();