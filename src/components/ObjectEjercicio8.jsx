/* 
Filtrar Objetos
Crea un array de objetos y usa `filter()` para mostrar 
solo los objetos que cumplan una condición específica.
*/

export const ObjectEjercicio8 = () => {
  let personas = [
    {
      nombre: "Carlos",
      edad: 37,
      ciudad: "San José"
    },
    {
      nombre: "Alexis",
      edad: 37,
      ciudad: "Cancún"
    },
    {
      nombre: "Peter",
      edad: 38,
      ciudad: "Berna"
    },
  ]    
    return (
      <>
        <p>{personas.filter(persona => persona.ciudad === 'Berna').map((persona) => (<li>{persona.ciudad}</li>))}</p>
      </>
    );
  };
  
