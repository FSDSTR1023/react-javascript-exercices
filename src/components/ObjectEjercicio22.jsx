/* 
Método Object.entries()
Crea un objeto y utiliza Object.entries() para renderizar una lista con las entradas del objeto.
*/

export const ObjectEjercicio22 = () => {
  const coche = {
    marca: 'Citroën',
    modelo: 'C3',
    año: 2015,
    color: 'blanco',
  }
    
    return (
      <>
        <ul>{Object.entries(coche).map((element) => <li>{element}</li>)}</ul>
      </>
    );
  };
  

