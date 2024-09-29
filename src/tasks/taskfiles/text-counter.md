# Animation Component Text Counter

Crea el componente text-counter, la idea es la siguiente. El componente reemplazara
la creación de un texto y permitira las siguientes props:

- initial => number
- max => number
- format => "K" | "Mil" | "Millon" | "Billon"

```tsx Example
import { TextCounter } from "@/ui/animations/text-counter";

const Example = () => {
  return (
    <div>
      <TextCounter initial={0} max={45} format={"Mil"} />
      <TextCounter initial={25} max={154} format={"Millon"} />
    </div>
  );
};
```
