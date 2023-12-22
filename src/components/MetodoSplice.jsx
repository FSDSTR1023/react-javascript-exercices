/* 
Método splice()
Elimina 2 elementos a partir del índice 3 de un array y 
muestra el array modificado utilizando el método splice().
*/

export const MetodoSplice = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

const elementosEliminados = numeros.splice(3, 2);

  return (
    <>
       <p>Elementos eliminados: {elementosEliminados.join(', ')}</p>
      <p>Array modificado: {numeros.join(', ')}</p>
    </>
  );
};
