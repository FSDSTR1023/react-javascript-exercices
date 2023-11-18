const ComponenteHijo = ({ objeto }) => {
  return (
    <>
      <h2>Componente Hijo</h2>
      <p>Nombre: {objeto.nombre}</p>
      <p>Edad: {objeto.edad}</p>
      <p>Ciudad: {objeto.ciudad}</p>
    </>
  );
};

export default ComponenteHijo;
