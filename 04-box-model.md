## BOX MODEL

Permite controlar los tamaños de los elementos en CSS.

### width & height

| Tailwind CSS   | Equivalente en CSS                 | ¿Qué hace?                                                       |
| -------------- | ---------------------------------- | ---------------------------------------------------------------- |
| `w-50`         | `width: 12.5rem;`                  | Define el ancho en múltiplos de 4px (50×4px = 200px)             |
| `w-1/2`        | `width: 50%;`                      | Ancho del 50% del contenedor padre                               |
| `w-[553.5px]`  | `width: 553.5px;`                  | Ancho personalizado usando valor arbitrario                      |
| `w-full`       | `width: 100%;`                     | Ancho al 100% del contenedor padre                               |
| `w-screen`     | `width: 100vw;`                    | Ancho igual al del viewport                                      |
| `min-w-0`      | `min-width: 0;`                    | El ancho mínimo puede ser 0 (útil en flex y grid)                |
| `max-w-xs`     | `max-width: 20rem;`                | Ancho máximo predefinido (xs)                                    |
| `max-w-full`   | `max-width: 100%;`                 | Ancho máximo al 100%                                             |
| `h-50`         | `height: 12.5rem;`                 | Define la altura en múltiplos de 4px (50×4px = 200px)            |
| `h-3/4`        | `height: 75%;`                     | Altura del 75% del contenedor padre                              |
| `h-[30vh]`     | `height: 30vh;`                    | Altura personalizada relativa al viewport                        |
| `h-full`       | `height: 100%;`                    | Altura al 100% del contenedor padre                              |
| `h-screen`     | `height: 100vh;`                   | Altura igual a la del viewport                                   |
| `min-h-0`      | `min-height: 0;`                   | Altura mínima en 0 (útil en flex/grid)                           |
| `min-h-screen` | `min-height: 100vh;`               | Altura mínima igual a la pantalla                                |
| `max-h-full`   | `max-height: 100%;`                | Altura máxima al 100%                                            |
| `max-h-screen` | `max-height: 100vh;`               | Altura máxima igual a la pantalla                                |
| `size-70`      | `width: 17.5rem; height: 17.5rem;` | Define ancho y alto iguales en múltiplos de 4px (70×4px = 280px) |
| `size-1/4`     | `width: 25%; height: 25%;`         | Ancho y alto iguales al 25% del contenedor                       |
| `size-[100px]` | `width: 100px; height: 100px;`     | Ancho y alto personalizados                                      |
| `size-full`    | `width: 100%; height: 100%;`       | Ancho y alto al 100% del contenedor                              |
| `size-screen`  | `width: 100vw; height: 100vh;`     | Ancho y alto igual al tamaño del viewport                        |

### padding y margin

| Tailwind CSS | Equivalente en CSS                               | ¿Qué hace?                                                                              |
| ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `p-15`       | `padding: 3.75rem;`                              | Padding uniforme en todos los lados (15×4px = 60px)                                     |
| `px-15`      | `padding-left: 3.75rem; padding-right: 3.75rem;` | Padding horizontal                                                                      |
| `py-15`      | `padding-top: 3.75rem; padding-bottom: 3.75rem;` | Padding vertical                                                                        |
| `pt-15`      | `padding-top: 3.75rem;`                          | Padding solo arriba                                                                     |
| `pr-15`      | `padding-right: 3.75rem;`                        | Padding solo a la derecha                                                               |
| `pb-15`      | `padding-bottom: 3.75rem;`                       | Padding solo abajo                                                                      |
| `pl-15`      | `padding-left: 3.75rem;`                         | Padding solo a la izquierda                                                             |
| `p-[10px]`   | `padding: 10px;`                                 | Padding uniforme con valor personalizado                                                |
| `p-0`        | `padding: 0;`                                    | Elimina todo el padding                                                                 |
| `m-15`       | `margin: 3.75rem;`                               | Margin uniforme en todos los lados (15×4px = 60px)                                      |
| `mx-15`      | `margin-left: 3.75rem; margin-right: 3.75rem;`   | Margin horizontal                                                                       |
| `my-15`      | `margin-top: 3.75rem; margin-bottom: 3.75rem;`   | Margin vertical                                                                         |
| `mt-15`      | `margin-top: 3.75rem;`                           | Margin solo arriba                                                                      |
| `mr-15`      | `margin-right: 3.75rem;`                         | Margin solo a la derecha                                                                |
| `mb-15`      | `margin-bottom: 3.75rem;`                        | Margin solo abajo                                                                       |
| `ml-15`      | `margin-left: 3.75rem;`                          | Margin solo a la izquierda                                                              |
| `m-[25px]`   | `margin: 25px;`                                  | Margin uniforme con valor personalizado                                                 |
| `m-0`        | `margin: 0;`                                     | Elimina todo el margin                                                                  |
| `mx-auto`    | `margin-left: auto; margin-right: auto;`         | Centra horizontalmente un elemento **de ancho fijo o limitado** dentro de su contenedor |
| `my-auto`    | `margin-top: auto; margin-bottom: auto;`         | Centra verticalmente un elemento dentro de un contenedor flex o grid                    |
| `mt-auto`    | `margin-top: auto;`                              | Empuja el elemento hacia abajo ocupando el espacio disponible                           |
| `mb-auto`    | `margin-bottom: auto;`                           | Empuja el elemento hacia arriba ocupando el espacio disponible                          |

#### Uso de auto para centrar elementos

En Tailwind CSS, el valor auto para margin funciona igual que en CSS:

**Horizontal**:
Con `mx-auto`, si el elemento tiene un ancho definido (w-64, max-w-lg, etc.), se coloca al centro horizontalmente en su contenedor.

```
        <div className="w-64 mx-auto bg-blue-300">Centrado horizontal</div>
```

**Vertical (solo en flex/grid)**:
Con `my-auto`, `mt-auto` o `mb-auto` se puede centrar verticalmente cuando el contenedor es flex o grid.

```
        <div className="flex h-screen">
          <div className="my-auto mx-auto bg-red-300 p-4">Centrado vertical y horizontal</div>
        </div>
```

### space

| Tailwind CSS                      | Equivalente en CSS                                            | ¿Qué hace?                                                                 |
| --------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `space-x-{n}`                     | `> * + * { margin-left: {valor}; }`                           | Aplica un margen **a la izquierda** entre elementos hermanos horizontales. |
| `space-y-{n}`                     | `> * + * { margin-top: {valor}; }`                            | Aplica un margen **arriba** entre elementos hermanos verticales.           |
| `space-x-reverse`                 | Invierte el sentido (`margin-right` en vez de `margin-left`). | Útil cuando se quiere cambiar la dirección visual sin reordenar HTML.      |
| `space-y-reverse`                 | Invierte el sentido (`margin-bottom` en vez de `margin-top`). | Igual que el anterior, pero en el eje vertical.                            |
| `space-x-0`                       | Quita el espacio horizontal (`margin-left: 0;`).              | Elimina separación horizontal.                                             |
| `space-y-0`                       | Quita el espacio vertical (`margin-top: 0;`).                 | Elimina separación vertical.                                               |
| `gap-{n}` _(alternativa moderna)_ | `gap: {valor};`                                               | Espaciado **uniforme** entre filas y columnas (solo en `flex` o `grid`).   |

#### Importante

> - `space-x` y `space-y` funcionan solo en contenedores **flex** o **grid** (porque necesitan hijos directos en un flujo controlado).
> - Si quieres separar elementos en ambos ejes en `grid` o `flex-wrap`, usa `gap-{n}` en lugar de combinar `space-x` y `space-y`.
> - `space-x` y `space-y` no afectan al primer hijo; aplican separación solo a partir del segundo hijo hacia adelante.

### Display

| Tailwind CSS   | Equivalente en CSS       | ¿Qué hace?                                                                                          |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------- |
| `inline`       | `display: inline;`       | Coloca el elemento en línea sin romper el flujo; respeta `width/height` de forma limitada.          |
| `block`        | `display: block;`        | Ocupa todo el ancho disponible y comienza en una nueva línea.                                       |
| `inline-block` | `display: inline-block;` | Similar a `inline`, pero **sí** respeta `width/height` y márgenes verticales.                       |
| `flex`         | `display: flex;`         | Activa Flexbox en el contenedor (ejes, alineación, gaps, etc.).                                     |
| `inline-flex`  | `display: inline-flex;`  | Flexbox pero el contenedor se comporta como un elemento en línea.                                   |
| `grid`         | `display: grid;`         | Activa CSS Grid para layout bidimensional.                                                          |
| `inline-grid`  | `display: inline-grid;`  | Grid con comportamiento en línea.                                                                   |
| `table`        | `display: table;`        | Emula elementos de tabla para layouts tabulares.                                                    |
| `table-row`    | `display: table-row;`    | Fila de tabla.                                                                                      |
| `table-cell`   | `display: table-cell;`   | Celda de tabla (permite alineación vertical tipo tabla).                                            |
| `flow-root`    | `display: flow-root;`    | Crea un nuevo BFC (block formatting context); útil para “limpiar” floats/encerrarlos.               |
| `list-item`    | `display: list-item;`    | Muestra viñetas/markers como en `<li>`.                                                             |
| `contents`     | `display: contents;`     | Hace que el contenedor “desaparezca” en el layout, manteniendo a los hijos (ojo con accesibilidad). |
| `hidden`       | `display: none;`         | Oculta el elemento y lo saca del flujo del documento.                                               |

## BORDER

| Tailwind CSS                                                            | Equivalente en CSS                                                | ¿Qué hace?                                                                                     |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `border`                                                                | `border-width: 1px; border-style: solid;` (color actual)          | Agrega un borde fino sólido usando el color actual (`currentColor`) si no se especifica color. |
| `border-0` / `border` / `border-2` / `border-4` / `border-8`            | `border-width: 0/1/2/4/8px;`                                      | Controla el **grosor** del borde en los 4 lados.                                               |
| `border-[5px]` _(recomendado)_                                          | `border-width: 5px;`                                              | Grosor arbitrario. Úsalo cuando necesitas valores no predefinidos (mejor que `border-5`).      |
| `border-x` / `border-y`                                                 | `border-left-width/right-width` / `border-top-width/bottom-width` | Aplica ancho de borde en eje **horizontal** o **vertical**.                                    |
| `border-t` / `border-r` / `border-b` / `border-l`                       | `border-top/right/bottom/left-width`                              | Controla el ancho por **lado**.                                                                |
| `border-x-4` / `border-y-5` / `border-t-4`…                             | `border-*-width: 4/5px;`                                          | Grosor por eje o lado. Usa arbitrarios: `border-y-[5px]`.                                      |
| `border-amber-400`                                                      | `border-color: #...;`                                             | Define el **color** del borde (paleta de Tailwind).                                            |
| `border-amber-400/50`                                                   | `border-color: rgba(...,0.5);`                                    | Color del borde con **alpha** (opacidad).                                                      |
| `border-x-amber-400` / `border-y-amber-400`                             | `border-*-color: #...;`                                           | Color por eje.                                                                                 |
| `border-t-amber-400` / `border-r-...` / `border-b-...` / `border-l-...` | `border-top/right/bottom/left-color`                              | Color por **lado**.                                                                            |
| `border-solid`                                                          | `border-style: solid;`                                            | Estilo de borde **sólido**.                                                                    |
| `border-dashed`                                                         | `border-style: dashed;`                                           | Estilo de borde **discontinuo**.                                                               |
| `border-dotted`                                                         | `border-style: dotted;`                                           | Estilo de borde **punteado**.                                                                  |
| `border-double`                                                         | `border-style: double;`                                           | Estilo de borde **doble**.                                                                     |
| `border-none`                                                           | `border-style: none;`                                             | **Quita** el borde (manteniendo ancho 0 efectivamente).                                        |
| `[border-style:hidden]` _(arbitrario)_                                  | `border-style: hidden;`                                           | Equivalente a `hidden` en CSS (Tailwind no tiene `border-hidden` nativo).                      |
| `border-transparent` / `border-current` / `border-inherit`              | `border-color: transparent/currentColor/inherit;`                 | Colores semánticos útiles para estados y herencia.                                             |
| `rounded` / `rounded-sm/md/lg/xl/2xl/full`                              | `border-radius: ...;`                                             | **Radio** del borde (es _border-related_ muy usado).                                           |
| `rounded-t/r/b/l-*` / `rounded-tl/tr/br/bl-*`                           | `border-*-radius`                                                 | Radio por lado o esquina específica.                                                           |

#### NOTAS

> - Tailwind por defecto no tiene `border-5`. Para 5px usa arbitrarios: `border-[5px]`, `border-y-[5px]`, `border-t-[5px]`, etc.

## DIVIDE

| Tailwind CSS                            | Equivalente en CSS                                               | ¿Qué hace?                                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `divide-x` / `divide-y`                 | `> * + * { border-left-width: 1px; }` / `border-top-width: 1px;` | Inserta un **borde entre hermanos** (a la izquierda o arriba del siguiente hermano). No afecta al primer hijo. |
| `divide-x-0/2/4/8` / `divide-y-0/2/4/8` | `border-left/top-width: 0/2/4/8px;`                              | Controla el **grosor** del divisor. Para valores no estándar: `divide-x-[10px]`.                               |
| `divide-x-reverse` / `divide-y-reverse` | Invierte a `border-right-width` / `border-bottom-width`          | Cambia el lado donde se pinta el divisor (derecha o abajo).                                                    |
| `divide-amber-400`                      | `border-color: #...;`                                            | **Color** del divisor.                                                                                         |
| `divide-amber-400/50`                   | `border-color: rgba(...,0.5);`                                   | Color del divisor con **opacidad**.                                                                            |
| `divide-solid`                          | `border-style: solid;`                                           | Estilo del divisor **sólido**.                                                                                 |
| `divide-dashed`                         | `border-style: dashed;`                                          | Estilo del divisor **discontinuo**.                                                                            |
| `divide-dotted`                         | `border-style: dotted;`                                          | Estilo del divisor **punteado**.                                                                               |
| `divide-double`                         | `border-style: double;`                                          | Estilo del divisor **doble**.                                                                                  |
| `divide-none`                           | `border-style: none;`                                            | **Elimina** divisores entre hijos.                                                                             |

### TIPS

> - [width](https://tailwindcss.com/docs/width)
> - [height](https://tailwindcss.com/docs/height)
>   > - Para definir el height en porcentajes el padre debe tener un height
> - [padding](https://tailwindcss.com/docs/padding)
> - [margin](https://tailwindcss.com/docs/margin)
> - [display](https://tailwindcss.com/docs/display)

[COLORES](./03-text.md) || [FLEX BOX](./05-flex-box.md)
