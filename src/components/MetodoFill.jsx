/* 
Método fill()
Rellena un array con el número 0 y 
muestra el resultado utilizando el método fill().
*/

export const MetodoFill = () => {
  const numeros = [0, 1, 2, 3, 4, 5];

const arrayRelleando = numeros.fill(0)

  return (
    <>
     El array {arrayRelleando.join(', ')}
    </>
  );
};
