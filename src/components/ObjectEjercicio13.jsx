/* 
Comprobar Propiedades
Comprueba si un objeto tiene una propiedad 
específica utilizando `hasOwnProperty()`.
*/

export const ObjectEjercicio13 = () => {
    // Escribe tu solución
   const miObjeto = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
  };
  const propiedadBuscada = 'propiedad2';
  const tienePropiedad = miObjeto.hasOwnProperty(propiedadBuscada);
    return (
      <>
       <h2>Comprobación de Propiedad:</h2>
      <p>El objeto {tienePropiedad ? 'tiene' : 'no tiene'} la propiedad "{propiedadBuscada}".</p>
      </>
    );
  };

