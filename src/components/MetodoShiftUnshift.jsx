/* 
Método shift() y unshift():
Elimina el primer elemento de un array con shift() y 
luego agrega un elemento al inicio con unshift(), 
mostrando el resultado en una lista.
*/

export const MetodoShiftUnshift = () => {
  const numeros = [0, 1, 2, 3, 4];

  // Eliminar el primer elemento
  numeros.shift();

  // Agregar un elemento al inicio
  numeros.unshift(-1);


  return (
    <>
    <h2>Array modificado:</h2>
      {numeros.join(', ')} 
    </>
  );
};

