# Componente Badge

Crea el componente badge con los siguientes detalles de estilo:

```css
.badge {
    width: auto
    height: 22px
    padding: 4px 8px;
    /*
    padding-y: 4px;
    padding-x: 8px;
    */
    border-radius: 20px;
    background-color: #0E0E0E; /* 90% */
    color: #FFFFFF; /* 80% */
    font-weight: 300;
    font-size: 12px;
}

.badge:hover {
    /*
    hover -> background-color: #0E0E0E; 100%
    hover -> color: #FFFFFF; 100%
    */
    background-color: #0E0E0E;
    color: #FFFFFF;
}
```

La estructura que se espera del componente para su uso es el siguiente:

- Admita un children — osea un `ReactNode` —.
- Crear variantes de estilo con otros colores o usos — Esto es opcional —.
- Admita props de un elemento div normal.

```tsx Example
import { Badge } from "@/ui/components/badge";

const Example = () => {
  return (
    <section>
      <div>
        <Badge>Example</Badge>
        <Badge>Example Two</Badge>
      </div>
      <div>
        <Link>
          <Badge>Example Two</Badge>
        </Link>
      </div>
      {/* ..y otros usos mas */}
    </section>
  );
};
```

- Lost
