# Introducción a HTML

---

## ¿Qué es HTML?

- HTML significa Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto). <!-- .element: class="fragment" -->
- HTML es el lenguaje de marcado estándar para crear páginas web. <!-- .element: class="fragment" -->
- HTML describe la estructura de las páginas web mediante marcado. <!-- .element: class="fragment" -->
- Los elementos HTML son los componentes básicos de las páginas HTML. <!-- .element: class="fragment" -->

---

## ¿Qué es HTML? (continuación)

- Los elementos HTML se representan mediante etiquetas. <!-- .element: class="fragment" -->
- Las etiquetas HTML marcan fragmentos de contenido como "encabezado", "párrafo", "tabla", etc. <!-- .element: class="fragment" -->
- Los navegadores no muestran las etiquetas HTML, sino que las utilizan para representar el contenido de la página. <!-- .element: class="fragment" -->

---

## Un ejemplo

El párrafo de un texto es el contenido. Colocar ese contenido dentro de una etiqueta HTML para que parezca un párrafo es estructura.

```html
<p>Esto es un contenido</p>
```

---

## Elementos y etiquetas HTML

- Un **elemento** es un componente individual de HTML.
  - párrafo, imagen, encabezado, etc.
  - Un nombre de elemento indica su propósito: p para párrafo.
- Una **etiqueta** marca el principio y fin de un elemento HTML.

```html
<nombredeetiqueta>Cosas en el medio</nombredeetiqueta>
```

---

![etiqueta html](/img/etiquetas-html.svg)

---

## Anatomía de un elemento HTML

- Elemento contenedor
  - Un elemento puede contener otros elementos o contenido.
  - Un párrafo (`<p>contenido</p>`) contiene texto
- Elemento independiente
  - Un elemento que no puede contener nada más.
  - `<br/>`, `<img/>`

---

- Atributo
  - Proporciona información adicional sobre el elemento HTML.
  - clase, id, lenguaje, estilo, identidad, fuente.
  - Se coloca dentro de una etiqueta de apertura, antes del corchete angular derecho.
- Valor
  - El valor es el valor asignado a un atributo determinado.
  - Los valores deben ir entre comillas.

```html
<img src="mi_imagen.jpg" />
```

---

## Estructura HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    <h1>Encabezado</h1>
    <p>Párrafo</p>
    <img src="imagen.jpg" />
  </body>
</html>
```

---

## `<!DOCTYPE>`

- La declaración `<!DOCTYPE>` representa el tipo de documento y ayuda a los navegadores a mostrar las páginas web correctamente.
- Solo debe aparecer una vez, en la parte superior de la página (antes de cualquier etiqueta HTML).
- La declaración `<!DoCtYpE>` no distingue entre mayúsculas y minúsculas.
- La declaración `<!DOCTYPE>` para HTML5 es `<!DOCTYPE html>`.

---

## `<html>`, `<head>`, `<body>`

- Después de `<!DOCTYPE>`, el contenido de la página debe estar entre las etiquetas `<html>`.
- El encabezado (head) contiene el título de la página y la metainformación sobre ella. La metainformación no es visible para el usuario, pero tiene diversas funciones, como proporcionar información a los motores de búsqueda.
- El cuerpo (body) contiene el contenido real de la página. Todo lo que contiene el cuerpo es visible para el usuario. (¡Con algunas excepciones!)

---

## Primera página HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    El contenido de la página va aquí
  </body>
</html>
```

---

## Anidación

Todos los elementos se anidan entre sí.
La anidación ocurre cuando se colocan etiquetas dentro de otras etiquetas que las contienen.
Por ejemplo, se colocaría la etiqueta `<p>` dentro de la etiqueta `<body>`. La etiqueta `<p>` ahora está anidada dentro de la etiqueta `<body>`.

```html
<body>
  <p>El párrafo va aquí.</p>
</body>
```

### El elemento que se abre primero se cierra último

---

## Encabezados

- Los encabezados HTML se definen con las etiquetas `<h1>` a `<h6>`.
- `<h1>` define el encabezado más importante. `<h6>` define el encabezado menos importante.

```html
<h1>Este es el encabezado 1</h1>
<h2>Este es el encabezado 2</h2>
<h3>Este es el encabezado 3</h3>
<h4>Este es el encabezado 4</h4>
<h5>Este es el encabezado 5</h5>
<h6>Este es el encabezado 6</h6>
```

---

## Párrafos

- Los párrafo HTML son definidos con la etiqueta `<p>`.

```html
<p>Esto es un párrafo</p>
<p>Esto es otro párrafo</p>
```

---

## Saltos de líneas

El siguiente texto:

```
<p>
  Una oración
  Otra oración
  Tercera oración
</p>
```

Se mostrará en una sola línea.

---

El elemento `<br />` define un salto de línea sin iniciar un nuevo párrafo.

```html
<p>
  Una oración <br />
  Otra oración <br />
  Tercera oración <br />
</p>
```

---

## Texto preformateado

- El elemento HTML `<pre>` define texto preformateado.
- El texto dentro de un elemento `<pre>` se muestra en una fuente de ancho fijo (normalmente Courier) y conserva tanto los espacios como los saltos de línea.

```html
<pre>
  Una oración
  Otra oración
  Tercera oración
</pre>
```

---

## Texto formateado

```html
<p>
  Aquí hay un párrafo con texto <em>destacado</em> y texto
  <strong>importante</strong>.
</p>
```

```html
<p>
  Esto es otro párrafo con texto en <i>cursiva</i> y texto en <b>negrita</b>.
</p>
```

---

## Texto formateado

```html
<p>
  Esto es un texto <mark>resaltado</mark> y esto es un texto
  <small>pequeño</small>.
</p>
```

```html
<p>
  Esto es un texto <del>tachado</del> y esto es un texto <ins>insertado</ins>.
</p>
```

```html
<p>
  Esto es un texto <sup>superíndice</sup> y esto es un texto
  <sub>subíndice</sub>.
</p>
```

---

## Enlaces

- Los enlaces HTML se definen con la etiqueta `<a>`.
- El destino del enlace se especifica en el atributo href.
- El atributo target especifica dónde abrir el documento enlazado (\_self, \_blank, ...).

```html
<a href="http://www.google.com" target="_blank">¡Este es un enlace a Google!</a>
```

---

## Imágenes

- Las imágenes HTML se definen con la etiqueta `<img>`.
- El archivo fuente (src), el texto alternativo (alt), el ancho (width) y el alto (height) se proporcionan como atributos.

```html
<img src="logo.jpg" alt="Logo" width="104" height="142" />
```

---

## Listas

- Sin orden

```html
<ul>
  <li>Ítem lista</li>
  <li>Otro ítem lista</li>
</ul>
```

- Con orden

```html
<ol>
  <li>Ítem lista</li>
  <li>Otro ítem lista</li>
</ol>
```

---

## Tablas

```html
<table>
  <tr>
    <th>Encabezado</th>
    <th>Encabezado</th>
  </tr>
  <tr>
    <td>Dato</td>
    <td>Dato</td>
  </tr>
</table>
```

---

## Comentarios

- Se pueden añadir comentarios al código que no serán visibles para el navegador, sino solo al visualizar el código.
- Los comentarios se pueden usar para:
  - Organizar el código en secciones
  - Comentar grandes fragmentos de código para ocultarlos del navegador.

```html
<!-- Inicio del encabezado -->
<div id="header">Contenido del encabezado</div>
<!-- Fin del encabezado -->
```
