# HTML: Más allá de lo básico

## Clases e IDs HTML

Las clases son atributos que adjuntan información a un elemento para que puedas
hacer más cosas con algunos o todos los elementos que pertenecen a una clase
determinada.

Al igual que las clases, los IDs son atributos adjuntos a los elementos. Son
identificadores únicos para un elemento en particular. Siempre deben comenzar
con una letra, pero puedes agregar números después.

Se puede asignar un ID a un elemento si es necesario hacer algo específico con
él, como ejecutar JavaScript o incluso configurar un estilo único.

```html
<p class="lindo">Un párrafo lindo</p>
<h1 class="lindo">Un titulo lindo</h1>

<p id="p1">Este párrafo puede ser referido como p1</p>
<h1 id="mititulo">Título</h1>
```

## Pseudoclases

Una pseudoclase se utiliza para definir un estado especial de un elemento. Por ejemplo:

- Aplicar estilo a un elemento cuando el usuario pasa el ratón sobre él.
- Aplicar estilo a enlaces visitados y no visitados de forma diferente.
- Aplicar estilo a un elemento cuando recibe el foco.

```css
selector:pseudoclase {
  propiedad: valor;
}
```

## Pseudoclases de enlaces

Los enlaces se pueden mostrar de diferentes maneras:

```css
/* enlace no visitado */
a:link {
  color: #ff0000;
}

/* enlace visitado */
a:visited {
  color: #00ff00;
}

/* pasar el ratón sobre el enlace */
a:hover {
  color: #ff00ff;
}

/* enlace seleccionado */
a:active {
  color: #0000ff;
}
```

## Pseudoclases y clases CSS

Las pseudoclases se pueden combinar con clases CSS.

Al pasar el cursor sobre el enlace que pertenece a la clase `resaltado` en este
ejemplo, este cambiará de color:

```css
a.resaltado:hover {
  color: #ff0000;
}
```

## Elementos HTML de bloque y en línea

Cada elemento HTML tiene un valor de visualización predeterminado que depende
del tipo de elemento. El valor de visualización predeterminado para la mayoría
de los elementos es **de bloque** o **en línea**.

Un elemento de bloque siempre comienza en una nueva línea y ocupa todo el ancho
disponible (se extiende a la izquierda y a la derecha tanto como sea posible).

Un elemento en línea no comienza en una nueva línea y solo ocupa el ancho necesario.

<img alt="bloque-linea" src="img/1-bloque-linea.png" width="70%" />

## Elementos HTML de bloque y en línea

Ejemplo de elementos de bloque:

`<p>`, `<pre>`, `<table>`, `<ul>`, `<ol>`, ...

Ejemplo de elementos en linea:

`<img>`, `<a>`, `<b>`, `<strong>`, `<small>`, ...

## El elemento `<div>`

El elemento `<div>` se utiliza a menudo como contenedor para otros elementos HTML.

El elemento `<div>` no tiene atributos obligatorios, pero tanto el estilo como
la clase son comunes.

Cuando se usa junto con CSS, el elemento `<div>` puede usarse para aplicar estilo
a bloques de contenido.

```html
<div style="background-color:black; color:white; padding:20px;">
  <h2>Londres</h2>
  <p>
    Londres es la capital de Inglaterra. Es la ciudad más poblada del Reino
    Unido, con un área metropolitana de más de 13 millones de habitantes.
  </p>
</div>
```

## El elemento `<span>`

El elemento `<span>` se utiliza a menudo como contenedor para texto.

El elemento `<span>` no tiene atributos obligatorios, pero tanto el estilo como
la clase son comunes.

Al usar el elemento `<span>` junto con CSS, se puede aplicar estilo a partes del
texto en línea.

```html
<h1>Mi encabezado <span style="color:red">Importante</span></h1>
```

## Elementos de agrupación HTML

En otras palabras, `<div>` y `<span>` pueden considerarse elementos de agrupación.

- `<div>` define una o más secciones a nivel **de bloque** en un documento.
- `<span>` define una o más secciones **en línea** en un documento.

```html
<body>
  <div id="encabezado">
    <h1>Título de página</h1>
  </div>
  <div id="contenido">
    <p>Contenido principal</p>
  </div>
  <div id="barra-lateral">
    <p>Algo <span class="resaltado">resaltado</span> en la barra lateral</p>
  </div>
  <div id="pie">
    <p>Derecho de autor</p>
  </div>
</body>
```

## Elementos estructurales/semánticos de HTML5

HTML5 ofrece nuevos elementos para una mejor estructura de documentos.

Los elementos estructurales son elementos a nivel de bloque que ayudan a
identificar el tipo de contenido y el área de la página donde se colocará.

- `<header></header>`: Define un encabezado para un documento o sección.
- `<nav></nav>`: Define enlaces de navegación.
- `<article></article>`: Define un artículo en un documento.
- `<section></section>`: Define una sección en un documento.
- `<main></main>`: Define el contenido principal de un documento.
- `<footer></footer>`: Define un pie de página para un documento o sección.
