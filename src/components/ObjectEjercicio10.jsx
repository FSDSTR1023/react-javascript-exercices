/* 
Ordenar Objetos
Crea un objeto y un botón que, al hacer clic, 
actualice una propiedad del objeto y 
muestre el objeto actualizado.
*/

export const ObjectEjercicio10 = () => {
    // Escribe tu solución
    const [miObjeto, setMiObjeto] = useState({
    propiedad: 'Valor inicial',
  });
  const actualizarPropiedad = () => {
    const objetoActualizado = { ...miObjeto };
    objetoActualizado.propiedad = 'Nuevo valor';
     setMiObjeto(objetoActualizado);
  };

    return (
      <>
       <h2>Objeto Actualizado:</h2>
      <p>Propiedad: {miObjeto.propiedad}</p>
      <button onClick={actualizarPropiedad}>Actualizar Propiedad</button>
      </>
    );
  };
  
