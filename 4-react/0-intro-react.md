# Introducción a React

## ¿Qué es React?

**React** es una biblioteca de JavaScript de código abierto para construir
interfaces de usuario (UI). Su principal objetivo es facilitar la creación de
aplicaciones de una sola página (SPA - Single Page Applications) interactivas y
reutilizables. Fue creada y es mantenida por Facebook.

La idea central de React es permitir a los desarrolladores **construir
interfaces complejas a partir de pequeñas piezas aisladas y reutilizables de
código llamadas componentes**.

### Características Principales

- **Declarativo:** Describes cómo quieres que se vea tu UI en un estado
  determinado, y React se encarga de actualizar y renderizar eficientemente los
  componentes correctos cuando los datos cambian.
- **Basado en Componentes:** Construyes UIs encapsuladas que manejan su propio
  estado, y luego las compones para hacer UIs complejas.
- **Aprende una vez, escribe en cualquier lugar:** React puede ser usado para
  desarrollar aplicaciones web, móviles (con React Native) y de escritorio.

## ¿Qué es JSX?

Antes de sumergirnos en los componentes, es crucial entender **JSX**. JSX
significa **JavaScript XML**, y es una extensión de la sintaxis de JavaScript
que nos permite escribir "código HTML" directamente dentro de un archivo de
JavaScript.

Aunque puede parecer que estamos mezclando tecnologías, JSX es una herramienta
potente que facilita la creación de elementos de React.

**Ejemplo - Sin JSX:**

Sin JSX, para crear un simple encabezado `<h1>`, tendríamos que escribir:

```javascript
React.createElement("h1", { className: "titulo" }, "Hola, Mundo!");
```

**Ejemplo - Con JSX:**

Con JSX, la misma creación de elemento se ve mucho más limpia e intuitiva, casi
idéntica al HTML:

```jsx
const elemento = <h1 className="titulo">Hola, Mundo!</h1>;
```

### Puntos Clave sobre JSX

- **No es HTML:** Aunque se parece mucho, JSX es "azúcar sintáctico" que se
  transforma (transpila) a llamadas de `React.createElement()`. Por ejemplo, el
  atributo `class` de HTML se escribe como `className` en JSX para no entrar en
  conflicto con la palabra reservada `class` de JavaScript.
- **Permite JavaScript:** Puedes incrustar cualquier expresión de JavaScript
  dentro de JSX utilizando llaves `{}`.

```jsx
const nombre = "Usuario";
const elemento = <h1>Hola, {nombre}!</h1>; // Esto se renderizará como "Hola, Usuario!"
```

Para poder usar JSX directamente en el navegador, necesitamos un "traductor" o
**transpilador** como **Babel**, que es lo que incluimos en nuestra configuración
inicial.

## Configuración usando un CDN

Para empezar a experimentar con React no es necesario un complejo entorno de
desarrollo. Podemos incluir las bibliotecas de React y ReactDOM directamente en
un archivo HTML a través de un CDN (Content Delivery Network).

Simplemente crea un archivo `index.html` y añade los siguientes scripts en la
etiqueta `<head>`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Primera App en React</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      // El código de React se escribirá aquí
    </script>
  </body>
</html>
```

**Puntos Clave:**

- `react.development.js`: Es la biblioteca principal de React.
- `react-dom.development.js`: Permite a React interactuar con el DOM del
  navegador.
- `@babel/standalone`: Es el transpilador que nos permite usar JSX. Por eso,
  nuestro script debe tener el atributo `type="text/babel"`.
- `<div id="root"></div>`: Este es el contenedor donde se "montará" nuestra
  aplicación de React.

## Componentes: Los Bloques de Construcción

Un componente es una pieza de la UI independiente y reutilizable.
Conceptualmente, son como funciones de JavaScript. Aceptan entradas arbitrarias
(llamadas **"props"**) y devuelven elementos de React (escritos en JSX) que
describen lo que debería aparecer en la pantalla.

Existen dos tipos principales de componentes: **Funcionales** y **de Clase**.
Nos centraremos únicamente en los componentes funcionales ya que son los más
utilizados actualmente.

### Componentes Funcionales

Son la forma más sencilla y moderna de definir un componente. Son simplemente
funciones de JavaScript que retornan JSX.

**Ejemplo:**

Vamos a crear un componente `Saludo` que muestra un mensaje. Añade este código
dentro de la etiqueta `<script type="text/babel">`:

```javascript
// Definición del Componente Funcional
function Saludo() {
  return <h1>¡Hola, Mundo desde un Componente Funcional!</h1>;
}

// Renderizar el componente en el div 'root'
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Saludo />);
```

Si abres tu archivo `index.html` en el navegador, verás el encabezado renderizado.
