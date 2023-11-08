/* 
Ordenar Objetos
Crea un array de objetos y usa `sort()` 
para ordenarlos por una propiedad específica.
*/

export const ObjectEjercicio9 = () => {
  let personas = [
    {
      nombre: "Carlos",
      edad: 40,
      ciudad: "San José"
    },
    {
      nombre: "Alexis",
      edad: 33,
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
        <p>{personas.sort((a, b) => a.edad - b.edad).map((persona) => (<li>{persona.nombre}</li>))}</p>
      </>
    );
  };


