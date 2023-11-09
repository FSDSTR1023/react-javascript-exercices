/* 
Operador Spread
Utiliza el operador spread para combinar 
dos objetos en uno nuevo y renderiza el resultado.
*/

export const ObjectEjercicio12 = () => {
  const persona = {
    nombre: 'Wendy',
    apellido: 'Camacho',
    provincia: 'San José',
    edad: 38,
  }

  const trabajo = {
    título: 'doctora',
    empresa: 'Hospital Metropolitano',
    ciudad: 'Curridabat',
  }

  const doctora = {...persona, ...trabajo};
    
    return (
      <>
        <p>{JSON.stringify(doctora)}</p>
      </>
    );
  };
  
