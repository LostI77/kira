# UI

Una estructura clara y escalable para organizar los componentes de acuerdo a su función, reutilización y nivel de complejidad.

Aqui una forma de visualizar la estructura de carpetas:

```
└── 📁ui
    ├── 📁animations
    │   └── text-counter.tsx
    ├── 📁components
    │   └── badge.tsx
    │   └── button.tsx
    │   └── input.tsx
    ├── 📁composites
    │   └── product-card.tsx
    │   └── user-profile.tsx
    ├── 📁layout
    │   └── header.tsx
    │   └── footer.tsx
    ├── 📁sections
    │   └── hero.tsx
    │   └── features.tsx
    └── 📁containers
        └── product-page.tsx
        └── dashboard.tsx
```

## Desglose

- animations: Componentes que envuelven otros (opcional) para añadir animaciones sin alterar el componente que estamos usando o usar uno propio que aplica la animación.

- components: Componentes pequeños y reutilizables como botones, badges, inputs, etc.

- composites: Componentes más complejos que son una combinación de otros más pequeños, como un product-card o un user-profile.

- layout: Componentes que manejan el diseño general de la página como header, footer, o sidebar.

- sections: Componentes que representan secciones de una página, como un hero, una sección de características o de testimonios.

- containers: Componentes que organizan secciones enteras o páginas completas, como un product-page o un dashboard.
