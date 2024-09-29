# Computo Peru

La mejor plataforma para comprar productos online y irl. La plataforma da las herramientas para
que los usuarios puedan ingresar y explorar en la sección productos lo que pueden solicitar/comprar
— Con la funcionalidad del carrito —.

La plataforma sera minimalista y tendra un diseño directo al grano para que todos los usuarios
puedan concentrarse mas en comprar sus productos que preocuparse en donde estan lo que necesitan
hacer para comprar, seleccionar, etc.

## Paginas

Seccion con información para el desarrollo del proyecto (solo paginas) que habran en el proyecto.

| Paginas                 | Path                           | Descripción                                                                                                                                |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Inicio                  | /                              | Pagina principal de la plataforma, destaca el contenido que habra en esta y sera la que mas resaltara en diseño en comparación a las otras |
| Quienes somos           | /quienes-somos                 | Pagina que sera especificamente para contar sobre la empresa/plataforma y la mision que tiene.                                             |
| Productos               | /productos                     | Pagina dedicada para los productos disponibles en la pagina.                                                                               |
| Productos con categoria | /productos?category={category} | Query de la Pagina para ver resultados segun categorias.                                                                                   |
| Soporte                 | /soporte                       | Pagina donde habra contenido de soporte al cliente como: Devoluciones, preguntas frecuentes, etc.                                          |
| Carrito                 | /shopping-card & /carrito      | Pagina para ver los productos que estas por comprar.                                                                                       |

---

Tabla del estado del desarrollo de las paginas.

| Pagina                  | ✅  | 🔥  | ❌  |
| ----------------------- | --- | --- | --- |
| Inicio                  |     |     |     |
| Quienes somos           |     |     |     |
| Productos               |     |     |     |
| Productos con categoria |     |     |     |
| Soporte                 |     |     |     |
| Carrito                 |     |     |     |

## Componentes

Estados de los componentes en desarrollo.

- En diseño
- Inicial
- Error
- En proceso
- Terminado

| Componente       | Estado    |
| ---------------- | --------- |
| Button           | En diseño |
| Badge            | En diseño |
| Input (Search)   | En diseño |
| Contador animado | En diseño |
| Product Card     | En diseño |

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
