/* 
Objetos Constantes
Crea un objeto constante fuera de un componente 
y accede a sus propiedades en el componente.
*/

export const ObjectEjercicio19 = () => {
    
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
};
export const ObjectEjercicio19 = () => {
  
  const { propiedad1, propiedad2 } = objetoConstante;
    return (
      <>
        <h2>Objeto Constante:</h2>
      <p>Propiedad 1: {propiedad1}</p>
      <p>Propiedad 2: {propiedad2}</p>
      </>
    );
  };
  
