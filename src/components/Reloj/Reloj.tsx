'use client'

import { useEffect, useState } from "react"

interface TimeLeft {
  Días: number
  Horas: number
  Minutos: number
  Segundos: number
}

function calculateTimeLeft(): TimeLeft {
  const targetDate = new Date("2025-01-19T16:30:00")
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    }
  }

  return {
    Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
    Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    Minutos: Math.floor((difference / 1000 / 60) % 60),
    Segundos: Math.floor((difference / 1000) % 60),
  }
}

export default function Reloj() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    setMounted(true)
    // Usar setInterval en lugar de setTimeout para actualizaciones continuas
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, []) // Remover timeLeft de las dependencias para evitar actualizaciones innecesarias

  // Prevenir hidratación incorrecta
  if (!mounted) {
    return (
      <p className="text-yellow-400 text-base font-semibold">
        Cargando...
      </p>
    )
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <span key={interval} className="mx-1">
      {value} {interval}{" "}
    </span>
  ))

  return (
    <p className="text-yellow-400 text-base font-semibold text-center">
      {timerComponents.length ? timerComponents : <span>¡Comenzó el evento!</span>}
    </p>
  )
}

