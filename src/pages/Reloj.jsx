import { useEffect, useState } from "react";

function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHora(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

return (
    <div>
        Hora actual: {hora}
    </div>
);
}

export default Reloj;