/* 
Modificar Propiedades Anidadas
Modifica una propiedad anidada en un objeto y
renderiza el objeto actualizado.
*/

export const ObjectEjercicio6 = () => {
    // Escribe tu solución
  const list = {
    a: 1,
    b: {
      c: 3,
      d: 4
    },
  };

  list.b.d = 5;

  const listValues = Object.values(list);

  return (
    <>
      <p>{JSON.stringify(list)}</p>
      {/* <ul>
        {listValues.map((pepe, i) => (
          <li key={i}>
            <ul>
              {Object.values(pepe).map((number, j) => (
                <li key={j}>{number}</li>
              ))}
            </ul>
            {pepe}
          </li>
        ))}
      </ul> */}
    </>
  );
};
  