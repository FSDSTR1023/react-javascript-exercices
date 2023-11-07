/* 
Método filter()
Crea una lista que muestre solo los números pares 
de un array utilizando el método filter()
*/

export const MetodoFilter = () => {
  const numeros = [1, 2, 3, 4, 5];

  const numerosPares = numeros.filter(number => number % 2 == 0);
  return (
    <>
      {numerosPares.map((number, i) => (
        <li key={i}>{number}</li>
      ))}
    </>
  );
};
