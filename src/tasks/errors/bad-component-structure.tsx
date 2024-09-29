import React from "react"; // <- Opcional, si no lo usas es innecesario.

/*
    El nombre de los componentes tiene se espera que sea el mismo que el archivo
    pero cumpliendo las reglas de nombres en javascript.

    El nombre únicamente puede incluir letras, dígitos, o los símbolos "$"" y "_".
    El primer carácter no puede ser un dígito.

    Lista de nombres correctos de ejemplo:

    let userName; ✅
    let test123; ✅

    let Test_Example;
    let USERNAME;
    let DATA_KEY;
    let DATABASE_CONNECTION_API_KEY;

    let $ = 1; // Declara una variable con el nombre "$" ✅
    let _ = 2; // y ahora una variable con el nombre "_" ✅


    Las letras que no son del alfabeto inglés están permitidas, pero no se recomiendan
    ya que acomplejara elevadamente el entendimiento del codigo.

    let имя = '...'; ✅
    let 我 = '...'; ✅

    Lista de ejemplos de como no nombrar variables:

    num = 5; // Siempre usa las palabras claves para declarar variables (let, var, const); ❌

    let let = 5; // No uses palabras reservadas del lenguaje como let, function, return, etc. ❌

    let bad-component-structure; // No se pueden declarar variables con guiones de por medio ❌


    REFERENCIA DE GRAMATICA BASICA Y PALABRAS CLAVE DE JAVASCRIPT:

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
*/

// const bad-component-structure = () => {
//   return (
//     <div>bad-component-structure</div>
//   )
// }
//
// export default bad-component-structure

/*
    Podemos declarar variables para almacenar datos al utilizar las palabra clave var, let, o const.

    let – es la forma moderna de declaración de una variable.

    var – es la declaración de variable de vieja escuela. Normalmente no lo utilizamos en absoluto.
    Cubriremos sus sutiles diferencias con let en el capítulo La vieja "var", por si lo necesitaras.

    const – es como let, pero el valor de la variable no puede ser alterado.
*/

// Componente escrito de forma correcta:

const BadComponentStructure = () => {
  // Logica del componente reutilizable que se usa solamente dentro de este.

  // Sección de retorno de HTML del componente
  return (
    <>
      {/*
                dentro del return del componente no hay problema en usar nombres, textos etc
                con guiones siempre y cuando sea un texto que se mostrara en el componente.
            */}
      <div>bad-component-structure</div>
    </>
  );
};
