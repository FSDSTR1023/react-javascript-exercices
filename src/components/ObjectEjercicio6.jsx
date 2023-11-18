/* 
Modificar Propiedades Anidadas
Modifica una propiedad anidada en un objeto y
renderiza el objeto actualizado.
*/


export const ObjectEjercicio6 = () => {
  // Crea un objeto con propiedades anidadas (mismo objeto que en el ejercicio anterior)
  const miObjeto = {
    persona: {
      nombre: "Juan",
      apellido: "Sanchez"
    },
    ciudad: "Madrid",
    edad: 25,
  };

  // Modifica una propiedad anidada (en este caso, modificaremos la edad)
  miObjeto.persona.edad = 26;

  return (
    <>
      <h2>Ahora la edad es 26 en lugar de 25:</h2>
      <p>Nombre: {miObjeto.persona.nombre}</p>
      <p>Apellido: {miObjeto.persona.apellido}</p>
      <p>Ciudad: {miObjeto.ciudad}</p>
      <p>Edad: {miObjeto.persona.edad}</p>
    </>
  );
};
