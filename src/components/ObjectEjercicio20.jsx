/* 
Métodos de Objeto
Crea un objeto con un método y llama a ese método en un componente.
*/

export const ObjectEjercicio20 = () => {
  const MyObjeto = {
    saludar: function(){
      return "Hola, soy el componente.";
    }
  };
    
  const mensajeSaludo = MyObjeto.saludar()
    return (
      <>
        <p>{mensajeSaludo}</p>
      </>
    );
  };
  
