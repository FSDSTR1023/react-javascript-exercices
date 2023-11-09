/* 
Objetos Constantes
Crea un objeto constante fuera de un componente 
y accede a sus propiedades en el componente.
*/

export const ObjectEjercicio19 = () => {
    
    const PERSONA = {
      nombre: "Shirley", 
      cabello: "café", 
      ojos: "café"
    }
    
    return (
      <>
        <p>{PERSONA.nombre}, {PERSONA.cabello}</p>
      </>
    );
  };
  
