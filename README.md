# Currency Explorer

Conversor de divisas en HTML, CSS y JavaScript Vanilla que consume la API pública Frankfurter. Proyecto de Pair Programming.

## Integrantes
- Estudiante A: Sebastián Rodríguez Ruiz
- Estudiante B: Pamela Granados Magueyal

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## API utilizada
Frankfurter API v2 (HTTPS, sin API key, respuesta en JSON).

Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Ejecución
1. Clona el repositorio.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o un servidor local equivalente.
4. Abre DevTools → Console y Network para observar el comportamiento.

## Funcionalidades
- [x] Consulta del tipo de cambio a la API con `fetch()` (Misiones 1-3)
- [x] Selección dinámica de moneda origen y destino (Misión 04)
- [x] Resultado formateado según la moneda (Misión 05)
- [x] Botón para intercambiar monedas (Misión 06)
- [x] Validación completa de la cantidad y las monedas (Misión 07)
- [x] Estado de carga con botones deshabilitados (Misión 08)
- [ ] Manejo de errores de red y HTTP (Misión 09)
- [ ] Diseño responsive (Misión 10)

## Pair Programming

| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Pamela | Sebastián | Misión 04: monedas dinámicas desde los selectores — Driver: B / Navigator: A |
| 05 | Sebastián | Pamela | Misión 05: conversión completa con formato por moneda — Driver: A / Navigator: B |
| 06 | Pamela | Sebastián | Misión 06: intercambio de monedas y recálculo — Driver: B / Navigator: A |
| 07 | Sebastián | Pamela | Misión 07: validación de cantidad y monedas — Driver: A / Navigator: B |
| 08 | Pamela | Sebastián | Misión 08: estado de carga y botones deshabilitados — Driver: B / Navigator: A |
| 09 | | | |
| 10 | | | |

## Diseño por misión
Frase "Necesitamos ___ porque ___" escrita antes de programar cada misión.

- **Misión 04:** Necesitamos leer los valores de los `<select>` porque la URL del endpoint debe depender de la moneda que elija el usuario.
- **Misión 05:** Necesitamos formatear el resultado según la moneda porque no todas usan dos decimales ni resultan legibles con números grandes o muy pequeños.
- **Misión 06:** Necesitamos intercambiar los valores de los dos `<select>` y volver a consultar porque el usuario quiere ver la conversión inversa sin elegir las monedas a mano.
- **Misión 07:** Necesitamos validar la cantidad y las monedas antes de consultar la API porque un valor vacío, cero, negativo o una moneda repetida producen resultados sin sentido o peticiones innecesarias.
- **Misión 08:** Necesitamos mostrar "Consultando..." y deshabilitar los botones mientras se espera la respuesta porque la petición tarda y el usuario podría pensar que no pasó nada o lanzar varias consultas a la vez.

## Evidencia de red (Checkpoint 1)

Petición `GET https://api.frankfurter.dev/v2/rate/EUR/USD` con estado 200.

![Lista de peticiones](evidencia/network-lista.webp)
![Cabeceras](evidencia/network-cabeceras.webp)
**Qué observamos:** el navegador pide el tipo de cambio a la API (Network), recibe un JSON con `date`, `base`, `quote` y `rate`, y `code.js` usa `datos.rate` para calcular y mostrar el resultado (Console y DOM).

## Checkpoints

| Misión | Checkpoint | Explicado por | Observación |
|---|---|---|---|
| 1 | Console + Network | | |
| 2 | Recorrido clic → DOM | | |
| 04 | `origen` vs `origen.value` | | |
| 05 | Qué viene de la API y qué genera la app | | |
| 06 | Variable `temporal` en el intercambio | | |
| 07 | Validación previa al fetch | | |
| 08 | Uso de `finally` para reactivar los botones | | |

## Decisiones técnicas

1. Usamos `Intl.NumberFormat` en lugar de `toFixed(2)` porque `toFixed(2)` mostraba 0.01 para 1 JPY → USD y no separaba los miles. Lo encapsulamos en la función `formatearMonto()` para que cada función tenga una sola responsabilidad.
2. Leímos las monedas con `origen.value` y `destino.value`, por lo que no fue necesario modificar la línea de la URL: ya usaba template literals.
3. Para el caso EUR → EUR elegimos la Opción A: bloquear la acción y notificar al usuario con un mensaje claro, priorizando la simplicidad del código y evitando llamadas innecesarias a la API.
4. Usamos un bloque `finally` para reactivar los botones porque se ejecuta siempre, tanto si la consulta tiene éxito como si falla; sin él, un error dejaría la interfaz bloqueada.

## Pendientes detectados
- Ninguno por ahora.

## Resueltos
- EUR → EUR (misma moneda en origen y destino): resuelto en la Misión 07 con un mensaje de validación.

## Revisión cruzada
- Aspecto bien resuelto:
- Error o comportamiento mejorable:
- Propuesta de mejora:
- Cambio incorporado después de la revisión:

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.