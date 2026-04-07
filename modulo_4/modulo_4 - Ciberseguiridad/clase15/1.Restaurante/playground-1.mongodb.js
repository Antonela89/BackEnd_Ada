// Parte 1: Creación de la Base de Datos en MongoDB Atlas con extensión en VSC
// 1. Seleccionar la base de datos
use('restaurante');

// --- LIMPIEZA (borra lo anterior para no duplicar datos) ---
db.platos.drop();
db.clientes.drop();
db.pedidos.drop();

// --- PARTE 1: INSERCIÓN DE DATOS ---

// Insertar 5 platos
db.platos.insertMany([
  { nombre: 'Pasta Carbonara', precio: 4500, categoria: 'Pasta' },
  { nombre: 'Hamburguesa Especial', precio: 5500, categoria: 'Rápida' },
  { nombre: 'Ensalada César', precio: 3800, categoria: 'Ensaladas' },
  { nombre: 'Sushi Variado', precio: 12000, categoria: 'Japonesa' },
  { nombre: 'Tarta de Queso', precio: 3000, categoria: 'Postres' },
  { nombre: 'Tiramisú', precio: 3200, categoria: 'Postres' }
]);

// Insertar 3 clientes
db.clientes.insertMany([
  { nombre: 'Ana García', email: 'ana@mail.com', vip: true },
  { nombre: 'Juan Pérez', email: 'juan@mail.com', vip: false },
  { nombre: 'Laura Soler', email: 'laura@mail.com', vip: true }
]);

// Insertar pedidos
db.pedidos.insertMany([
  { cliente: 'Ana García', fecha: new Date(), total: 6500 },
  { cliente: 'Juan Pérez', fecha: new Date(), total: 3800 },
  { cliente: 'Laura Soler', fecha: new Date(), total: 15000 }
]);

// --- PARTE 2: CONSULTAS (Lo que te pide la consigna) ---

// a) Listar los clientes VIP
print('--- Clientes VIP ---');
const vips = db.clientes.find({ "vip": true }).toArray();
printjson(vips);

// b) Buscar los pedidos mayores a 5000
print('--- Pedidos mayores a 5000 ---');
const pedidosGrandes = db.pedidos.find({ "total": { "$gt": 5000 } }).toArray();
printjson(pedidosGrandes);

// c) Filtrar los platos por categoría "Postres"
print('--- Platos de la categoría Postres ---');
const postres = db.platos.find({ "categoria": "Postres" }).toArray();
printjson(postres);


