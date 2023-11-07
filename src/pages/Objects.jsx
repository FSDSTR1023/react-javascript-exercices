import { Card } from "../components/Card";
import { ObjectEjercicio1 } from "../components/ObjectEjercicio1";
import { ObjectEjercicio2 } from "../components/ObjectEjercicio2";
import { ObjectEjercicio3 } from "../components/ObjectEjercicio3";
import { ObjectEjercicio4 } from "../components/ObjectEjercicio4";
import { ObjectEjercicio5 } from "../components/ObjectEjercicio5";
import { ObjectEjercicio6 } from "../components/ObjectEjercicio6";
import { ObjectEjercicio7 } from "../components/ObjectEjercicio7";
import { ObjectEjercicio8 } from "../components/ObjectEjercicio8";
import { ObjectEjercicio9 } from "../components/ObjectEjercicio9";
import { ObjectEjercicio10 } from "../components/ObjectEjercicio10";
import { ObjectEjercicio11 } from "../components/ObjectEjercicio11";
import { ObjectEjercicio12 } from "../components/ObjectEjercicio12";
import { ObjectEjercicio13 } from "../components/ObjectEjercicio13";
import { ObjectEjercicio14 } from "../components/ObjectEjercicio14";
import { ObjectEjercicio15 } from "../components/ObjectEjercicio15";
import { ObjectEjercicio16 } from "../components/ObjectEjercicio16";
import { ObjectEjercicio17 } from "../components/ObjectEjercicio17";
import { ObjectEjercicio18 } from "../components/ObjectEjercicio18";
import { ObjectEjercicio19 } from "../components/ObjectEjercicio19";
import { ObjectEjercicio20 } from "../components/ObjectEjercicio20";
import { ObjectEjercicio21 } from "../components/ObjectEjercicio21";
import { ObjectEjercicio22 } from "../components/ObjectEjercicio22";
import { ObjectEjercicio23 } from "../components/ObjectEjercicio23";
import { ObjectEjercicio24 } from "../components/ObjectEjercicio24";

export const Objects = () => {
    const ejercicios = [
        {id: "o1", title: "Renderizar Propiedades", component: <ObjectEjercicio1 />},
        {id: "o2", title: "Iterar sobre Propiedades", component: <ObjectEjercicio2 />},
        {id: "o3", title: "Agregar Propiedades", component: <ObjectEjercicio3 />},
        {id: "o4", title: "Eliminar Propiedades", component: <ObjectEjercicio4 />},
        {id: "o5", title: "Acceder a Propiedades Anidadas", component: <ObjectEjercicio5 />},
        {id: "o6", title: "Modificar Propiedades Anidadas", component: <ObjectEjercicio6 />},
        {id: "o7", title: "Objetos dentro de Arrays", component: <ObjectEjercicio7 />},
        {id: "o8", title: "Filtrar Objetos", component: <ObjectEjercicio8 />},
        {id: "o9", title: "Ordenar Objetos", component: <ObjectEjercicio9 />},
        {id: "o10", title: "Actualizar Propiedades", component: <ObjectEjercicio10 />},
        {id: "o11", title: "Asignación de Propiedades", component: <ObjectEjercicio11 />},
        {id: "o12", title: "Operador Spread", component: <ObjectEjercicio12 />},
        {id: "o13", title: "Comprobar Propiedades", component: <ObjectEjercicio13 />},
        {id: "o14", title: "Objetos como Props", component: <ObjectEjercicio14 />},
        {id: "o15", title: "Desestructuración de Objetos", component: <ObjectEjercicio15 />},
        {id: "o16", title: "Desestructuración en Parámetros", component: <ObjectEjercicio16 />},
        {id: "o17", title: "Comparar Objetos", component: <ObjectEjercicio17 />},
        {id: "o18", title: "Objeto como Estado", component: <ObjectEjercicio18 />},
        {id: "o19", title: "Objetos Constantes", component: <ObjectEjercicio19 />},
        {id: "o20", title: "Comparar Objetos", component: <ObjectEjercicio20 />},
        {id: "o20", title: "Método Object.values():", component: <ObjectEjercicio21 />},
        {id: "o20", title: "Método Object.entries()", component: <ObjectEjercicio22 />},
        {id: "o20", title: "Método Object.freeze()", component: <ObjectEjercicio23 />},
        {id: "o20", title: "Método Object.seal()", component: <ObjectEjercicio24 />},
      ]
      
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center">
          {ejercicios.map(ej => (
            <Card key={ej.id} id={ej.id} title={ej.title} Component={ej.component} />
          ))}
        </div>
      );
}
// Component está en mayúscula porque lo que se está pasando es un componente (<ObjectEjercicio24 />)