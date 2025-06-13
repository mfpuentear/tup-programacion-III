# Propiedades (Props): Pasando Datos a los Componentes

Las **props** (abreviatura de "properties") son la forma en que los componentes
se comunican entre sí. Permiten pasar datos de un componente padre a un componente
hijo. Las props son **inmutables**, lo que significa que un componente hijo no
puede modificar las props que recibe.

**Ejemplo:**

Vamos a modificar nuestro componente `Saludo` para que pueda recibir un nombre y
personalizar el mensaje.

```javascript
// 1. Componente funcional que acepta props
function Saludo(props) {
  // Las props se reciben como un objeto en el primer argumento
  return <h1>¡Hola, {props.nombre}!</h1>;
}

// 2. Componente "padre" que renderiza el saludo
function App() {
  return (
    <div>
      <Saludo nombre="Ana" />
      <Saludo nombre="Juan" />
      <Saludo nombre="Maria" />
    </div>
  );
}

// 3. Renderizamos la aplicación principal
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

**¿Qué está pasando aquí?**

1. Definimos un componente funcional `Saludo` que espera un argumento `props`.
   Este argumento es un objeto que contiene todos los atributos que le pasamos.
   Accedemos al nombre con `{props.nombre}`.
2. Creamos un componente `App` que actúa como contenedor.
3. Dentro de `App`, "llamamos" a nuestro componente `Saludo` tres veces, y en
   cada llamada, le pasamos una `prop` llamada `nombre` con un valor diferente. Esto
   se parece mucho a pasar atributos a una etiqueta HTML.
4. React toma estos valores y los agrupa en el objeto `props` que llega al
   componente `Saludo`.

## La Propiedad Especial `children`

En React, los componentes pueden contener a otros componentes o elementos JSX,
de la misma forma que las etiquetas HTML se anidan unas dentro de otras. La prop
**`children`** es el mecanismo que nos permite acceder y renderizar ese contenido
anidado.

No es una prop que se declara explícitamente como `nombre` o `profesion`; más
bien, `props.children` contiene todo lo que un componente "envuelve", es decir,
todo lo que se coloca entre su etiqueta de apertura `<MiComponente>` y su
etiqueta de cierre `</MiComponente>`.

Esto es extremadamente útil para crear componentes de layout o "contenedores"
genéricos, como tarjetas, modales, o paneles, cuyo contenido interno puede
variar.

**Ejemplo: Creando un componente `ContenedorEstilizado`**

Este componente aplicará un borde y un título, pero el contenido principal será
totalmente flexible gracias a `props.children`.

```javascript
// 1. Definimos el componente contenedor.
// Recibe una prop 'titulo' y la prop implícita 'children'.
function ContenedorEstilizado(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <div>
        {/* Aquí es donde se renderizará todo el contenido anidado */}
        {props.children}
      </div>
    </div>
  );
}

// 2. Usamos nuestro componente contenedor de diferentes maneras.
function App() {
  return (
    <div>
      <ContenedorEstilizado titulo="Perfil de Usuario">
        <h4>Ana Gómez</h4>
        <p>Desarrolladora de React. Apasionada por el diseño de interfaces.</p>
        <a href="#">Ver más</a>
      </ContenedorEstilizado>

      <ContenedorEstilizado titulo="Notificaciones">
        <p>No tienes mensajes nuevos.</p>
      </ContenedorEstilizado>
    </div>
  );
}
```

Como puedes ver, `ContenedorEstilizado` no sabe ni le importa qué contenido
tendrá. Simplemente le provee una estructura y estilo, y `props.children` se
encarga de "inyectar" el contenido específico en cada caso.

## La Propiedad Especial `key` en Listas

Cuando se renderiza una colección de elementos (por ejemplo, a partir de un
array usando `.map()`), React necesita una forma de realizar un seguimiento de
la identidad de cada elemento a lo largo del tiempo. Esto es crucial para que el
algoritmo de "reconciliación" de React funcione de manera eficiente.

Al actualizar una lista, React compara la nueva lista con la anterior. Sin una
identidad estable, podría tener que destruir y volver a crear todos los elementos
del DOM, lo cual es ineficiente. La prop **`key`** le proporciona esta identidad.

**Reglas para las `key`:**

1. **Única entre hermanos:** Una `key` solo necesita ser única entre los
   elementos del mismo nivel en la lista, no globalmente en toda la aplicación.
2. **Estable:** La `key` de un elemento no debería cambiar entre renderizados.
   Por eso, usar un ID único de los datos (`item.id`) es la mejor opción.
3. **No uses el índice del array (`index`):** Usar el índice del array como
   `key` puede causar problemas si la lista se reordena, se filtra o se le
   insertan elementos en el medio. React asociaría la `key` (el índice) con el
   elemento incorrecto, lo que puede llevar a bugs difíciles de depurar,
   especialmente si los componentes de la lista tienen su propio estado.
   Únicamente emplea el índice como último recurso, por ejemplo en arreglo de
   números.

**Ejemplo: Renderizando una Lista de Productos**

```javascript
function ListaDeProductos() {
  const productos = [
    { id: "prod-001", nombre: "Laptop Pro", precio: 1200 },
    { id: "prod-002", nombre: "Mouse Inalámbrico", precio: 25 },
    { id: "prod-003", nombre: "Teclado Mecánico", precio: 80 },
  ];

  return (
    <div>
      <h3>Catálogo de Productos</h3>
      <ul>
        {productos.map((producto) => (
          // La key se coloca en el elemento raíz que se está repitiendo, en este caso <li>.
          // Es una prop para React, no se pasa al componente.
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
