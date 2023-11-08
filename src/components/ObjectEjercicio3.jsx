/* 
Agregar Propiedades
Agrega una nueva propiedad a un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio3 = () => {
    const objeto = {
      a: 1,
      b: 2
    }

    objeto.c = 3;
    
    return (
      <>
        <ul>
          {Object.keys(objeto).map((elemento) => <li>{elemento}</li>)}
        </ul>
      </>
    );
  };
  