/* 
Método splice()
Utiliza el método forEach() para sumar todos 
los elementos de un array y mostrar el resultado.
*/

export const MetodoForEach = () => {
  const numeros = [1, 2, 3, 4, 5];
  let sum = 0;
  
  return (
    <>
    {numeros.forEach(numero => sum += numero)}
      <p>{sum}</p>
    </>
  );
};
