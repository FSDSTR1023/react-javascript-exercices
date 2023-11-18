/* 
Acceder a Propiedades Anidadas
Crea un objeto con propiedades anidadas y 
accede a una propiedad anidada.
*/

export const ObjectEjercicio5 = () => {
  // Crea un objeto con propiedades anidadas
  const miObjeto = {
    persona: {
      nombre: "Juan",
      apellido: "Sanchez"
    },
    ciudad: "Madrid",
    edad: 25,
  };

  // Accede a una propiedad anidada
  const apellidoPersona = miObjeto.persona.apellido;

  return (
    <>
      <h2>Apellido de la persona:</h2>
      <p>{apellidoPersona}</p>
    </>
  );
};
