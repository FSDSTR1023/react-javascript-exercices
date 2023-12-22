/* 
Método push() y pop()
Agrega un elemento al final de un array con push() 
y luego elimina un elemento del final con pop(), 
mostrando el resultado en una lista.
*/

export const MetodoPushPop = () => {
  const numeros = [1, 2, 3, 4];

  const agregar = 5
  numeros.push(agregar)

  const Eliminar= numeros.pop()
  return (
    <>
      <p>Elemento agreagado con push(): {numeros.join(', ')}</p>
      <p>Subject terminated with pop(): {Eliminar}</p>
    </>
  );
};
