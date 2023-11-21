/* 
Iterar sobre Propiedades
Crea un objeto y usa `Object.keys()` para 
iterar sobre sus propiedades y mostrarlas en una lista.
*/

export const ObjectEjercicio2 = () => {
    // Escribe tu solución
    const list = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }

    return (
      <>
        <ul>
          {Object.keys(list).map(i => <li key={i}>{i}: {list[i]}</li>)}
        </ul>
      </>
    );
  };
  