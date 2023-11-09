/* 
Método Object.seal()
Utiliza Object.seal() para evitar que se agreguen o eliminen propiedades de un objeto, 
y verifica si puedes agregar una nueva propiedad o no.
*/

export const ObjectEjercicio24 = () => {
  const objeto = {
    a: 1,
    b: 2,
    c: 3
  };

  Object.seal(objeto);

  
    
    return (
      <>
        Escribe tu solución
      </>
    );
  };
  
