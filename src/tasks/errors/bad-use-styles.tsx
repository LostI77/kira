// Llamamos a la funcion para estilar los componentes con variantes
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
    cva(param1, param2) espera una base de estilos default en el primer parametro
    en el segundo espera un objecto donde se configuraran las variantes a usar
    en el componente.

    // examples:
    cva("", {});
    cva(["", "", ""], {});

    Puede usar un texto con los estilos definidos o usar un array y especificar
    cada estilo por separado.

    El objecto de configuración tiene la siguiente estructura:

    cva("", {
        variants: {
            variant: {
                small: "";
                medium: "";
                high: "";
            }
        },
        defaultVariants: {
            variant: "small"; //<- valor por defecto el small, los estilos de small
                              // se usaran automaticamente siempre y cuando la variante no se
                              // especifique
        }
    });
*/

// Se espera un nombre descriptivo con las variantes
// ningun nombre que no sea descriptivo con el componente
// por favor omitanlo.

// Ejemplo de como no declarar variantes:
// const x = cva("", {
//   variants: {
//     variant: {
//       dark: "",
//       light: "",
//       red: "",
//     },
//     defaultVariants: {
//       variant: "dark",
//     },
//   },
//   defaultVariants: {
//     variant: "dark",
//   },
// });

// Puedes definirlo en Camel case o Pascal case, preferiblemente camel case.
const BadUseStylesVariants = cva("", {
  variants: {
    variant: {
      dark: "",
      light: "",
      red: "",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

// Este "type" es algo nativo de typescript que nos ayudara la hora de definir lo que esperamos
// obtener de props del componente. Aqui le estamos diciendo que en las props podremos obtener
// las variantes definidas

type BadUseStylesProps = VariantProps<typeof BadUseStylesVariants>;

// Aqui llamamos a la variante para usarla.

const BadUseStyles = ({ variant }: BadUseStylesProps) => {
  return (
    <>
      {/* De esta forma podran aplicarse las variantes con sus estilos */}
      <div className={cn(BadUseStylesVariants({ variant }))}>
        bad-use-styles
      </div>
    </>
  );
};

export default BadUseStyles;
