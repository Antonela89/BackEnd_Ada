# ⏳ La Evolución del Asincronismo en JavaScript

JavaScript es un lenguaje **single-threaded** (de un solo hilo), lo que significa que solo puede hacer una cosa a la vez. Para evitar que la interfaz se congele al realizar tareas pesadas (como pedir datos a un servidor o leer archivos), utiliza el **Event Loop** para manejar operaciones asíncronas.

A continuación, la historia de cómo ha evolucionado esta gestión.

---

## 1. La Era de los Callbacks (El inicio)
En los primeros días, la única forma de manejar la asincronía era pasando una función como argumento a otra función. Esta función argumento se llamaba "callback" y se ejecutaba cuando la tarea terminaba.

### ❌ El Problema: "Callback Hell"
Cuando necesitábamos hacer varias operaciones secuenciales (una después de otra), el código se anidaba infinitamente, volviéndose ilegible y difícil de mantener. A esto se le llamó la **Pirámide de la Muerte** o *Callback Hell*.

```javascript
// Simulación de operaciones con Callbacks
function pedirUsuario(id, callback) {
  setTimeout(() => {
    console.log(`Usuario ${id} obtenido`);
    callback(null, { id: id, nombre: "Ana" });
  }, 1000);
}

function pedirPermisos(usuario, callback) {
  setTimeout(() => {
    console.log(`Permisos para ${usuario.nombre} obtenidos`);
    callback(null, ["admin", "editor"]);
  }, 1000);
}

// ⚠️ CALLBACK HELL
pedirUsuario(1, (error, usuario) => {
  if (error) return console.error(error);
  
  pedirPermisos(usuario, (error, permisos) => {
    if (error) return console.error(error);
    
    console.log("Flujo terminado:", permisos);
    // Si hubiera una tercera operación, habría otro nivel de indentación...
  });
});
```

---

## 2. Promesas (ES6 / 2015)
Para solucionar el problema de los callbacks anidados, ES6 introdujo las **Promises** (Promesas). Una promesa es un objeto que representa la terminación (o falla) eventual de una operación asíncrona.

Tiene 3 estados:
1.  **Pending:** Pendiente.
2.  **Resolved/Fulfilled:** Completada con éxito.
3.  **Rejected:** Fallida.

### ✅ La Mejora: Encadenamiento
Las promesas permiten encadenar operaciones usando `.then()` y manejar errores en un único lugar con `.catch()`, aplanando la pirámide.

```javascript
// Las funciones ahora retornan una Promesa
const pedirUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id: id, nombre: "Ana" });
      else reject("ID inválido");
    }, 1000);
  });
};

const pedirPermisos = (usuario) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["admin", "editor"]), 1000);
  });
};

// Consumo con Promesas (Código plano)
pedirUsuario(1)
  .then(usuario => {
    console.log(`Usuario ${usuario.nombre} obtenido`);
    return pedirPermisos(usuario); // Retornamos la siguiente promesa
  })
  .then(permisos => {
    console.log("Flujo terminado:", permisos);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
```

---

## 3. Async / Await (ES8 / 2017)
Esta es la forma moderna y preferida de manejar asincronía hoy en día. `async/await` no es una tecnología nueva, sino **azúcar sintáctico** (syntactic sugar) sobre las Promesas.

### 🚀 La Revolución: Código síncrono visualmente
Permite escribir código asíncrono que se lee y se comporta como si fuera síncrono (lineal).
*   **`async`**: Define que una función manejará asincronía.
*   **`await`**: Pausa la ejecución de la función hasta que la Promesa se resuelva.

```javascript
// Reutilizamos las mismas funciones que retornan Promesas del ejemplo anterior

async function ejecutarFlujo() {
  try {
    console.log("Iniciando...");
    
    // La ejecución se "pausa" aquí hasta que se resuelva pedirUsuario
    const usuario = await pedirUsuario(1);
    console.log(`Usuario ${usuario.nombre} obtenido`);

    // Se "pausa" de nuevo hasta obtener permisos
    const permisos = await pedirPermisos(usuario);
    
    console.log("Flujo terminado:", permisos);
    
  } catch (error) {
    // Usamos try/catch estándar para errores
    console.error("Error capturado:", error);
  }
}

ejecutarFlujo();
```

---

## 4. Resumen Comparativo

| Característica | Callbacks | Promesas (ES6) | Async/Await (ES8) |
| :--- | :--- | :--- | :--- |
| **Legibilidad** | Baja (Anidamiento profundo) | Media (Encadenamiento) | Alta (Parece síncrono) |
| **Manejo de Errores** | Manual en cada callback | `.catch()` al final | `try / catch` |
| **Flujo** | Difícil de seguir | Lineal con `.then` | Secuencial natural |
| **Depuración** | Compleja | Mejor stack trace | Muy sencilla |

### Bonus: Paralelismo
Con Async/Await y Promesas también podemos ejecutar tareas en paralelo si no dependen una de la otra usando `Promise.all`:

```javascript
async function cargarTodo() {
  // Ambas inician al mismo tiempo
  const promesaUsuarios = pedirUsuario(1);
  const promesaConfig = pedirConfiguracion(); 

  // Esperamos a que ambas terminen
  const [usuario, config] = await Promise.all([promesaUsuarios, promesaConfig]);
  
  console.log(usuario, config);
}
```