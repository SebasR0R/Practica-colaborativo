# Currency Explorer · Starter Project

## Integrantes
- Estudiante A: Sebastián Rodríguez Ruiz  
- Estudiante B: granados magueyal pamela

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04     | pamela | sebastian |                    |
| 05 | | | |
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

1. 
2. 

## Revisión cruzada
- Aspecto bien resuelto:
- Error o comportamiento mejorable:
- Propuesta de mejora:
- Cambio incorporado después de la revisión:

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.
