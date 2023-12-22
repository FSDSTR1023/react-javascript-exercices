/* 
Desestructuración de Objetos
Desestructura un objeto para acceder a sus propiedades más fácilmente.
*/

export const ObjectEjercicio15 = () => {
    // Escribe tu solución
    const miObjeto = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: 'Valor 3',
  };
const { propiedad1, propiedad2, propiedad3 } = miObjeto;
    return (
      <>
        <h2>Desestructuración de Objetos:</h2>
      <p>Propiedad 1: {propiedad1}</p>
      <p>Propiedad 2: {propiedad2}</p>
      <p>Propiedad 3: {propiedad3}</p>
      </>
    );
  };
  