## RESPONSIVE

| Prefijo      | Media Query en CSS                                  | Móvil / Desktop First | Descripción                                                               |
| ------------ | --------------------------------------------------- | --------------------- | ------------------------------------------------------------------------- |
| `sm:`        | `@media (min-width: 640px)`                         | **Mobile First**      | Aplica estilos en pantallas ≥ 640px (tablets pequeñas y en adelante).     |
| `md:`        | `@media (min-width: 768px)`                         | **Mobile First**      | Aplica estilos en pantallas ≥ 768px (tablets grandes y laptops pequeños). |
| `lg:`        | `@media (min-width: 1024px)`                        | **Mobile First**      | Aplica estilos en pantallas ≥ 1024px (laptops y escritorios).             |
| `xl:`        | `@media (min-width: 1280px)`                        | **Mobile First**      | Aplica estilos en pantallas ≥ 1280px (pantallas grandes).                 |
| `2xl:`       | `@media (min-width: 1536px)`                        | **Mobile First**      | Aplica estilos en pantallas muy grandes (monitores 4K).                   |
| `max-sm:`    | `@media (max-width: 639px)`                         | **Desktop First**     | Aplica estilos en pantallas **menores** a 640px (móviles).                |
| `max-md:`    | `@media (max-width: 767px)`                         | **Desktop First**     | Aplica estilos en pantallas **menores** a 768px (tablets y móviles).      |
| `max-lg:`    | `@media (max-width: 1023px)`                        | **Desktop First**     | Aplica estilos en pantallas **menores** a 1024px (tablets y móviles).     |
| `max-xl:`    | `@media (max-width: 1279px)`                        | **Desktop First**     | Aplica estilos en pantallas **menores** a 1280px.                         |
| `max-2xl:`   | `@media (max-width: 1535px)`                        | **Desktop First**     | Aplica estilos en pantallas **menores** a 1536px.                         |
| `sm:max-lg:` | `@media (min-width: 640px) and (max-width: 1023px)` | Rango específico      | Aplica entre 640px y 1023px.                                              |
| `md:max-xl:` | `@media (min-width: 768px) and (max-width: 1279px)` | Rango específico      | Aplica entre 768px y 1279px.                                              |

#### Ejemplo Mobile First

```
    <div class="bg-blue-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400">
      Contenido adaptable
    </div>
```

- **Móvil** (<640px) → Azul.
- **Tablet pequeña** (≥640px) → Rojo.
- **Tablet grande** (≥768px) → Verde.
- **Escritorio** (≥1024px) → Amarillo.

#### Ejemplo Desktop First

```
    <div class="bg-yellow-400 max-lg:bg-red-400 max-md:bg-green-400 max-sm:bg-blue-400">
      Contenido adaptable
    </div>
```

- **Escritorio grande** → Amarillo.
- **≤1023px** → Rojo.
- **≤767px** → Verde.
- **≤639px** → Azul.

### TIPS

> - [Breakpoints](https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints)

[FLEXBOX](./05-flex-box.md) || [PSEUDOCLASES](./07-pseudoclases.md)
