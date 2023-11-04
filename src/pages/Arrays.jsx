import { Card } from "../components/Card";
import { MetodoEvery } from "../components/MetodoEvery";
import { MetodoFilter } from "../components/MetodoFilter";
import { MetodoFind } from "../components/MetodoFind";
import { MetodoFindIndex } from "../components/MetodoFindIndex";
import { MetodoIndexOf } from "../components/MetodoIndexOf";
import { MetodoJoin } from "../components/MetodoJoin";
import { MetodoMap } from "../components/MetodoMap";
import { MetodoReduce } from "../components/MetodoReduce";
import { MetodoSome } from "../components/MetodoSome";
import { MetodoSort } from "../components/MetodoSort";
import { MetodoSplice } from "../components/MetodoSplice";
import { MetodoSlice } from "../components/MetodoSlice";
import { MetodoConcat } from "../components/MetodoConcat";
import { MetodoFill } from "../components/MetodoFill";
import { MetodoReverse } from "../components/MetodoReverse";
import { MetodoShiftUnshift } from "../components/MetodoShiftUnshift";
import { MetodoPushPop } from "../components/MetodoPushPop";
import { MetodoIncludes } from "../components/MetodoIncludes";
import { MetodoFlat } from "../components/MetodoFlat";
import { MetodoForEach } from "../components/MetodoForEach";

export const Arrays = () => {
    const ejercicios = [
        {id: "e1", title: "Ejercicio .map()", component: <MetodoMap />},
        {id: "e2", title: "Ejercicio .filter()", component: <MetodoFilter />},
        {id: "e3", title: "Ejercicio .sort()", component: <MetodoSort />},
        {id: "e4", title: "Ejercicio .reduce()", component: <MetodoReduce />},
        {id: "e5", title: "Ejercicio .find()", component: <MetodoFind />},
        {id: "e6", title: "Ejercicio .every()", component: <MetodoEvery />},
        {id: "e7", title: "Ejercicio .some()", component: <MetodoSome />},
        {id: "e8", title: "Ejercicio .indexOf()", component: <MetodoIndexOf />},
        {id: "e9", title: "Ejercicio .findIndex()", component: <MetodoFindIndex />},
        {id: "e10", title: "Ejercicio .join()", component: <MetodoJoin />},
        {id: "e11", title: "Ejercicio .slice()", component: <MetodoSlice />},
        {id: "e12", title: "Ejercicio .splice()", component: <MetodoSplice />},
        {id: "e13", title: "Ejercicio .concat()", component: <MetodoConcat />},
        {id: "e14", title: "Ejercicio .fill()", component: <MetodoFill />},
        {id: "e15", title: "Ejercicio .reverse()", component: <MetodoReverse />},
        {id: "e16", title: "Ejercicio .push() y .pop()", component: <MetodoPushPop />},
        {id: "e17", title: "Ejercicio .shift() y .unshift()", component: <MetodoShiftUnshift />},
        {id: "e18", title: "Ejercicio .flat()", component: <MetodoFlat />},
        {id: "e19", title: "Ejercicio .includes()", component: <MetodoIncludes />},
        {id: "e20", title: "Ejercicio .forEach()", component: <MetodoForEach />},
      ]
        
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center">
          {ejercicios.map(ej => (
            <Card key={ej.id} id={ej.id} title={ej.title} Component={ej.component} />
          ))}
        </div>
      );
}