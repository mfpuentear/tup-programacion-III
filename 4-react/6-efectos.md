# Efectos Secundarios y el Hook `useEffect`

Hasta ahora, nuestros componentes han sido "puros": reciben props y estado, y
devuelven una UI. Sin embargo, las aplicaciones del mundo real necesitan
interactuar con el "mundo exterior". Estas interacciones se conocen como
**efectos secundarios** (o "side effects").

Un efecto secundario es cualquier operación que afecte algo fuera del alcance
de la propia función del componente. Algunos ejemplos comunes son:

- Realizar una consulta a una API para obtener datos.
- Manipular directamente el DOM (por ejemplo, cambiar el título de la página).
- Establecer o limpiar temporizadores (`setInterval`, `setTimeout`).
- Suscribirse a servicios en tiempo real (como websockets).

El hook **`useEffect`** es la herramienta que React nos da para manejar estos
efectos secundarios de manera controlada y predecible desde nuestros componentes
funcionales.

## ¿Cómo funciona `useEffect`?

`useEffect` acepta dos argumentos: una **función** (el "efecto") y un **array de
dependencias** (opcional).

```javascript
useEffect(
  () => {
    // Esta es la función del efecto.
    // El código aquí se ejecutará DESPUÉS de que el componente se renderice.
  },
  [
    /* array de dependencias */
  ],
);
```

El **array de dependencias** es crucial, ya que controla **cuándo** se
ejecutará el efecto:

1. **Sin array de dependencias:** Si se omite, el efecto se ejecutará **después
   de cada renderizado** del componente. ¡Cuidado\! Esto puede llevar a bucles
   infinitos si el efecto actualiza el estado.

   ```javascript
   useEffect(() => {
     console.log("Componente renderizado");
   });
   ```

2. **Array de dependencias vacío `[]`:** El efecto se ejecutará **una sola vez**,
   justo después del primer renderizado. Ideal para consultas iniciales a APIs.

   ```javascript
   useEffect(() => {
     console.log("Componente montado por primera vez");
   }, []);
   ```

3. **Array con dependencias `[prop, estado]`:** El efecto se ejecutará la
   primera vez, y luego **solo si alguno de los valores** dentro del array ha
   cambiado desde el último renderizado.

   ```javascript
   useEffect(() => {
     console.log(`El valor de 'contador' cambió a: ${contador}`);
   }, [contador]);
   ```

## Ejemplo 1: Manipulando el Título del Documento

Un efecto secundario simple es cambiar el título de la pestaña del navegador
para que refleje el estado actual de la aplicación.

```javascript
const { useState, useEffect } = React;

function App() {
  const [contador, setContador] = useState(0);

  // Este efecto se ejecutará cada vez que 'contador' cambie.
  useEffect(() => {
    // Esto es un efecto secundario: interactúa con el DOM fuera de React.
    document.title = `Has hecho clic ${contador} veces`;
    console.log("Efecto ejecutado: El título ha cambiado.");
  }, [contador]); // El efecto depende de la variable 'contador'.

  return (
    <div>
      <p>Cuenta: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

Si abres este ejemplo, verás que el título de la pestaña del navegador se
actualiza con cada clic.

## Ejemplo 2: Consultas a una API con `fetch`

Este es el uso más común de `useEffect`. Vamos a crear un componente que
consulta una lista de usuarios de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

```javascript
const { useState, useEffect } = React;

function App() {
  // Estado para almacenar los usuarios
  const [usuarios, setUsuarios] = useState([]);
  // Estado para saber si la consulta está en curso
  const [cargando, setCargando] = useState(true);
  // Estado para manejar posibles errores
  const [error, setError] = useState(null);

  // Usamos useEffect para realizar la consulta a la API una sola vez.
  useEffect(() => {
    // Definimos una función asíncrona dentro del efecto.
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!respuesta.ok) {
          throw new Error("La respuesta de la red no fue satisfactoria.");
        }
        const data = await respuesta.json();
        setUsuarios(data); // Guardamos los datos en el estado
      } catch (error) {
        setError(error.message); // Guardamos el mensaje de error
      } finally {
        setCargando(false); // La carga ha terminado (con éxito o error)
      }
    };

    obtenerUsuarios(); // Llamamos a la función
  }, []); // El array vacío asegura que esto se ejecute solo una vez.

  // Renderizado condicional basado en los estados
  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} ({usuario.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## La Función de Limpieza (Cleanup)

Opcionalmente, la función dentro de `useEffect` puede **retornar otra
función**. Esta función de retorno se conoce como "función de limpieza".
React la ejecutará:

- Cuando el componente se "desmonte" (se elimine de la UI).
- Antes de volver a ejecutar el efecto (si una de sus dependencias cambió).

Esto es útil para limpiar suscripciones, temporizadores o cualquier recurso
que pueda causar fugas de memoria.

**Ejemplo conceptual:**

```javascript
useEffect(() => {
  const timerId = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Esta función de limpieza se ejecuta cuando el componente se desmonte
  return () => {
    console.log("Limpiando el temporizador.");
    clearInterval(timerId); // Evita que el temporizador siga funcionando
  };
}, []);
```
