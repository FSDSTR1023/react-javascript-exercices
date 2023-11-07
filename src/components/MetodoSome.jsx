/* 
Método some()
Verifica si alguno de los elementos de un array 
es mayor que 10 utilizando el método some().
*/

export const MetodoSome = () => {
  const numeros = [5, 10, 15, 20];

  return (
    <>
      {numeros.some(number => number > 10) ? 'Hay números mayores de 10' : 'No hay mayores de 10'}
    </>
  );
};

