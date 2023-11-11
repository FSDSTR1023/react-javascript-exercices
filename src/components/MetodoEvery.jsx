/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [11, 12, 13, 14];

  return (
    <>
      <p>{numeros.every(num => num > 10) ? 'Todos los numeros son mayores' : 'No son mayores'}</p>
    </>
  );
};

