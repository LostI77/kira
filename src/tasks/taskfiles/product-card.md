# Component Product Card

Crea el componente product card con los siguientes detalles de estilo:

```css
.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 330px;
  heigth: 385px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  margin: 0px;
  padding: 0px;
  gap: 0px;
}

.product-card--image {
  width: 100%;
  heigth: 250px;
  object-fit: cover;
}

.product-card--content {
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 135px;
  margin: 0px;
  padding: 12px 6px;
  gap: 6px;
}

.product-card--wrapper-button {
  width: 100%;
  heigth: 64px;
  padding: 12px 0px;
}
```

La estructura del componente para su uso debes tener en consideranción lo siguiente:

- Admita props para el dinamismo del contenido - Atributos de imagen, titulo, precio, texto para el boton y el evento del boton con detalles para registrar el producto en el carrito —

```tsx
import { ProductCard } from "@/ui/composites/product-card";

const Example = () => {
  return (
    <section>
      <ProductCard
        image={{ src, alt, ...imageProps }}
        title={"Example Title"}
        price={"S/ 1568.00"}
        button={{
          text,
          event,
        }}
      />
    </section>
  );
};
```

- Lost
