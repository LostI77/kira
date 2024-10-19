# Composite Testimonial Card

Crea el componente testimonial card con los siguientes detalles de estilo
adaptados a la sintaxis de tailwind css.

```css
.testimonial-card {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 440px;
  height: 320px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 64px;
  gap: 12px;
}

.testimonial-card--message {
  font-family: "Jura";
  font-weight: 400;
  font-size: 20px;
}

.testimonial-card--author {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  margin: 0;
  padding: 24px 0;
  gap: 4px;
}

/* Avatar component */

.testimonial-card--author-data {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: ; /* se espera alguno de estos. -> auto | max-content | none */
  height: 100%;
  background: transparent;
}

.testimonial-card--author-data-name {
  font-family: "Jura";
  font-weight: 400;
  font-size: 12px;
}

.testimonial-card--author-data-role {
  font-family: "Jura";
  font-weight: 300;
  font-size: 10px;
}
```

La estructura del componente para su debido uso debe considerar lo siguiente:

- Admitir props de **HTMLDivElement**, **VariantsProps** y **Accesibilidad**.
- Los detalles del autor deben ser accesibles.
- No se admitira chidlren
- Que admita la lista de props

| Prop               | Descripcion                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| message            | El mensaje es muy importante ya que es el testimonio author                         |
| author             | Es un objecto que representa los datos que se esperan del author del testimonio     |
| **HTMLDivElement** | Son un conjunto de props del elemento div del html                                  |
| **VariantsProps**  | Son un conjunto de props que ayudaran a definir variantes de estilos del componente |

```tsx
import { TestimonialCard } from "@/ui/composites/testimonial-card";

type Author = {
  name: string;
  role: string;
};

const Example = () => {
  const authorData: Author = {
    name: "Losti",
    role: "Full-Stack Developer",
  };
  return (
    <section>
      <TestimonialCard
        message={"Example message"}
        author={authorData}
        {...props}
      />
    </section>
  );
};
```

- Lost
