## Compuestos Shopping Item

Crea un compuesto shopping item con los siguientes estilos
adaptados a las sintaxis de tailwind css:

```css
.shopping-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 12px 24px;
  gap: 12px;
}

.shopping-item__image {
  width: 210px;
  height: 196px;
  object-fit: cover;
}

.shopping-item__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 710px; /* 100% */
  height: 196px;
  padding: 0px;
  gap: 12px;
}

.shopping-item__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
}

.shopping-item__title {
  font-family: "Jura";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000;
}

.shopping-item__icon {
  width: 28px;
  height: 28px;
}

.shopping-item__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0px;
  gap: 12px;
}

.shopping-item__price-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
}

.shopping-item__price-text {
  font-family: "Jura";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000;
}

.shopping-item__quantity-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}

.shopping-item__quantity-label {
  font-family: "Jura";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000;
}

.shopping-item__quantity-buttons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 26px;
}

.shopping-item__button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #0e0e0e;
  border-radius: 6px 0px 0px 6px;
  padding: 0px;
}

.shopping-item__total-price {
  font-family: "Jura";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000;
}

/* Small Button */
```

La estructura del componente debe considerar lo siguiente:

- Admitir props de **HTMLDivElement** o de una etiqueta **article**
- Debe contener **Accesibilidad**
- No se admite children
- Que admita una lista de props

| Prop          | Description                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| productImage  | Incluye un objecto con la informacion de la imagen a mostrar (esta prop incluye los atributos de un elemento img) |
| productName   | Nombre completo del producto a mostrar                                                                            |
| productPrice  | Incluye el monto normal del producto a comprar                                                                    |
| productAmount | El monto/cantidad a comprar del producto                                                                          |
| buyProduct    | funcion void que obtiene el información del producto para procesar su compra                                      |
| removeProduct | funcion void que obtiene información del producto para removerlo del carrito de compras                           |

```tsx
import { ShoppingItem } from "@/ui/composites/shopping-item";

const Example = () => {
  return (
    <section>
      <ShoppingItem>
        <ShoppingItem.Image {...imageProps} />
        <ShoppingItem.Details>
          <ShoppingItem.Header>
            <ShoppingItem.Title>Product Name Here</ShoppingItem.Title>
            <ShoppingItem.RemoveButton {...closeButtonProps} />
          </ShoppingItem.Header>
          <ShoppingItem.Content>
            <ShoppingItem.Content>
              <ShoppingItem.Price>S/. 2600</ShoppingItem.Price>
              <ShoppingItem.QuantityControls>
                <ShoppingItem.QuantityLabel>
                  Cantidad: 1
                </ShoppingItem.QuantityLabel>
                <ShoppingItem.QuantityButtons>
                  <ShoppingItem.Button> </ShoppingItem.Button>
                  <ShoppingItem.Button> </ShoppingItem.Button>
                </ShoppingItem.QuantityButtons>
              </ShoppingItem.QuantityControls>
            </ShoppingItem.Content>
            <ShoppingItem.Price>Final Price: S/. 5600</ShoppingItem.Price>
            <Button variant="dark">Comprar</Button>
          </ShoppingItem.Content>
        </ShoppingItem.Details>
      </ShoppingItem>
    </section>
  );
};
```
