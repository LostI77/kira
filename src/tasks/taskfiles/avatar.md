# Component Avatar

Crea el componente avatar con los siguientes detalles de estilo:

```css
.avatar {
  width: 26px;
  heigth: 26px;
  background-color: #0e0e0e;
  border-radius: 9999px;
  object-fit: cover;
}
```

> El componente sera una imagen que tendra como props las propiedades de un
> elemento **HTMLImageElement** y las **variantes** de estilo (si es que hay).

La estructura que se espera del componente para su uso es el siguiente:

- Admita props de **HTMLImageElement** y **VariantProps**.
- Ser accesible.

```tsx
import { Avatar } from "@/ui/components/avatar";

const Example = () => {
  return (
    <article>
      <div> {contenido aqui} </div>
      <div>
        <Avatar
            variant={""}
            src={""}
            alt={""}
            {...otherProps}
        />
      </div>
    </article>
  );
};
```

- Lost
