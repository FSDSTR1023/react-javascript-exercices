/* 
Método Object.freeze()
Utiliza Object.freeze() para evitar que un objeto sea modificado, 
y verifica si el objeto es modificable o no.
*/

export const ObjectEjercicio23 = () => {
    const object = {
      number: 35
    };

    Object.freeze(object);

    // object.number = 79;

   
    
    return (
      <>
        {/* <p>{object.number}</p> */}
      </>
    );
  };

// el objeto ya no es modificable