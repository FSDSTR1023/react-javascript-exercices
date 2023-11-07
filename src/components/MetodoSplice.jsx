/* 
Método splice()
Elimina 2 elementos a partir del índice 3 de un array y 
muestra el array modificado utilizando el método splice().
*/

export const MetodoSplice = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  const numEliminado = numeros.splice(3, 2)

  return (
    <>
      <p>{numeros.join(', ')}</p>
    </>
  );
};
