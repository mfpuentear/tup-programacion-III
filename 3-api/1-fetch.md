# Uso de fetch

## Introducción

La API Fetch es una interfaz moderna de JavaScript que permite realizar solicitudes HTTP asíncronas desde el navegador de forma sencilla y basada en promesas (o en `async/await`). Reemplaza y mejora al antiguo objeto `XMLHttpRequest`, ofreciendo una sintaxis más clara y mayor flexibilidad.

## Función fetch

La función `fetch` acepta dos parámetros:

- La URL a al que enviar la petición (este parámetro es obligatorio).
- Las opciones a configurar en la petición (este parámetro es opcional).

## Parámetros de `options`

| Propiedad     | Tipo            | Descripción                                                |
| ------------- | --------------- | ---------------------------------------------------------- |
| `method`      | `string`        | Método HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.).        |
| `headers`     | `object`        | Encabezados HTTP como pares clave-valor.                   |
| `body`        | `string`/`Blob` | Cuerpo de la solicitud (para métodos como `POST`).         |
| `mode`        | `string`        | Controla CORS: `cors`, `no-cors`, `same-origin`.           |
| `credentials` | `string`        | Envía cookies: `omit`, `same-origin`, `include`.           |
| `cache`       | `string`        | Estrategia de cache: `default`, `no-store`, `reload`, etc. |

## Ejemplos Prácticos con `async/await`

### Obtener datos y procesar JSON

```js
try {
  // Realizar petición
  const response = await fetch("https://api.example.com/users");

  if (!response.ok) {
    // En caso de no ser satisfactoria la petición producir un error
    throw new Error(response.statusText);
  }

  // Convertir datos a JSON y mostrarlos en consola
  const users = await response.json();
  console.log(users);
} catch (error) {
  console.error("Fetch error:", error);
}
```

### Enviar datos con método POST

```js
try {
  const response = await fetch("https://api.example.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Título de ejemplo",
      body: "Cuerpo del ejemplo",
    }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const post = await response.json();
  console.log("Post creado:", post);
} catch (error) {
  console.error("Error al crear post:", error);
}
```

### Respuestas de diferentes tipos con `async/await`

```js
async function fetchPDF() {
  const response = await fetch("/archivo.pdf");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  window.open(url);
}

async function fetchText() {
  const response = await fetch("/texto.txt");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const text = await response.text();
  console.log(text);
}
```
