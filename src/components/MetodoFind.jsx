/* 
Método find()
Encuentra el primer número mayor que 10 en un array 
utilizando el método find().
*/

export const MetodoFind = () => {
  const numeros = [5, 10, 15, 20];

  return (
    <>
      <p>{numeros.find((numero) => numero > 10)}</p>
    </>
  );
};
