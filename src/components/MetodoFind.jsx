/* 
Método find()
Encuentra el primer número mayor que 10 en un array 
utilizando el método find().
*/

export const MetodoFind = () => {
  const numeros = [5, 10, 15, 20];

  return (
    <>
      Primer número mayor que 10: {numeros.find((number)=>number>10)}
    </>
  );
};
