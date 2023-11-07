/* 
Método reverse()
Elimina 2 elementos a partir del índice 3 de un array y 
muestra el array modificado utilizando el método reverse().
*/

import { list } from "postcss";

export const MetodoReverse = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
    {/* <ul>
      {numeros.reverse().map((num, index) => <li key={index}>{num}</li>)}
    </ul>
    la solución en el pdf no elimina ningún número del array */} 

      <p>Números eliminados: {numeros.splice(3, 2).join(', ')}</p>
      <p>Array modificado: {numeros.reverse().join(', ')}</p>

      
    </>
  );
};
