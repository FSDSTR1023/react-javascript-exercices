/* 
Renderizar Propiedades
Crea un objeto con tus datos personales (nombre, edad, ciudad) 
y renderiza cada propiedad en un componente.
*/

export const ObjectEjercicio1 = () => {
    const persona = {
    nombre: "Sabine",
    edad: 41,
    ciudad: "San José"
    };
  
    return (
      <>
        <p>{persona.nombre}, {persona.edad}, {persona.ciudad}</p>
      </>
    );
  };