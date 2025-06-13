# Introducción a los Estados: El Hook `useState`

El **estado** (`state`) es la memoria de un componente. Es un objeto que
contiene datos que pueden cambiar con el tiempo como resultado de la
interacción del usuario o eventos de la red. Cuando el estado cambia, React se
encarga de volver a renderizar el componente para que la UI refleje esos cambios.

En los componentes funcionales, el hook **`useState`** es la herramienta
principal para añadir y gestionar el estado.

## ¿Cómo funciona `useState`?

Al llamar a `useState`, le pasamos un **valor inicial** como argumento. Este
nos devuelve un array con exactamente dos elementos:

1. **La variable de estado:** Contiene el valor actual del estado.
2. **La función "seteadora" (`setter`):** Es la única función que debemos usar
   para actualizar el valor de la variable de estado. Por convención, se nombra
   con el prefijo `set` seguido del nombre de la variable (ej: `nombre`,
   `setNombre`).

Llamar a la función seteadora no solo cambia el valor, sino que también le
informa a React que debe programar un nuevo renderizado del componente.

**Ejemplo: Un interruptor de luz (On/Off)**

```javascript
// Desestructuramos useState del objeto global React
const { useState } = React;

function InterruptorLuz() {
  // Declaramos la variable de estado 'estaEncendido', inicializada en 'false'
  const [estaEncendido, setEstaEncendido] = useState(false);

  // El estilo cambiará dependiendo del estado
  const estiloCaja = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    backgroundColor: estaEncendido ? "yellow" : "grey", // Estilo condicional
    color: estaEncendido ? "black" : "white",
  };

  // Función para cambiar el estado al contrario del valor actual
  const cambiarEstado = () => {
    setEstaEncendido(!estaEncendido);
  };

  return (
    <div>
      <div style={estiloCaja}>{estaEncendido ? "ON" : "OFF"}</div>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
}
```

Este ejemplo demuestra el ciclo completo:

1. **Inicialización:** `useState(false)` establece el estado inicial.
2. **Lectura:** El valor de `estaEncendido` se usa para determinar el texto
   (`ON`/`OFF`) y el color de fondo.
3. **Actualización:** El `onClick` del botón llama a `cambiarEstado`.
4. **Re-renderizado:** `setEstaEncendido` actualiza el estado, y React vuelve a
   renderizar el componente `InterruptorLuz` con el nuevo valor, mostrando la UI
   actualizada.
