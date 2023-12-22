/* 
Acceder a Propiedades Anidadas
Crea un objeto con propiedades anidadas y 
accede a una propiedad anidada.
*/

export const ObjectEjercicio5 = () => {
    // Escribe tu solución
     const myNestedObject = {
    prop1: 'Valor 1',
    prop2: {
      subprop1: 'Subvalor 1',
      subprop2: {
        subsubprop1: 'Subsubvalor 1',
        subsubprop2: 'Subsubvalor 2',
      },
    },
  };    
  const valorAnidado = myNestedObject.prop2.subprop2.subsubprop1;
  return (
      <>
         <h2>Valor de la Propiedad Anidada:</h2>
         <p>{valorAnidado}</p>
      </>
    );
  };
  