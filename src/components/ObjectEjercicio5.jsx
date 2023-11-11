/* 
Acceder a Propiedades Anidadas
Crea un objeto con propiedades anidadas y 
accede a una propiedad anidada.
*/

export const ObjectEjercicio5 = () => {
  // Escribe tu solución
  const persona = {
    a: 1,
    b: { c: 2 }
  };

  return (
    <>
      <p>{persona.b.c}</p>
    </>
  );
};
