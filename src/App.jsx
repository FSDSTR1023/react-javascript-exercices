import { useState } from "react";
import { Arrays } from "./pages/Arrays";
import { Objects } from "./pages/Objects";

function App() {
  const [tab, setTab] = useState("arrays");

  return (
    <div className="w-full px-10 flex flex-col justify-center items-center">
      <div className="flex flex-row my-5 gap-5">
        <button onClick={() => setTab('arrays')}>Arrays</button>
        <button onClick={() => setTab('objects')}>Objects</button>
      </div>

      {tab === 'arrays' && <Arrays />}
      {tab === 'objects' && <Objects />}
    </div>
  );
}

export default App;
