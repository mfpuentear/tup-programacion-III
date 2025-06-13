# Renderizado Condicional

En React, se utiliza JavaScript puro para decidir qué renderizar. Esto te da
mucha flexibilidad. Las dos formas más comunes de hacerlo dentro de JSX son el
**operador ternario** y el **operador lógico AND (`&&`)**.

## 1. Operador Ternario (`condicion ? ... : ...`)

Es perfecto cuando necesitas elegir entre **dos** posibles salidas. Si la
condición es verdadera, se renderiza la primera expresión; si es falsa, se
renderiza la segunda.

**Ejemplo: Estado de un Pedido**

```javascript
function EstadoPedido(props) {
  const { estaEnviado } = props;

  return (
    <div>
      <h3>Seguimiento de tu pedido:</h3>
      {estaEnviado ? (
        <p style={{ color: "green" }}>✓ Tu pedido ha sido enviado.</p>
      ) : (
        <p style={{ color: "orange" }}>... Tu pedido está siendo procesado.</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <EstadoPedido estaEnviado={true} />
      <EstadoPedido estaEnviado={false} />
    </div>
  );
}
```

## 2. Operador Lógico AND (`condicion && ...`)

Es un atajo ideal cuando quieres renderizar algo **solo si una condición es
verdadera**, y no renderizar nada si es falsa.

En JavaScript, la expresión `true && expresion` siempre evalúa a `expresion`, y
`false && expresion` siempre evalúa a `false`. React sabe que no debe renderizar
`false`, por lo que el elemento simplemente no aparece en el DOM.

**Ejemplo: Mostrar una Notificación de Nuevo Mensaje**

```javascript
function PanelDeControl(props) {
  const { cantidadMensajes } = props;

  return (
    <div>
      <h2>Panel de Control</h2>

      {/* El div solo aparece si cantidadMensajes > 0 */}
      {cantidadMensajes > 0 && (
        <div>¡Tienes {cantidadMensajes} mensajes nuevos!</div>
      )}

      <p>Contenido principal del panel...</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <PanelDeControl cantidadMensajes={5} />
      <PanelDeControl cantidadMensajes={0} />
    </div>
  );
}
```
