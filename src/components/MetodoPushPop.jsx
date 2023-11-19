/* 
Método push() y pop()
Agrega un elemento al final de un array con push() 
y luego elimina un elemento del final con pop(), 
mostrando el resultado en una lista.
*/

export const MetodoPushPop = () => {
  const numeros = [1, 2, 3, 4];

  // Agregar un elemento
  // Escribe código
  numeros.push (5);
  // Eliminar el último elemento
  // Escribe código
  numeros.pop ();
  return (
<p> {numeros.map((num, index) =>(
    <span key = {index}>{num} </span>
  ))}
</p>
  );
};
