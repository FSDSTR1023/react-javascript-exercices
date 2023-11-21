/* 
Desestructuración en Parámetros
Desestructura un objeto directamente en los parámetros de una función.
*/

export const ObjectEjercicio16 = () => {
  // Escribe tu solución
  const User = ({name, age, city}) => (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{city}</li>
    </ul>
  )
  

  return (
    <>
      <User {...{
          name: 'Luis',
          age: 44,
          city: 'Kuala Lumpur'  
        }
      } />
    </>
  );
};