/* 
Acceder a Propiedades Anidadas
Crea un objeto con propiedades anidadas y 
accede a una propiedad anidada.
*/

export const ObjectEjercicio5 = () => {
  const objeto = {
    a: 1,
    b: 2,
    c: 3,
    d: {
      d1: 4,
      d2: 5
    }
  }
    


    return (
      <>
        <p>{objeto.d.d1}</p>
      </>
    );
  };
  