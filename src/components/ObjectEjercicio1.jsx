/* 
Renderizar Propiedades
Crea un objeto con tus datos personales (nombre, edad, ciudad) 
y renderiza cada propiedad en un componente.
*/

export const ObjectEjercicio1 = () => {
    const person = {
      nombre: "Pepe",
      edad: 95,
      ciudad: "Pangea"
    };
  
    return (
      <>
        <p>{person.nombre}, {person.edad}, {person.ciudad}</p>
      </>
    );
  };