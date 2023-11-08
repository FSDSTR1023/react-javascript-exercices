/* 
Modificar Propiedades Anidadas
Modifica una propiedad anidada en un objeto y
renderiza el objeto actualizado.
*/

export const ObjectEjercicio6 = () => {
  const objeto = {
    a: 1,
    b: 2,
    c: 3,
    d: {
      d1: 4,
      d2: 5
    }
  }
    
  objeto.d.d1 = 7;


    return (
      <>
        <p>{objeto.d.d1}</p>
      </>
    );
  };
  