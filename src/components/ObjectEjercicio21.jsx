/* 
Método Object.values():
Crea un objeto y utiliza Object.values() para renderizar una lista con los valores del objeto.
*/

export const ObjectEjercicio21 = () => {
  const coche = {
    marca: 'Citroën',
    modelo: 'C3',
    año: 2015,
    color: 'blanco',
  }
    
    return (
      <>
        <ul>{Object.values(coche).map((elemento) => <li>{elemento}</li>)}</ul>
      </>
    );
  };