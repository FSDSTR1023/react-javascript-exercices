/* 
Comparar Objetos
Crea una función que compare dos objetos y determine si son iguales o no.
*/


const sonObjetosIguales = (objeto1, objeto2) => {
  // Obtenemos las claves (propiedades) de ambos objetos
  const clavesObjeto1 = Object.keys(objeto1);
  const clavesObjeto2 = Object.keys(objeto2);

  // Comparamos si tienen la misma cantidad de propiedades
  if (clavesObjeto1.length !== clavesObjeto2.length) {
    return false;
  }

  // Comparamos el valor de cada propiedad
  for (const clave of clavesObjeto1) {
    if (objeto1[clave] !== objeto2[clave]) {
      return false;
    }
  }

  // Si llegamos hasta aquí, los objetos son iguales
  return true;
};

export const ObjectEjercicio17 = () => {
  // Crear dos objetos para comparar
  const objeto1 = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  const objeto2 = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  // Llamar a la función para comparar los objetos
  const sonIguales = sonObjetosIguales(objeto1, objeto2);

  return (
    <>
      <h2>Comparación de Objetos:</h2>
      <p>¿Los objetos son iguales? {sonIguales ? "Sí" : "No"}</p>
    </>
  );
};

  
