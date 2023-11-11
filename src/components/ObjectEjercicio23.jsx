/* 
Método Object.freeze()
Utiliza Object.freeze() para evitar que un objeto sea modificado, 
y verifica si el objeto es modificable o no.
*/

export const ObjectEjercicio23 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  Object.freeze(persona)
  // persona.nombre = "Sonia"
  return (
    <>
      {persona.nombre}
    </>
  );
};

