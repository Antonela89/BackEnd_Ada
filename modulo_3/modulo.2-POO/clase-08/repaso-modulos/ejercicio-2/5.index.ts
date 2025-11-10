// =============================================================================
// ARCHIVO PRINCIPAL DE EJECUCIÓN
// Aquí se instancia y se utiliza todo el sistema.
// =============================================================================
import { PhysicalProduct } from "./3.physicalProduct";
import { DigitalProduct } from "./3.digitalProduct";
import { ShoppingCart } from "./4.shoppingCart";

// --- 1. CREACIÓN DE PRODUCTOS ---
// Se crean instancias de las clases concretas
const laptop = new PhysicalProduct(1, "Laptop Gamer", 1500, 2.5);
const ebook = new DigitalProduct(2, "Manual de TypeScript", 25, "http://example.com/ebook.pdf");
const monitor = new PhysicalProduct(3, "Monitor 4K", 400, 6);

// --- 2. GESTIÓN DEL CARRITO ---
// Se crea una instancia del carrito.
const cart = new ShoppingCart();

// Se añaden los productos al carrito.
cart.addProduct(laptop);
cart.addProduct(ebook);
cart.addProduct(monitor);

// Se muestran los productos añadidos.
cart.displayItems();

// --- 3. CÁLCULO Y RESULTADO FINAL ---
// Se calcula el costo total. El método 'calculateTotal' se encargará internamente
// de sumar los costos de envío solo para los productos físicos.
const totalCost = cart.calculateTotal();

// Se muestra el resultado formateado a dos decimales.
console.log(`\nCosto total del carrito (incluyendo envío): $${totalCost.toFixed(2)}`);