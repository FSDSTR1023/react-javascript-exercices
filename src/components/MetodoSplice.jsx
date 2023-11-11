/* 
Método splice()
Elimina 2 elementos a partir del índice 3 de un array y 
muestra el array modificado utilizando el método splice().
*/

export const MetodoSplice = () => {
  const numeros = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <ul>
        {numeros.splice(3, 2).map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </>
  );
};
