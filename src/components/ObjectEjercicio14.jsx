/* 
Objetos como Props
Pasa un objeto como prop a un componente y 
renderiza sus propiedades en el componente hijo.
*/

export const ObjectEjercicio14 = () => {
  // Escribe tu solución
  const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  };
  const NewComponent = (props) => {
    return <p> {props.persona.nombre}, {props.persona.edad}, {props.persona.ciudad}</p>
  }

  return (
    <>
      <NewComponent persona={persona} />
    </>
  );
};


