/* 
Objetos como Props
Pasa un objeto como prop a un componente y 
renderiza sus propiedades en el componente hijo.
*/

export const ObjectEjercicio14 = () => {
    // Escribe tu solución
   const ComponenteHijo = ({ miObjeto }) => {
  return (
    <div>
      <h2>Propiedades del Objeto en el Componente Hijo:</h2>
      <ul>
        {/* Iterar sobre las propiedades del objeto y mostrarlas */}
        {Object.keys(miObjeto).map((propiedad) => (
          <li key={propiedad}>
            {propiedad}: {miObjeto[propiedad]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ObjectEjercicio14 = () => {

  const miObjeto = {
    propiedad1: 'Valor 1',
    propiedad2: 'Valor 2',
    propiedad3: 'Valor 3',
  };
    return (
      <>
       <h1>Objetos como Props</h1>
      <ComponenteHijo miObjeto={miObjeto} />
      </>
    );
  };
}