/* 
Modificar Propiedades Anidadas
Modifica una propiedad anidada en un objeto y
renderiza el objeto actualizado.
*/

export const ObjectEjercicio6 = () => {
  // Escribe tu solución
  const persona = {
    a: 1,
    b: { c: 2 }
  };
  persona.b.c = "e"
  return (
    <>
      <p>{JSON.stringify(persona)}</p>
    </>
  );
};
