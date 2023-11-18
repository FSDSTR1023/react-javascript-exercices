/* 
Objetos como Props
Pasa un objeto como prop a un componente y 
renderiza sus propiedades en el componente hijo.
*/


import ComponenteHijo from './ComponenteHijo';

export const ObjectEjercicio14 = () => {
  // Crear un objeto
  const objeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

  return (
    <>
      <h2>Componente Padre</h2>
      <ComponenteHijo objeto={objeto} />
    </>
  );
};


