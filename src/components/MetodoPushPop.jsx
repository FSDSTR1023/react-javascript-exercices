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
  const numerosPush = numeros.push('cacahuete');
  // Eliminar el último elemento
  // Escribe código
  const numerosPop = numeros.pop();

  return (
    <>
      <ul>
        {numeros.map((number, i) => (<li key={i}>{number}</li>))}
      </ul>
    </>
  );
};
