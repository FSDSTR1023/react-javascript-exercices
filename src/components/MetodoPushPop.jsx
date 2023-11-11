/* 
Método push() y pop()
Agrega un elemento al final de un array con push() 
y luego elimina un elemento del final con pop(), 
mostrando el resultado en una lista.
*/

export const MetodoPushPop = () => {
  const numeros = [1, 2, 3, 4];
  numeros.push(5)
  numeros.pop()

  // Agregar un elemento
  // Escribe código

  // Eliminar el último elemento
  // Escribe código

  return (
    <>
      <ul>
        {numeros.map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </>
  );
};
