## Instalar
### [Vite](https://es.vite.dev/guide/)
```
        npm create vite@latest
        │
        ◇  Project name:
        │  tailwind-css
        ◆  Select a framework:
        │  ○ Vanilla
        │  ○ Vue
        │  ● React
        │  ○ Preact
        │  ○ Lit
        │  ○ Svelte
        │  ○ Solid
        │  ○ Qwik
        │  ○ Angular
        │  ○ Marko
        │  ○ Others
        ◆  Select a variant:
        │  ● TypeScript
        │  ○ TypeScript + SWC
        │  ○ JavaScript
        │  ○ JavaScript + SWC
        │  ○ React Router v7 ↗
        │  ○ TanStack Router ↗
        │  ○ RedwoodSDK ↗
        │  ○ RSC ↗        

        cd tailwind-css
        npm install    
        npm run dev 
```
### [Tailwind](https://tailwindcss.com/docs/installation/using-vite)
>- Instalar
```
        npm install tailwindcss @tailwindcss/vite
```
>- Editar [vite.config.ts](./tailwind-css/vite.config.ts)
```
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
          plugins: [
            react(),
            tailwindcss()
          ],
        })
```
>- Importar en el archivo [CSS raiz](./tailwind-css/src/index.css) ```tailwind```
```
        @import "tailwindcss";
```


[INICIO](./README.md) || [COLORES](./02-colores.md)