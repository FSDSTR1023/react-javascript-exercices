
import { useState } from "react";
import { Objects } from "./pages/Objects";
import { Arrays } from "./pages/arrays";
import Reloj from "./pages/Reloj";

function App() {
  
  const [tab, setTab] = useState("reloj");
  // tab: encapsulamos datos
  // setTab: funcion para actualizar los datos de la constante tab

  // useState("arrays"): valor inicial. 
  // Es decir, primero siempre se muestra el tab de Arrays. 
  // Si no quisiera mostrar nada (solo los dos botones de Arrays y Objects) pasaría "null"

  return (
    <div className="w-full px-10 flex flex-col justify-center items-center">
      <div className="flex flex-row my-5 gap-5">

        <button 
        onClick={() => setTab('arrays')} 
        className={`${tab === 'arrays' ? 'bg-orange-500 text-white' : ''}`}>Arrays
        </button>

        <button 
        onClick={() => setTab('objects')} 
        className={`${tab === 'objects' ? 'bg-orange-500 text-white' : ''}`}>Objects
        </button>

        <button
          onClick={() => setTab("reloj")}
          className={`${tab === "reloj" ? "bg-orange-500 text-white" : ""}`}
          >
          Reloj
          </button>
      </div>

      {tab === 'arrays' && <Arrays />}
      {tab === 'objects' && <Objects />}
      {tab === 'reloj' && <Reloj />}
    </div>
  );
}

export default App;
