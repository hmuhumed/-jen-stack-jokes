## Node Express jQuery Código Desafío

### Objetivo
- Enviar solicitudes al servidor desde el cliente mediante una petición AJAX(s),
- Mostrar respuesta en el DOM,
- Demostrar la separación de la lógica entre el cliente y el servidor.

### El libro de chistes

Su cliente le ha pedido que cree una aplicación se llama 'Joke Book'. El servidor contendrá todos los datos de chistes actuales y se le ha proveído el archivo inicial del servidor (`server / server.js`).

Su trabajo será construir el servidor alrededor de los datos en el `server / server.js` archivo, mostrar los chistes actuales al DOM, y añadir la capacidad para que los usuarios añadir sus propios chistes y mostrar estos también.

##### Cómo se estructuran los datos de chiste
Puede ver el objeto completo en ```server / server.js```. La estructura de datos es una matriz de objetos. Estos objetos tienen tres propiedades: whichJoke, jokeQuestion y punchLine.

```JavaScript
let jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  }
];
```

Para empezar, 'Fork' este repo y 'Clone' a su máquina.

Descripción
--------
* Cuando se carga la aplicación, todos los chistes deben mostrarse en el DOM debajo de las entradas
* El usuario debe ser capaz de añadir chistes utilizando el formulario de entrada
* Después de agregar un chiste, los chistes que se muestran en el DOM deben reflejar los nuevos datos

Recuerde trabajar en pequeños incrementos y realizar pruebas con frecuencia. Si desea llevar las cosas más allá, primero presione el modo básico de trabajo a su github y actualícelo después.
