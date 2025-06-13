# CSS en Componentes React

Hacer que nuestros componentes se vean bien es tan importante como hacer que
funcionen. React es flexible y nos ofrece varias maneras de aplicar estilos de
CSS. Veremos dos de las formas más directas y comunes.

## Estilos en Línea (Inline Styles)

La forma más directa de aplicar estilos a un elemento es a través del atributo
`style` en JSX. Sin embargo, en lugar de pasar una cadena de texto como en HTML,
en React se pasa un **objeto de JavaScript**.

Las propiedades de CSS en este objeto se escriben en `camelCase` en lugar del
tradicional `kebab-case`. Por ejemplo, `background-color` se convierte en
`backgroundColor`.

**Ejemplo:**

Creemos un componente `TarjetaUsuario` y apliquémosle estilos directamente en
línea.

```javascript
function TarjetaUsuario(props) {
  // 1. Definimos un objeto de estilos
  const tarjetaStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const nombreStyle = {
    color: "#333",
    fontSize: "24px",
  };

  const profesionStyle = {
    color: "dodgerblue",
    fontSize: "18px",
    fontStyle: "italic",
  };

  // 2. Aplicamos el objeto al atributo `style`
  return (
    <div style={tarjetaStyle}>
      <h2 style={nombreStyle}>{props.nombre}</h2>
      <p style={profesionStyle}>{props.profesion}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Elena Rodriguez"
        profesion="Ingeniera de Software"
      />
      <TarjetaUsuario nombre="Miguel Campos" profesion="Diseñador UX/UI" />
    </div>
  );
}
```

**Ventajas:**

- **Encapsulación:** Los estilos son locales al componente, evitando colisiones
  de nombres de clases.
- **Dinamismo:** Puedes cambiar los estilos fácilmente basándote en las `props`
  o el estado del componente.

**Desventajas:**

- Puede volverse verboso.
- No puedes usar pseudo-clases como `:hover` o media queries directamente.

## Hojas de Estilo Externas (CSS Clásico)

Este es el método tradicional y el más familiar. Simplemente creas un archivo
`.css` y lo enlazas en tu `index.html`. Luego, usas el atributo `className` en
tus componentes para aplicar las clases.

**Paso 1: Crear el archivo CSS**

Crea un archivo llamado `styles.css` en la misma carpeta que tu `index.html`.

**`styles.css`**

```css
.tarjeta-usuario {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s; /* Añadimos una transición para el hover */
}

/* Ejemplo de pseudo-clase */
.tarjeta-usuario:hover {
  transform: scale(1.03);
}

.tarjeta-usuario .nombre {
  color: #333;
  font-size: 24px;
}

.tarjeta-usuario .profesion {
  color: #c71585; /* Un color diferente */
  font-size: 18px;
  font-style: italic;
}
```

**Paso 2: Enlazar el CSS en el HTML**

Añade la etiqueta `<link>` en el `<head>` de tu `index.html`.

**`index.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Mi Primera App en React</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // El código de React se escribe aqui
    </script>
  </body>
</html>
```

**Paso 3: Usar `className` en el componente**

Ahora, modifica tu componente para que use `className` en lugar de `style`.

```javascript
function TarjetaUsuario(props) {
  // Los estilos ahora vienen del archivo .css
  return (
    <div className="tarjeta-usuario">
      <h2 className="nombre">{props.nombre}</h2>
      <p className="profesion">{props.profesion}</p>
    </div>
  );
}

// El resto del código de App y ReactDOM.render sigue igual
function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Elena Rodriguez"
        profesion="Ingeniera de Software"
      />
      <TarjetaUsuario nombre="Miguel Campos" profesion="Diseñador UX/UI" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

**Ventajas:**

- **Familiaridad:** Es el método CSS que la mayoría de los desarrolladores
  conocen.
- **Potencia Completa de CSS:** Permite usar pseudo-clases, media queries,
  animaciones, etc.
- **Separación de incumbencias:** Mantiene la lógica del componente separada de
  sus estilos.

**Desventajas:**

- Los estilos son globales por defecto, lo que puede llevar a conflictos de
  nombres en aplicaciones grandes (problema que soluciones como los CSS Modules
  resuelven en entornos con `npm`).
