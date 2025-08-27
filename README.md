## Enlace al proyecto en CloudFront

[Ver la app en CloudFront](dat27m0pdjgeq.cloudfront.net)


## HOOKS UTILIZADOS

En esta aplicación usamos los siguientes hooks de React:

### useState
- **Qué hace:** Permite crear y manejar estados dentro de un componente funcional.
- **Por qué lo usamos:** 
  - `tareas` y `setTareas`: para guardar y actualizar la lista de tareas.
  - `nuevaTarea` y `setNuevaTarea`: para manejar el valor del input al escribir una nueva tarea.
  - `filtro` y `setFiltro`: para controlar qué tareas mostrar (Todas, Pendientes o Completadas).

### Cómo se aplica en el proyecto
- Cuando agregas una tarea nueva, usamos `setTareas` para añadirla a la lista.
- Al cambiar el estado de una tarea (Pendiente ↔ Completada), usamos `setTareas` para actualizar el objeto correspondiente.
- Al escribir en el input, `setNuevaTarea` mantiene el valor en el estado.
- Los botones de filtro usan `setFiltro` para decidir qué tareas se muestran en la lista.

## UseEffect

**Qué hace**:
useEffect permite ejecutar código de forma automática después de que el componente se renderiza.
Generalmente Efectos secundarios (side effects), como llamadas a APIs, suscripciones, temporizadores, o guardar/leer datos en localStorage.

Mantener sincronizados estados con el mundo externo.

**donde lo usamos en este proyecto**:
Para que las tareas no se borren al recargar la página, podemos guardar y recuperar la lista de tareas desde localStorage.
