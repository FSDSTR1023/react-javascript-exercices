/* 
Método every()
Verifica si todos los elementos de un array son 
mayores que 10 utilizando el método every().
*/

export const MetodoEvery = () => {
  const numeros = [5, 11, 12, 13, 14];

  return (
    <p> {numeros.every (num => num > 10) ? 
'Sí, todos los números son mayores que 10.' : 'No, no todos los números son mayores que 10.'
    }</p>
  );
};

