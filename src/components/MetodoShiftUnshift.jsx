/* 
Método shift() y unshift():
Elimina el primer elemento de un array con shift() y 
luego agrega un elemento al inicio con unshift(), 
mostrando el resultado en una lista.
*/

export const MetodoShiftUnshift = () => {
  const numeros = [0, 1, 2, 3, 4];

  const elementoEliminado = numeros.shift()

numeros.unshift(5)
  
return (
    <>
      <p>Elemento eliminado: {elementoEliminado}</p>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </>
  );
};

