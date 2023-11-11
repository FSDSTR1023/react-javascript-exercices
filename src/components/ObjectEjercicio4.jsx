/* 
Eliminar Propiedades
Elimina una propiedad de un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio4 = () => {
  // Escribe tu solución
  const persona = {
    a: 1,
    b: 2,
    c: 3
  };
  delete persona.b
  return (
    <>
      <p>{JSON.stringify(persona)}</p>
    </>
  );
};

