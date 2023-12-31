import { useState } from "react";
import { Objects } from "./pages/Objects";
import { Arrays } from "./pages/arrays";

function App() {
  const [tab, setTab] = useState("arrays");

  return (
    <div className="w-full px-10 flex flex-col justify-center items-center">
      <div className="flex flex-row my-5 gap-5">
        <button onClick={() => setTab('arrays')} className={`${tab === 'arrays' ? 'bg-orange-500 text-white' : ''}`}>Arrays</button>
        <button onClick={() => setTab('objects')} className={`${tab === 'objects' ? 'bg-orange-500 text-white' : ''}`}>Objects</button>
      </div>

      {tab === 'arrays' && <Arrays />}
      {tab === 'objects' && <Objects />}
    </div>
  );
}

export default App;
