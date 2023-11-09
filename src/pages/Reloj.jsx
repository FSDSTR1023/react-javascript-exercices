import { useEffect, useState } from "react";

function Reloj() {
    const [hour, setHour] = useState(new Date().toLocaleDateString());
    const [hora, setHora] = useState(new Date().getHours());
    const [minutos, setMinutos] = useState(new Date().getMinutes());
    const [segundos, setSegundos] = useState(new Date().getSeconds());
    const [milisegundos, setMilisegundos] = useState(new Date().getMilliseconds());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setHora(new Date().toLocaleDateString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            Hora actual: {hora}
        </div>
    );
}

export default Reloj;