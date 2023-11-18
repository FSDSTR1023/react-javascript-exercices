/* 
Método push() y pop()
Agrega un elemento al final de un array con push() 
y luego elimina un elemento del final con pop(), 
mostrando el resultado en una lista.
*/

export const MetodoPushPop = () => {
  const numeros = [1, 2, 3, 4];

  // Agregar un elemento
  numeros.push(6);

  // Eliminar el último elemento
  numeros.pop();

  return (
    <>
      <h2>Array después de agregar y eliminar:</h2>
      {numeros.join(', ')} 
    </>
  );
};
