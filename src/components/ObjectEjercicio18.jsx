/* 
Objeto como Estado
Usa un objeto como estado en un componente y actualiza una propiedad del objeto.
*/

export const ObjectEjercicio18 = () => {
    // Escribe tu solución
   const [usuario, setUsuario] = useState({
    nombre: 'John Doe',
    edad: 25,
    correo: 'john.doe@example.com',
  });
  const actualizarNombreUsuario = () => {
    const usuarioActualizado = { ...usuario };
    usuarioActualizado.nombre = 'Jane Doe';
  setUsuario(usuarioActualizado);
  };

    return (
      <>
        <h2>Usuario:</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <p>Correo: {usuario.correo}</p>
      <button onClick={actualizarNombreUsuario}>Actualizar Nombre de Usuario</button>
      </>
    );
  };
  

