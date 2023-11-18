/* 
Método splice()
Utiliza el método forEach() para sumar todos 
los elementos de un array y mostrar el resultado.
*/

export const MetodoForEach = () => {
  const numeros = [1, 2, 3, 4, 5];
  let suma = 0;

  numeros.forEach((numero) => {
    suma += numero;
  });
  return (
    <>
      <h2>A sumar</h2>
      <p>  {numeros.join(', ')}</p>
      <h2>Resultado de la suma:</h2>
      <p>{suma}</p>
    </>
  );
};
