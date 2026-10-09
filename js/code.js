// ============================================================
// CURRENCY EXPLORER · STARTER PROJECT
// Archivo principal de trabajo para las misiones de JavaScript
// ============================================================

// 1. REFERENCIAS AL DOM
const cantidad = document.querySelector("#cantidad");
const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");
const btnConvertir = document.querySelector("#convertir");
const btnIntercambiar = document.querySelector("#intercambiar");
const resultado = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const detalleTasa = document.querySelector("#detalleTasa");

// 2. EVENTOS
btnConvertir.addEventListener("click", convertirMoneda);
btnIntercambiar.addEventListener("click", intercambiarMonedas);

// 3. FUNCIÓN PRINCIPAL
async function convertirMoneda() {
  const valor = Number(cantidad.value);

  // TODO · MISIÓN 07: sustituir esta validación mínima por una validación completa.
  if (!Number.isFinite(valor) || valor <= 0) {
    mostrarError("Escribe una cantidad mayor que cero.");
    return;
  }

  // Misión 04 ✔ · las monedas salen de los <select>
  const monedaOrigen = origen.value;
  const monedaDestino = destino.value;

  const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen}/${monedaDestino}`;

  try {
    // TODO · MISIÓN 08: activar un estado visual de carga antes de consultar.
    const respuesta = await fetch(url);

    // TODO · MISIÓN 09: comprobar response.ok y lanzar un error si corresponde.
    const datos = await respuesta.json();

    const conversion = valor * datos.rate;

    // Misión 05 ✔ · resultado formateado según la moneda
    resultado.classList.remove("error");
    resultadoTexto.textContent =
      `${formatearMonto(valor, monedaOrigen)} = ${formatearMonto(conversion, monedaDestino)}`;
    detalleTasa.textContent =
      `1 ${monedaOrigen} = ${datos.rate} ${monedaDestino} · ${datos.date}`;

  } catch (error) {
    // TODO · MISIÓN 09: mejora el mensaje y analiza qué errores pueden llegar aquí.
    mostrarError("No fue posible completar la consulta.");
    console.error(error);
  }
}

function intercambiarMonedas() {
  // TODO · MISIÓN 06:
  // 1) guardar temporalmente el valor de origen
  // 2) intercambiar origen.value y destino.value
  // 3) volver a calcular
  mostrarError("Misión 06 pendiente: implementa el intercambio de monedas.");
}

// 4. UTILIDADES DE INTERFAZ
function intercambiarMonedas() {
  // 1) guardar temporalmente el valor de origen
  const temporal = origen.value;

  // 2) intercambiar origen.value y destino.value
  origen.value = destino.value;
  destino.value = temporal;

  // 3) volver a calcular
  convertirMoneda();
}

// Misión 05 ✔ · formatea un monto con separadores y decimales propios de cada moneda
function formatearMonto(monto, moneda) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: moneda,
    currencyDisplay: "code",
    maximumFractionDigits: monto < 1 ? 4 : 2
  }).format(monto);
}

// PISTA PARA EL RETO:
// origen.value        -> moneda seleccionada como origen
// destino.value       -> moneda seleccionada como destino
// cantidad.value      -> texto escrito en el input
// Number(...)         -> convierte texto a número
// response.ok         -> indica si la respuesta HTTP fue satisfactoria
// resultado.textContent -> permite modificar texto del DOM