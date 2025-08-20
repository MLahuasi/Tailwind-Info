## PERSONALIZAR TAILWIND

| Prefijo / Token             | Media Query en CSS / Propiedad base               | Móvil / Desktop First | Descripción                                                                                                                                  |
| --------------------------- | ------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `@theme { --font-* }`       | `font-family: var(--font-…)`                      | N/A                   | Define **fuentes personalizadas** reutilizables en todo el proyecto.                                                                         |
| `@theme { --color-* }`      | `color: … / background-color: …`                  | N/A                   | Define **colores globales** (ej: `--color-principal-pagina`) que se aplican con utilidades (`bg-[var(--color-…)]`, `text-[var(--color-…)]`). |
| `@theme { --spacing-* }`    | `margin/padding: …rem`                            | N/A                   | Permite definir **espaciados** personalizados que se usan con `m-*`, `p-*`.                                                                  |
| `@theme { --radius-* }`     | `border-radius: …`                                | N/A                   | Define radios personalizados (ej: `--radius-card: 1rem;` → `rounded-[var(--radius-card)]`).                                                  |
| `@theme { --breakpoint-* }` | `@media (min-width: …rem)`                        | Mobile First          | Breakpoints personalizados (ej: `--breakpoint-md`, `--breakpoint-custom-bp-800`). Se convierten en prefijos (`md:`, `custom-bp-800:`).       |
| `@theme { --container-* }`  | `max-width: …rem`                                 | N/A                   | Define anchos máximos para **contenedores** (`container`).                                                                                   |
| `:root { --icono-* }`       | `--var: url("…svg")`                              | N/A                   | Variables globales con rutas de íconos SVG. Útiles para `mask`/`background-image`.                                                           |
| `:root { --hero-img }`      | `background-image: linear-gradient(), url(...)`   | N/A                   | Variables globales para **fondos complejos** (ej. imágenes de héroe con gradiente).                                                          |
| `@layer base`               | Reglas globales de `html`, `body`, tipografía     | N/A                   | Permite sobrescribir estilos base de navegadores (ej: color, tipografía).                                                                    |
| `@layer components`         | Clases semánticas (`.btn`, `.card`, `.icon-menu`) | N/A                   | Define **componentes reutilizables** con `@apply` o CSS extendido.                                                                           |
| `@layer utilities`          | `.text-shadow`, `.bg-grid`                        | N/A                   | Define **utilidades personalizadas** que se comportan como las de Tailwind.                                                                  |
| `.icon-menu`                | `mask: var(--icono-menu-abierto)`                 | N/A                   | Ejemplo de componente: ícono hamburguesa, coloreado con `currentColor`.                                                                      |
| `.icon-menu:has(:checked)`  | `mask: var(--icono-menu-cerrado)`                 | N/A                   | Variante de estado: cambia de hamburguesa a X solo con CSS.                                                                                  |
| `dark:`                     | `@media (prefers-color-scheme: dark)`             | Desktop First         | Activa variantes para **modo oscuro** (ej: `dark:bg-black`).                                                                                 |
| `motion-safe:`              | `@media (prefers-reduced-motion: no-preference)`  | Desktop First         | Solo aplica animaciones si el usuario no pide reducción de movimiento.                                                                       |
| `motion-reduce:`            | `@media (prefers-reduced-motion: reduce)`         | Desktop First         | Reduce / elimina animaciones si el usuario lo solicita.                                                                                      |
| `print:`                    | `@media print`                                    | N/A                   | Estilos solo al imprimir.                                                                                                                    |
| `supports-[prop:val]:`      | `@supports (…)`                                   | N/A                   | Aplica reglas si el navegador soporta una propiedad (ej: `supports-[display:grid]:grid`).                                                    |

### TIPS

[PSEUDOCLASES](./07-pseudoclases.md) || [](./10-.md)
