/* 
Métodos de Objeto
Crea un objeto con un método y llama a ese método en un componente.
*/

export const ObjectEjercicio20 = () => {
    const object = {
      mensaje: () => "Buenos días!"
    }
    
    return (
      <>
        <p>{object.mensaje()}</p>
      </>
    );
  };
  
