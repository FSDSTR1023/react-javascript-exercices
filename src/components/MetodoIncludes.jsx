/* 
Método includes()
Verifica si un array incluye el número 5 utilizando el método includes().
*/

export const MetodoIncludes = () => {
  const numeros = [0, 1, 2, 3, 4, 5];
  const incluyeNumero5 = numeros.includes(5);

  return (
    <>
      <h2>¿El array incluye el número 5?</h2>
      {incluyeNumero5 ? (
        <p>Sí, el array incluye el número 5.</p>
      ) : (
        <p>No, el array no incluye el número 5.</p>
      )}
    </>
  );
};
