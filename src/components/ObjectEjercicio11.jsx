/* 
Asignación de Propiedades
Utiliza `Object.assign()` para combinar dos objetos 
en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio11 = () => {
    // Escribe tu solución
    const objeto1 = { propiedad1: 'Valor 1' };
    const objeto2 = { propiedad2: 'Valor 2' };
     
  const objetoCombinado = Object.assign({}, objeto1, objeto2);
    return (
      <>
       <h2>Objeto Combinado:</h2>
      <pre>{JSON.stringify(objetoCombinado, null, 2)}</pre>
      </>
    );
  };
  