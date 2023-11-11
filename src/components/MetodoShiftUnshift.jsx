/* 
Método shift() y unshift():
Elimina el primer elemento de un array con shift() y 
luego agrega un elemento al inicio con unshift(), 
mostrando el resultado en una lista.
*/

export const MetodoShiftUnshift = () => {
  const numeros = [0, 1, 2, 3, 4];
  numeros.shift()
  numeros.unshift(10)
  // Eliminar el primer elemento
  // Escribe código

  // Agregar un elemento al inicio
  // Escribe código

  return (
    <>
      <ul>
        {numeros.map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </>
  );
};

