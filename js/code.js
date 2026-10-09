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
  const textoCantidad = cantidad.value.trim();
  const valor = Number(textoCantidad);

  // Misión 04 ✔ · las monedas salen de los <select>
  const monedaOrigen = origen.value;
  const monedaDestino = destino.value;

  // Misión 07 ✔ · validar antes de consultar la API
  const mensajeError = validarEntrada(textoCantidad, valor, monedaOrigen, monedaDestino);
  if (mensajeError) {
    mostrarError(mensajeError);
    return;
  }

  const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen}/${monedaDestino}`;

  try {
    // Misión 08 ✔ · estado de carga
    establecerCarga(true);

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

  } finally {
    // Se ejecuta siempre: éxito o error
    establecerCarga(false);
  }
}

// Misión 06 ✔ · intercambia origen y destino y vuelve a calcular
function intercambiarMonedas() {
  const temporal = origen.value;
  origen.value = destino.value;
  destino.value = temporal;
  convertirMoneda();
}

// 4. UTILIDADES DE INTERFAZ
function mostrarError(mensaje) {
  resultado.classList.add("error");
  resultadoTexto.textContent = mensaje;
  detalleTasa.textContent = "Revisa los datos e inténtalo nuevamente.";
}

// Misión 08 ✔️ · activa o desactiva el estado de carga
function establecerCarga(cargando) {
  btnConvertir.disabled = cargando;
  btnIntercambiar.disabled = cargando;
  btnConvertir.textContent = cargando ? "Consultando..." : "Convertir";

  if (cargando) {
    resultado.classList.remove("error");
    resultadoTexto.textContent = "Consultando...";
    detalleTasa.textContent = "Obteniendo el tipo de cambio...";
  }
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

// Misión 07 ✔ · devuelve un mensaje de error, o null si los datos son válidos
function validarEntrada(texto, valor, monedaOrigen, monedaDestino) {
  if (texto === "") return "Escribe una cantidad.";
  if (!Number.isFinite(valor)) return "La cantidad no es un número válido.";
  if (valor <= 0) return "La cantidad debe ser mayor que cero.";
  if (monedaOrigen === monedaDestino) return "Elige dos monedas distintas.";
  return null;
}

// PISTA PARA EL RETO:
// origen.value        -> moneda seleccionada como origen
// destino.value       -> moneda seleccionada como destino
// cantidad.value      -> texto escrito en el input
// Number(...)         -> convierte texto a número
// response.ok         -> indica si la respuesta HTTP fue satisfactoria
// resultado.textContent -> permite modificar texto del DOM