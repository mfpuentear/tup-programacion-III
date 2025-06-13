# Manejo de Eventos en Componentes React

Las aplicaciones interactivas responden a las acciones del usuario, como clics,
escritura en formularios, o pasar el mouse sobre un elemento. En React, el
manejo de estos eventos es muy similar a como se hace en el DOM, pero con
algunas diferencias sintácticas clave.

**Diferencias Principales con HTML:**

1. **Nomenclatura:** Los eventos en React se nombran usando `camelCase` en lugar
   de `lowercase`. Por ejemplo, el evento `onclick` de HTML se convierte en
   `onClick` en JSX.
2. **Manejador de Evento (Event Handler):** En lugar de pasar una cadena de
   texto (como en `onclick="miFuncion()"`), pasas una **función** directamente
   entre llaves (`onClick={miFuncion}`).

## Eventos en Componentes Funcionales

En los componentes funcionales, puedes definir una función (el "manejador" o
"handler") directamente dentro del cuerpo del componente y luego asignarla al
evento del elemento JSX que desees.

**Ejemplo: Un botón de alerta**

```javascript
function BotonInteractivo() {
  // 1. Definimos la función que se ejecutará en el evento
  function mostrarAlerta() {
    alert("¡Hiciste clic en el botón!");
  }

  // 2. Asignamos la función al evento onClick del botón
  return <button onClick={mostrarAlerta}>Haz Clic Aquí</button>;
}
```

**Análisis del código:**

- `mostrarAlerta` es nuestra función manejadora del evento.
- `onClick={mostrarAlerta}` le dice a React: "Cuando este botón reciba un clic,
  ejecuta la función `mostrarAlerta`".
- Es importante pasar la referencia de la función (`mostrarAlerta`) y no su
  ejecución (`mostrarAlerta()`). Si pusiéramos los paréntesis, la función se
  ejecutaría cada vez que el componente se renderiza, en lugar de esperar al clic.

Manejar eventos es fundamental para crear aplicaciones dinámicas que respondan a
la interacción del usuario, sentando las bases para funcionalidades más complejas
como formularios, navegación y gestión de estado.
