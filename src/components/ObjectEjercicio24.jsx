/* 
Método Object.seal()
Utiliza Object.seal() para evitar que se agreguen o eliminen propiedades de un objeto, 
y verifica si puedes agregar una nueva propiedad o no.
*/




export const ObjectEjercicio24 = () => {
  // Crear un objeto
  const miObjeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  // Sellar el objeto
  Object.seal(miObjeto);

  // Intentar agregar una nueva propiedad
  let error = null;
  try {
    miObjeto.nuevaPropiedad = "Nueva";
  } catch (e) {
    error = e;
  }

  // Verificar si se agregó la nueva propiedad
  const seAgregoNuevaPropiedad = miObjeto.hasOwnProperty('nuevaPropiedad');

  return (
    <>
      <h2>Object.seal():</h2>
      <p>Nombre: {miObjeto.nombre}</p>
      <p>Edad: {miObjeto.edad}</p>
      <p>Ciudad: {miObjeto.ciudad}</p>
      <p>¿Se agregó la nueva propiedad? {seAgregoNuevaPropiedad ? "Sí" : "No"}</p>
      {error && (
        <p>Error al intentar agregar la nueva propiedad: {error.message}</p>
      )}
    </>
  );
};
