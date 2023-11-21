/* 
Objetos como Props
Pasa un objeto como prop a un componente y 
renderiza sus propiedades en el componente hijo.
*/

export const ObjectEjercicio14 = () => {
  // Escribe tu solución
  const user = {
    name: 'Luis',
    age: 44,
    city: 'Kuala Lumpur'
  };
  const ChildProp = ({userData}) => (
    <div>
      <p>Nombre: {userData.name}</p>
      <p>Edad: {userData.age}</p>
      <p>Ciudad: {userData.city}</p>
    </div>
  )

  return (
    <>
      <ChildProp userData={user} />
    </>
  );
};


