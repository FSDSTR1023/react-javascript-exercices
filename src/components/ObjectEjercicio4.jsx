/* 
Eliminar Propiedades
Elimina una propiedad de un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio4 = () => {
    // Escribe tu solución
    const list = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };

    delete list.d;

    return (
      <>
        <ul>
          {Object.keys(list).map((i) => (
            <li key={i}>
              {i}: {list[i]}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
