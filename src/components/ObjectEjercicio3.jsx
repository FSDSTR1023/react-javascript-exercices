/* 
Agregar Propiedades
Agrega una nueva propiedad a un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio3 = () => {
    // Escribe tu solución
    const list = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }

    list.e = 5;

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
  