/* 
Método reverse()
Elimina 2 elementos a partir del índice 3 de un array y 
muestra el array modificado utilizando el método reverse().
*/

export const MetodoReverse = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  numeros.splice(3,2)

  const arrayModificado = numeros.reverse ();
  return (
    <>
      Array modificado: {arrayModificado.join(', ')}
    </>
  );
};
