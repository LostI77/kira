# Componente Input

Crea el componente input con los siguientes detalles de estilo:

```css
.input {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  heigth: 36px;
  background-color: #0e0e0e;
  border-radius: 8px;
  padding: 12px 6px;
  gap: 4px;
  /*
    padding-y: 12px;
    padding-x: 6px;
  */
}

.input-icon {
  width: 24px;
  heigth: 24px;
  color: #fff;
  opacity: 0.8;
}

.input-text {
  font-weigth: 300;
  font-size: 16px;
  color: #fff;
  opacity: 0.8;
}
```

La estructura que se espera del componente para su uso es el siguiente:

- Admita un children — osea un `ReactNode` —.
- Crear variantes de estilo con los diseños usados en el wireframe — Ahora solo existe uno —.
- Que admita las props de un input.

```tsx
import { Input, InputIcon, InputText } from "@/ui/components/input";

const Example = () => {
  return (
    <section>
      <div>
        {/* Idea opcional */}
        <Input>
          <InputIcon />
          <InputText />
        </Input>
      </div>
      <div>
        {/* Idea */}
        <Input props={props} />
      </div>
    </section>
  );
};
```
