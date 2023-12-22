/* 
Renderizar Propiedades
Crea un objeto con tus datos personales (nombre, edad, ciudad) 
y renderiza cada propiedad en un componente.
*/

export const ObjectEjercicio1 = () => {
    const persona = {
    nombre: "Alcedo",
    edad: 24,
    ciudad: "Bilbao"
    };
  
    return (
      <>
        <p>{persona.nombre}, {persona.edad}, {persona.ciudad}</p>
      </>
    );
  };