# Métodos de Arrays en JavaScript

| Método        | Descripción breve | Sintaxis | Parámetros principales | Ejemplo |
|---------------|-------------------|----------|-------------------------|---------|
| `forEach()`   | Ejecuta una función por cada elemento. | `array.forEach(callback)` | `callback(currentValue, index?, array?)` | `[1,2].forEach(n => console.log(n))` |
| `map()`       | Crea un nuevo array con los resultados de la función aplicada. | `array.map(callback)` | `callback(currentValue, index?, array?)` | `[1,2].map(n => n * 2)` |
| `filter()`    | Crea un nuevo array con los elementos que pasen una condición. | `array.filter(callback)` | `callback(currentValue)` | `[1,2,3].filter(n => n > 1)` |
| `find()`      | Devuelve el primer elemento que cumpla una condición. | `array.find(callback)` | `callback(currentValue)` | `[1,2,3].find(n => n === 2)` |
| `findIndex()` | Devuelve el índice del primer elemento que cumpla una condición. | `array.findIndex(callback)` | `callback(currentValue)` | `[1,2].findIndex(n => n === 2)` |
| `reduce()`    | Reduce el array a un único valor. | `array.reduce(callback, init)` | `callback(acum, curr)` | `[1,2,3].reduce((a,b)=>a+b,0)` |
| `some()`      | Devuelve true si al menos un elemento cumple la condición. | `array.some(callback)` | `callback(currentValue)` | `[1,3].some(n => n % 2 === 0)` |
| `every()`     | Devuelve true si todos los elementos cumplen la condición. | `array.every(callback)` | `callback(currentValue)` | `[2,4].every(n => n % 2 === 0)` |
| `push()`      | Agrega uno o más elementos al final. | `array.push(item)` | `item1, item2, ...` | `[1].push(2)` |
| `pop()`       | Elimina el último elemento. | `array.pop()` | - | `[1,2].pop()` |
| `shift()`     | Elimina el primer elemento. | `array.shift()` | - | `[1,2].shift()` |
| `unshift()`   | Agrega elementos al principio. | `array.unshift(item)` | `item1, item2, ...` | `[2].unshift(1)` |
| `splice()`    | Modifica el array agregando, quitando o reemplazando elementos. | `array.splice(start, deleteCount, ...items)` | `start, deleteCount, item1, ...` | `[1,2,3].splice(1,1,'a')` |
| `slice()`     | Extrae una sección del array. | `array.slice(start, end?)` | `start, end?` | `[1,2,3].slice(0,2)` |
| `sort()`      | Ordena los elementos del array. | `array.sort(compareFn?)` | `compareFn(a,b)` | `[3,1,2].sort((a,b)=>a-b)` |
| `reverse()`   | Invierte el orden del array. | `array.reverse()` | - | `[1,2].reverse()` |
| `includes()`  | Verifica si un elemento está en el array. | `array.includes(value)` | `value, fromIndex?` | `[1,2,3].includes(2)` |
| `indexOf()`   | Devuelve el primer índice del elemento. | `array.indexOf(value)` | `value, fromIndex?` | `['a','b'].indexOf('b')` |
| `lastIndexOf()`| Devuelve el último índice del elemento. | `array.lastIndexOf(value)` | `value, fromIndex?` | `[1,2,2].lastIndexOf(2)` |
| `concat()`    | Combina arrays. | `array.concat(otherArray)` | `...arrays` | `[1].concat([2])` |
| `join()`      | Une todos los elementos en una cadena. | `array.join(separator)` | `separator` | `['a','b'].join('-')` |
| `flat()`      | Aplana arrays anidados. | `array.flat(depth)` | `depth` | `[1,[2,[3]]].flat(2)` |
| `flatMap()`   | Aplica map y aplana un nivel. | `array.flatMap(callback)` | `callback(currentValue)` | `[1,2].flatMap(n => [n, n*2])` |

---

**Nota:** Los parámetros marcados con `?` son opcionales.
