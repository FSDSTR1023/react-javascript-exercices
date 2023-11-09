/* 
Método reduce()
Calcula la suma de un array de números utilizando el método reduce().
*/

export const MetodoReduce = () => {
  const numeros = [1, 2, 3, 4, 5];

  return (
    <>
      Suma: {numeros.reduce((number, resultado)=>number+resultado)}
    </>
  );
};
