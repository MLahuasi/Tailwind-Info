## FLEXBOX

| Tailwind CSS          | Equivalente en CSS                    | ¿Qué hace?                                                                               |
| --------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `flex`                | `display: flex;`                      | Convierte un contenedor en flexbox y habilita la alineación de sus hijos.                |
| `flex-row`            | `flex-direction: row;`                | Coloca los ítems en una fila (eje principal horizontal).                                 |
| `flex-col`            | `flex-direction: column;`             | Coloca los ítems en una columna (eje principal vertical).                                |
| `flex-wrap`           | `flex-wrap: wrap;`                    | Permite que los ítems se envuelvan a la siguiente línea si no caben.                     |
| `flex-nowrap`         | `flex-wrap: nowrap;`                  | Impide que los ítems se envuelvan (valor por defecto).                                   |
| `flex-wrap-reverse`   | `flex-wrap: wrap-reverse;`            | Envuelve los ítems, pero en dirección inversa.                                           |
| `items-start`         | `align-items: flex-start;`            | Alinea los ítems al inicio del eje cruzado. Alinea los elementos al inicio verticalmente |
| `items-center`        | `align-items: center;`                | Centra los ítems en el eje cruzado. Centra elementos hijos en el eje vertical            |
| `items-end`           | `align-items: flex-end;`              | Alinea los ítems al final del eje cruzado.                                               |
| `items-stretch`       | `align-items: stretch;`               | Estira los ítems para ocupar todo el eje cruzado.                                        |
| `items-baseline`      | `align-items: baseline;`              | Alinea los ítems en función de la línea base del texto.                                  |
| `justify-start`       | `justify-content: flex-start;`        | Alinea los ítems al inicio del eje principal.                                            |
| `justify-center`      | `justify-content: center;`            | Centra los ítems en el eje principal.                                                    |
| `justify-end`         | `justify-content: flex-end;`          | Alinea los ítems al final del eje principal.                                             |
| `justify-between`     | `justify-content: space-between;`     | Distribuye los ítems dejando espacio entre ellos.                                        |
| `justify-around`      | `justify-content: space-around;`      | Distribuye los ítems con espacio igual alrededor.                                        |
| `justify-evenly`      | `justify-content: space-evenly;`      | Distribuye los ítems con espacio igual entre todos.                                      |
| `gap-{n}`             | `gap: {n};`                           | Establece espacio entre ítems (tanto horizontal como vertical).                          |
| `order-{n}`           | `order: {n};`                         | Cambia el orden de un ítem (0 por defecto, valores negativos o positivos).               |
| `self-auto`           | `align-self: auto;`                   | Usa la alineación definida por el contenedor.                                            |
| `self-start`          | `align-self: flex-start;`             | Alinea solo ese ítem al inicio del eje cruzado.                                          |
| `self-center`         | `align-self: center;`                 | Centra solo ese ítem en el eje cruzado.                                                  |
| `self-end`            | `align-self: flex-end;`               | Alinea solo ese ítem al final del eje cruzado.                                           |
| `self-stretch`        | `align-self: stretch;`                | Estira solo ese ítem en el eje cruzado.                                                  |
| `self-baseline`       | `align-self: baseline;`               | Alinea solo ese ítem según la línea base del texto.                                      |
| `grow` / `grow-0`     | `flex-grow: 1;` / `flex-grow: 0;`     | Controla si un ítem crece para ocupar espacio libre.                                     |
| `shrink` / `shrink-0` | `flex-shrink: 1;` / `flex-shrink: 0;` | Controla si un ítem puede encogerse para no desbordar el contenedor.                     |
| `basis-{n}`           | `flex-basis: {n};`                    | Define el tamaño inicial del ítem antes de aplicar crecimiento o encogimiento.           |
| `flex-1`              | `flex: 1 1 0%;`                       | El ítem crece y se encoge proporcionalmente, con base 0%.                                |
| `flex-auto`           | `flex: 1 1 auto;`                     | Crece y se encoge con base automática.                                                   |
| `flex-initial`        | `flex: 0 1 auto;`                     | Mantiene tamaño inicial pero puede encogerse.                                            |
| `flex-none`           | `flex: none;`                         | No crece ni se encoge, mantiene tamaño fijo.                                             |

### TIPS

> - [Flex](https://tailwindcss.com/docs/flex)
> - [Order](https://tailwindcss.com/docs/order)
> - [flex-grow](https://tailwindcss.com/docs/flex-grow)

[BOX MODEL](./04-box-model.md) || [RESPONSIVE](./06-responsive.md)
