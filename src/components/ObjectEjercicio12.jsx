/* 
Operador Spread
Utiliza el operador spread para combinar 
dos objetos en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio12 = () => {
    // Escribe tu solución
   const objeto1 = { propiedad1: 'Valor 1' };
   const objeto2 = { propiedad2: 'Valor 2' };

   const objetoCombinado = { ...objeto1, ...objeto2 };
    return (
      <>
        <h2>Objeto Combinado:</h2>
      <pre>{JSON.stringify(objetoCombinado, null, 2)}</pre>
      </>
    );
  };
  
