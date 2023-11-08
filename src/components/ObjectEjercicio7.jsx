/* 
Objetos dentro de Arrays
Crea un array de objetos y renderiza 
una lista de una propiedad específica.
*/

export const ObjectEjercicio7 = () => {
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
        <p>{personas.map((persona) => <li>{persona.ciudad}</li>)}</p>
      </>
    );
  };
  

