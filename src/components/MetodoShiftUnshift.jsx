/* 
Método shift() y unshift():
Elimina el primer elemento de un array con shift() y 
luego agrega un elemento al inicio con unshift(), 
mostrando el resultado en una lista.
*/

export const MetodoShiftUnshift = () => {
  const numeros = [0, 1, 2, 3, 4];

  // Eliminar el primer elemento
  // Escribe código
  numeros.shift ();
  // Agregar un elemento al inicio
  // Escribe código
numeros. unshift(0);
  return (
<p> {numeros.map((num, index) =>(
    <span key = {index}> {num} </span>
  ))}
</p>
  );
};

