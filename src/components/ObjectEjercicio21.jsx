/* 
Método Object.values():
Crea un objeto y utiliza Object.values() para renderizar una lista con los valores del objeto.
*/

export const ObjectEjercicio21 = () => {
      const miObjeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
  };
   
  const valoresObjeto = Object.values(miObjeto)
    
  return (
      <>
      <ul>
        {valoresObjeto.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
      </>
    );
  };

