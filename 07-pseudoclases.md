## PSEUDOCLASES

| Prefijo                       | Media Query en CSS                               | Móvil / Desktop First | Descripción                                                                         |
| ----------------------------- | ------------------------------------------------ | --------------------- | ----------------------------------------------------------------------------------- |
| `hover:`                      | `:hover`                                         | N/A                   | Aplica estilo cuando el usuario pasa el cursor sobre un elemento.                   |
| `focus:`                      | `:focus`                                         | N/A                   | Estilos cuando un elemento tiene foco (ej. input activo).                           |
| `focus-within:`               | `:focus-within`                                  | N/A                   | Aplica estilos al contenedor si alguno de sus hijos recibe foco.                    |
| `active:`                     | `:active`                                        | N/A                   | Estado cuando un elemento está siendo presionado/clicado.                           |
| `checked:`                    | `:checked`                                       | N/A                   | Se aplica a inputs tipo checkbox o radio seleccionados.                             |
| `disabled:`                   | `:disabled`                                      | N/A                   | Estilos cuando el elemento está deshabilitado.                                      |
| `enabled:`                    | `:enabled`                                       | N/A                   | Opuesto a `disabled:`; cuando el control está habilitado.                           |
| `read-only:`                  | `:read-only`                                     | N/A                   | Se activa en inputs que tienen el atributo `readonly`.                              |
| `placeholder-shown:`          | `:placeholder-shown`                             | N/A                   | Se activa cuando el input muestra su placeholder.                                   |
| `first:`                      | `:first-child`                                   | N/A                   | Aplica estilo al primer hijo dentro de un contenedor.                               |
| `last:`                       | `:last-child`                                    | N/A                   | Aplica estilo al último hijo dentro de un contenedor.                               |
| `odd:`                        | `:nth-child(odd)`                                | N/A                   | Estilos a elementos en posiciones impares.                                          |
| `even:`                       | `:nth-child(even)`                               | N/A                   | Estilos a elementos en posiciones pares.                                            |
| `peer`                        | N/A (`~` hermano)                                | N/A                   | Marca un input como “peer” para afectar a sus hermanos posteriores.                 |
| `peer-focus:`                 | `:focus` (del peer)                              | N/A                   | Estilos en el hermano cuando el peer recibe foco.                                   |
| `peer-checked:`               | `:checked` (del peer)                            | N/A                   | Estilos en el hermano cuando el peer está marcado.                                  |
| `peer-not-placeholder-shown:` | `:not(:placeholder-shown)` (del peer)            | N/A                   | Estilos en el hermano cuando el peer ya no muestra placeholder.                     |
| `group`                       | N/A (clase contenedora)                          | N/A                   | Permite que los hijos reaccionen a estados del contenedor.                          |
| `group-hover:`                | `:hover` (del grupo)                             | N/A                   | Estilos en hijos cuando el contenedor `.group` está en hover.                       |
| `group-focus:`                | `:focus` (del grupo)                             | N/A                   | Estilos en hijos cuando el grupo recibe foco.                                       |
| `group-has:`                  | `:has()` (del grupo)                             | N/A                   | Estilos en hijos cuando el grupo contiene un selector específico.                   |
| `group-has-[:checked]:`       | `:has(:checked)`                                 | N/A                   | Estilos en hijos si el grupo contiene un input marcado.                             |
| `has-[:checked]:`             | `:has(:checked)`                                 | N/A                   | Estilos si el elemento contiene un hijo `:checked`.                                 |
| `has-[input]:`                | `:has(input)`                                    | N/A                   | Estilos si el elemento tiene hijos que cumplen ese selector.                        |
| `focus-visible:`              | `:focus-visible`                                 | N/A                   | Foco “visible” accesible (cuando el navegador decide que se muestre).               |
| `target:`                     | `:target`                                        | N/A                   | Se activa cuando el elemento coincide con un hash `#id` en la URL.                  |
| `motion-safe:`                | `@media (prefers-reduced-motion: no-preference)` | Desktop First         | Aplica animaciones/transiciones solo si el usuario NO ha pedido reducir movimiento. |
| `motion-reduce:`              | `@media (prefers-reduced-motion: reduce)`        | Desktop First         | Desactiva o simplifica animaciones si el usuario pide reducción de movimiento.      |
| `dark:`                       | `@media (prefers-color-scheme: dark)`            | Desktop First         | Aplica estilos en modo oscuro si está activado.                                     |
| `open:`                       | `:open`                                          | N/A                   | Para `<details>` u otros elementos con estado `open`.                               |

## PSEUDO ELEMENTOS

| Prefijo              | Media Query en CSS                        | Móvil / Desktop First | Descripción                                                                                          |
| -------------------- | ----------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| `before:`            | `::before`                                | N/A                   | Inserta contenido antes del elemento; útil para badges, decoraciones y líneas. Requiere `content-*`. |
| `after:`             | `::after`                                 | N/A                   | Inserta contenido después del elemento; similar a `before:`. Requiere `content-*`.                   |
| `first-letter:`      | `::first-letter`                          | N/A                   | Estiliza la primera letra de un bloque (drop caps, tamaños, colores).                                |
| `first-line:`        | `::first-line`                            | N/A                   | Estiliza la primera línea de un bloque (tipografía, mayúsculas, tracking).                           |
| `marker:`            | `::marker`                                | N/A                   | Estiliza la viñeta/contador de listas (`<li>` con `list-*`).                                         |
| `selection:`         | `::selection`                             | N/A                   | Estilos para texto seleccionado por el usuario (color de fondo, texto).                              |
| `placeholder:`       | `::placeholder`                           | N/A                   | Estiliza el placeholder de inputs/textarea (color, opacidad, tracking).                              |
| `file:`              | `::file-selector-button`                  | N/A                   | Estiliza el botón interno de `<input type="file">` (padding, bg, borde).                             |
| `backdrop:`          | `::backdrop`                              | N/A                   | Estiliza el backdrop de elementos de UI como `<dialog open>` o fullscreen.                           |
| `scrollbar:`\*       | `::-webkit-scrollbar` (no estándar)       | N/A                   | Estiliza el canal del scrollbar (requiere soporte WebKit; considera accesibilidad).                  |
| `scrollbar-thumb:`\* | `::-webkit-scrollbar-thumb` (no estándar) | N/A                   | Estiliza el “pulgar” del scrollbar (color, radio).                                                   |
| `scrollbar-track:`\* | `::-webkit-scrollbar-track` (no estándar) | N/A                   | Estiliza la pista del scrollbar detrás del “pulgar”.                                                 |

### TIPS

> - **Group / Peer**: son inventos de Tailwind, que usan :is() y combinadores de CSS para simular herencia de estados.

> - **Has**: necesita navegadores modernos (funciona ya en Chrome/Edge/Opera, Firefox está en progreso).

[RESPONSIVE](./06-responsive.md) || [PERSONALIZAR](./08-personalizar-tailwind.md)
