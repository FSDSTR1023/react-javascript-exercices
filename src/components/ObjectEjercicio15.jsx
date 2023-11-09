/* 
Desestructuración de Objetos
Desestructura un objeto para acceder a sus propiedades más fácilmente.
*/

export const ObjectEjercicio15 = () => {
  const coche1 = {
    marca: 'Citroën',
    modelo: 'C3',
    año: 2015,
    color: 'blanco',
  }    

  const {marca} = coche1;

    return (
      <>
        <p>{marca}</p>
      </>
    );
  };
  