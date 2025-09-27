// Importamos las tres funciones que hemos exportado desde nuestro módulo de autenticación.
import { registrarUsuario, validarCredenciales, listarUsuarios } from './auth.mjs';

function main() {
  console.log('--- INICIO DE PRUEBAS DEL SISTEMA DE AUTENTICACIÓN (SÍNCRONO) ---');

  // Antes de empezar, limpiamos el archivo de pruebas anteriores para un resultado limpio.
  // Esto es opcional, pero ayuda a que cada prueba sea predecible.
  // fs.writeFileSync(path.join(__dirname, 'usuarios.json'), JSON.stringify([]));

  // Mostramos el estado inicial
  console.log('\nEstado inicial del registro:');
  listarUsuarios(); // Debería decir que está vacío la primera vez.

  // --- ESCENARIO 1: REGISTRO ---
  console.log('\n[1] Registrando un nuevo usuario...');
  const resultado1 = registrarUsuario('usuario.nuevo@correo.com', 'claveSecreta123');
  // La función devuelve un objeto con {id, email} en caso de éxito
  if (resultado1.id) {
    console.log('ÉXITO: Usuario registrado correctamente.');
  }

  console.log('\n[2] Intentando registrar un usuario duplicado...');
  const resultado2 = registrarUsuario('usuario.nuevo@correo.com', 'otraClave');
  // La función devuelve un objeto con {error: 'mensaje'} en caso de fallo
  if (resultado2.error) {
    console.log('ÉXITO: El sistema impidió el registro duplicado como se esperaba.');
  }

  // Volvemos a listar para ver el resultado
  console.log('\nEstado del registro después de las operaciones:');
  listarUsuarios();


  // --- ESCENARIO 2: INICIO DE SESIÓN ---
  console.log('\n[3] Probando inicio de sesión con credenciales CORRECTAS...');
  const loginExitoso = validarCredenciales('usuario.nuevo@correo.com', 'claveSecreta123');
  // La función devuelve el objeto del usuario si el login es correcto
  if (loginExitoso) {
    console.log('ÉXITO: Login correcto.', loginExitoso);
  } else {
    console.error('FALLÓ: El login debería haber sido exitoso.');
  }


  console.log('\n[4] Probando inicio de sesión con contraseña INCORRECTA...');
  const loginFallido1 = validarCredenciales('usuario.nuevo@correo.com', 'claveIncorrecta');
  // La función devuelve `null` si el login falla
  if (!loginFallido1) {
    console.log('ÉXITO: El sistema rechazó la contraseña incorrecta como se esperaba.');
  } else {
    console.error('FALLÓ: El sistema aceptó una contraseña incorrecta.');
  }


  console.log('\n[5] Probando inicio de sesión con un usuario que NO EXISTE...');
  const loginFallido2 = validarCredenciales('nadie@correo.com', 'cualquierClave');
  if (!loginFallido2) {
    console.log('ÉXITO: El sistema manejó correctamente al usuario inexistente.');
  } else {
    console.error('FALLÓ: El sistema no debería haber encontrado a este usuario.');
  }


  console.log('\n--- FIN DE LAS PRUEBAS ---');
}

// Ejecutamos la función principal
main();