/* 
Agregar Propiedades
Agrega una nueva propiedad a un objeto y 
renderiza el objeto actualizado.
*/

export const ObjectEjercicio3 = () => {
  // Escribe tu solución
  const persona = {
    a: 1,
    b: 2
  };
  persona.c = 3

  return (
    <>
      <p>{JSON.stringify(persona)}</p>
    </>
  );
};
