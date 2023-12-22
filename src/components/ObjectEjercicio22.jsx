/* 
Método Object.entries()
Crea un objeto y utiliza Object.entries() para renderizar una lista con las entradas del objeto.
*/

export const ObjectEjercicio22 = () => {
      const miObjeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
  };
    
  const entradasObjeto = Object.entries(miObjeto);
    return (
      <>
        <ul>
        {entradasObjeto.map(([clave, valor]) => (
          <li key={clave}>{`${clave}: ${valor}`}</li>
        ))}
      </ul>
      </>
    );
  };
  

