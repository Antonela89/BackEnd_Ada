// 1. Seleccionar la base de datos
use('restaurante');

// 2. Insertar 5 platos
db.platos.insertMany([
  { nombre: 'Pasta Carbonara', precio: 12.50, categoria: 'Pasta' },
  { nombre: 'Hamburguesa Especial', precio: 10.00, categoria: 'Rápida' },
  { nombre: 'Ensalada César', precio: 8.50, categoria: 'Ensaladas' },
  { nombre: 'Sushi Variado', precio: 18.00, categoria: 'Japonesa' },
  { nombre: 'Tarta de Queso', precio: 5.50, categoria: 'Postres' }
]);

// 3. Insertar 3 clientes
db.clientes.insertMany([
  { nombre: 'Ana García', email: 'ana@mail.com', telefono: '123456789' },
  { nombre: 'Juan Pérez', email: 'juan@mail.com', telefono: '987654321' },
  { nombre: 'Laura Soler', email: 'laura@mail.com', telefono: '555666777' }
]);

// 4. Insertar 2 pedidos
db.pedidos.insertMany([
  { 
    cliente: 'Ana García', 
    fecha: new Date(), 
    total: 22.50, 
    items: ['Pasta Carbonara', 'Hamburguesa Especial'] 
  },
  { 
    cliente: 'Juan Pérez', 
    fecha: new Date(), 
    total: 8.50, 
    items: ['Ensalada César'] 
  }
]);

// 5. Mostrar que se creó todo correctamente
db.platos.find();