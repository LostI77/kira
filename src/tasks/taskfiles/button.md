# Componente Button

Crea el componente button con los siguientes detalles de estilo:

```css
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto; /* opcional */
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  color: #0e0e0e;
  border-radius: 9999px;
  padding: 14px 8px;
  /*
    padding-y: 14px;
    padding-x: 8px;
  */
  gap: 4px;
}

/* ... variants here */
```

La estructura que se espera del componente para su uso es el siguiente:

- Admita un children — osea un `ReactNode` —.
- Crear variantes de estilo con los diseños usados en el wireframe.
- Que admita las props de un button normal.

```tsx Example
import { Badge } from "@/ui/components/badge";

const Example = () => {
  return (
    <section>
      <div>
        <Button>Example</Button>
        <Button>Example Two</Button>
      </div>
      <div>
        <Link>
          <Button>Example Two</Button>
        </Link>
      </div>
      {/* ..y otros usos mas */}
    </section>
  );
};
```
