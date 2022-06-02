/**
 * @author Sebastián Morales
 * @universidad Universidad Tecnológica de Panamá
 * @grupo 2IF121
 * @asignatura Estructura de Datos
 * @profesor Gabriela Caballero de Hislop
 */

const Cola = require("./engine/Cola");
const max = 20;
const lacola = new Cola(max);

console.log("==== INICIO ====");
console.log(
  `Esta es la esctructura del arreglo de Cola, posee como máximo ${max} elementos.`
);
console.log(lacola);
console.log("================\n\n");
// Insertamos 5 elementos a la cola.
console.log("==== Insersión de elementos ====");
console.log("Insertaremos 5 elementos en ella, veamos cómo queda.");
lacola.insertarCola("Valor1");
lacola.insertarCola("Valor2");
lacola.insertarCola("Valor3");
lacola.insertarCola("Valor4");
lacola.insertarCola("Valor5");
console.log("\n");
console.log(lacola.arr);
console.log(
  "\nLos valores fueron introducidos en el arreglo exitosamente como podemos ver.\n"
);
console.log("================\n\n");
console.log("==== Valores de frente y final ====");
console.log(
  "¿Cuales son los valores de FRENTE y FINAL en este punto del código?\n"
);
console.log(`FRENTE = ${lacola.frente}\nFINAL = ${lacola.final}`);
console.log(
  `\nLo cual coincide muy bien con la representación gráfica del arreglo, porque el dato almacenado en FRENTE es ${
    lacola.arr[lacola.frente]
  } y el dato almacenado en FINAL es ${lacola.arr[lacola.final]}`
);
console.log("================\n\n");
console.log("==== Eliminación de valores ====");
console.log("\nAhora quitaremos de la cola un valor.\n");

lacola.quitarCola();
console.log(lacola.arr);

console.log(
  "\nLa teoría nos dice que al quitar un valor de la cola el nuevo frente pasa a ser el valor que le seguía al valor eliminado."
);
console.log(
  `Es decir, que el frente ahora va a ser ${
    lacola.arr[lacola.frente]
  } y el final sigue siendo ${lacola.arr[lacola.final]}.`
);
console.log(`FRENTE = ${lacola.frente}\nFINAL = ${lacola.final}`);

console.log(
  "A medida que se van eliminado valores, el frente se va acercando al final."
);
console.log("================\n\n");
console.log("==== Underflow ====");
console.log(
  "\nAhora vamos a provocar un underflow, es decir, eliminar elementos hasta que frente se iguale con final."
);

lacola.quitarCola();
lacola.quitarCola();
lacola.quitarCola();

console.log(lacola.arr);

console.log(
  "¡Espera! Al provocar un underflow el programa se detendrá y arrojará un error."
);
console.log(
  "Antes de eliminar el último elemento y ver el mensaje de aviso por underflow, vamos a aclarar unas cosas."
);
console.log("================\n\n");
console.log("\n===== CONCLUSIONES FINALES =====\n");
console.log(
  "Este programa fue planteado según la teoría proveída por la profesora Gabriela Caballero de Hislop en NodeJS.\n\nEl algoritmo del programa sigue tal cual el pie de la letra de la teoría, solo que con algunas correciones en el ordenamiento de valores. El código mostrado en este ejemplo muestra la manipulación de un arreglo en vivo desde su creación y subdesbordamiento utilizando todos los métodos planteados.\n\nLa teoría de las colas es sin duda un paradigma muy interesante de explorar en la manipulación de arreglos ya que de una forma bien planteada se pueden\nexplorar conceptos para entender más de cerca los arreglos.\n\nEl código fuente de este programa está disponible para todos.\n"
);
console.log("=================================");
console.log("Ahora sí vamos a provocar el subdesbordamiento...\n\n");
lacola.quitarCola();
lacola.quitarCola();
