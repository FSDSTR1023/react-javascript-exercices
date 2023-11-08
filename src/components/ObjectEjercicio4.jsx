/* 
Eliminar Propiedades
Elimina una propiedad de un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio4 = () => {
  const objeto = {
    a: 1,
    b: 2,
    c: 3
  }

  delete objeto.a
    
    return (
      <>
        <ul>
          {Object.keys(objeto).map((elemento) => <li>{elemento}</li>)}
        </ul>
      </>
    );
  };
  
