/* 
Método reduce()
Calcula la suma de un array de números utilizando el método reduce().
*/

export const MetodoReduce = () => {
  const numeros = [1, 2, 3, 4, 5];
  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

  return (
    <>
      <h2>Resultado de la suma:</h2>
      <p>{suma}</p>
    </>
  );
};
