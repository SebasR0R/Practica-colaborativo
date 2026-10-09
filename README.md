# Currency Explorer · Starter Project

## Integrantes
- Estudiante A: Sebastián Rodríguez Ruiz  
- Estudiante B: granados magueyal pamela

## Pair Programming
| Misión| Driver  | Navigator | Commit / evidencia |
|---    |---      |---        |---                 |
| 04    |pamela   | sebastian |"Misión 04: monedas dinámicas desde los selectores — Driver: B / Navigator: A"|
| 05    |sebastian| pamela    |"Misión 05: Necesitamos formatear el resultado según la moneda porque no todas  usan dos decimales ni resultan legibles con números grandes o muy pequeños."|
| 06 | | | |
| 07 | | | |
| 08 | | | |
| 09 | | | |
| 10 | | | |
## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Descomprime el proyecto.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o un servidor local equivalente.
4. Abre DevTools → Console y Network para observar el comportamiento.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Evidencia de red (Checkpoint 1)

Petición `GET https://api.frankfurter.dev/v2/rate/EUR/USD` con estado 200.

![Lista de peticiones](evidencia/network-lista.png)
![Cabeceras](evidencia/network-cabeceras.png)
![Respuesta JSON](evidencia/network-respuesta.png)

**Qué observamos:** el navegador pide el tipo de cambio a la API (Network),
recibe un JSON con `date`, `base`, `quote` y `rate`, y `code.js` usa
`datos.rate` para calcular y mostrar el resultado (Console y DOM).

## Decisiones técnicas
Registra aquí al menos dos decisiones tomadas por la pareja y explica por qué.

1. se decisio usar Intl.NumberFormat en la mision 5 ya que este formatea con separadores de miles y los decimales propios de cada moneda. Está es soportada por todos los navegadores modernos
el valor es un numero Porque el input entrega texto, pero antes lo convertimos con Number(cantidad.value) y lo validamos. Intl.NumberFormat y la comparación monto < 1 necesitan un número real.
que hace cada cosa: 
API: rate (tasa) y date (fecha).
App: la cantidad del usuario, la multiplicación, el formato y la actualización del DOM.
2. 

## Revisión cruzada
- Aspecto bien resuelto:
- Error o comportamiento mejorable:
- Propuesta de mejora:
- Cambio incorporado después de la revisión:

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.
