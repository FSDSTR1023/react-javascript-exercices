/* 
Método Object.seal()
Utiliza Object.seal() para evitar que se agreguen o eliminen propiedades de un objeto, 
y verifica si puedes agregar una nueva propiedad o no.
*/

export const ObjectEjercicio24 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  Object.seal(persona)
  // persona.apellido = "Alpha"
  return (
    <>
      {'appellido' in persona ? persona.apellido : 'No se pudo añadir'}
    </>
  );
};

