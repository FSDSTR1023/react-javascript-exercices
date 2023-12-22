/* 
Desestructuración en Parámetros
Desestructura un objeto directamente en los parámetros de una función.
*/

export const ObjectEjercicio16 = () => {
    // Escribe tu solución
    const mostrarPropiedades = ({ propiedad1, propiedad2, propiedad3 }) => {
  return (
    <>
      <h2>Desestructuración en Parámetros:</h2>
      <p>Propiedad 1: {propiedad1}</p>
      <p>Propiedad 2: {propiedad2}</p>
      <p>Propiedad 3: {propiedad3}</p>
    </>
  );
};
export const ObjectEjercicio16 = () => {
 
  const miObjeto = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: 'Valor 3',
  };

  return mostrarPropiedades(miObjeto);
};
}