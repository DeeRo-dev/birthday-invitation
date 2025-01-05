import { useEffect, useState, JSX } from "react";

// Definir el tipo de timeLeft con nombres en español
interface TimeLeft {
  Días?: number;
  Horas?: number;
  Minutos?: number;
  Segundos?: number;
}

function calculateTimeLeft(): TimeLeft {
  const targetDate = new Date("2025-01-19T16:30:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutos: Math.floor((difference / 1000 / 60) % 60),
      Segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

const Cronometro: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiar el temporizador al desmontarse el componente
    return () => clearTimeout(timer);
  }, [timeLeft]); // Dependencia de `timeLeft` para actualizar cada vez que cambie

  const timerComponents: JSX.Element[] = []; // Especificamos el tipo como JSX.Element[]

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft]) {
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <p className="text-yellow-400 text-base font-semibold">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>¡Comenzó el evento!</span>
      )}
    </p>
  );
};

export default Cronometro;
