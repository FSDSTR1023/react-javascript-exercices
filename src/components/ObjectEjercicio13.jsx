/* 
Comprobar Propiedades
Comprueba si un objeto tiene una propiedad 
específica utilizando `hasOwnProperty()`.
*/

export const ObjectEjercicio13 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  return (
    <>
      {persona.hasOwnProperty('edad') ? 'La contiene' : 'No contiene'}
    </>
  );
};

