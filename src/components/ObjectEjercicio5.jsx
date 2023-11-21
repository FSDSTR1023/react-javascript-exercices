/* 
Acceder a Propiedades Anidadas
Crea un objeto con propiedades anidadas y 
accede a una propiedad anidada.
*/

export const ObjectEjercicio5 = () => {
    // Escribe tu solución
    const list = {
      a: 1,
      b: {
        c: 3,
        d: 4
      },
    };


    return (
      <>
        <p>{list.b.c}</p>
      </>
    );
  };
  