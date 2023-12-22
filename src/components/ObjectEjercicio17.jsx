/* 
Comparar Objetos
Crea una función que compare dos objetos y determine si son iguales o no.
*/

export const ObjectEjercicio17 = () => {
    // Escribe tu solución
    const clavesObjeto1 = Object.keys(objeto1);
    const clavesObjeto2 = Object.keys(objeto2);

    if (clavesObjeto1.length !== clavesObjeto2.length) {
    return false;
  }
  for (const clave of clavesObjeto1) {
    if (objeto1[clave] !== objeto2[clave]) {
      return false;
    }
  }
   return true;
};

export const ObjectEjercicio17 = () => {
  
  const objeto1 = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
  };

  const objeto2 = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
  };

    const sonIguales = sonObjetosIguales(objeto1, objeto2);
    return (
      <>
       <h2>Comparación de Objetos:</h2>
      <p>¿Son iguales? {sonIguales ? 'Sí' : 'No'}</p>
      </>
    );
  };
  
