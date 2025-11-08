import { PhysicalProduct } from "./3.physicalProduct";
import { DigitalProduct } from "./3.digitalProduct";
import { ShoppingCart } from "./4.shoppingCart";

// Crear productos
const laptop = new PhysicalProduct(1, "Laptop Gamer", 1500, 2.5);
const ebook = new DigitalProduct(2, "Manual de TypeScript", 25, "http://example.com/ebook.pdf");
const monitor = new PhysicalProduct(3, "Monitor 4K", 400, 6);

// Crear y gestionar el carrito
const cart = new ShoppingCart();
cart.addProduct(laptop);
cart.addProduct(ebook);
cart.addProduct(monitor);

cart.displayItems();

const totalCost = cart.calculateTotal();
console.log(`\nCosto total del carrito (incluyendo envío): $${totalCost.toFixed(2)}`);