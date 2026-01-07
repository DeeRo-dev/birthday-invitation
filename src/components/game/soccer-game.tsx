"use client"

import type React from "react"
import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Position {
  x: number
  y: number
}

interface Velocity {
  vx: number
  vy: number
}

export function SoccerGame() {
  const [score, setScore] = useState(0)
  const [ballPosition, setBallPosition] = useState<Position>({ x: 50, y: 70 })
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showGoal, setShowGoal] = useState(false)
  const [showMiss, setShowMiss] = useState(false)
  const [dragStart, setDragStart] = useState<Position | null>(null)
  const [currentDrag, setCurrentDrag] = useState<Position | null>(null)

  const gameRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const resetBall = useCallback(() => {
    setBallPosition({ x: 50, y: 70 })
    setIsAnimating(false)
  }, [])

  const checkGoal = useCallback((x: number, y: number): boolean => {
    return x >= 25 && x <= 75 && y <= 20 && y >= 5
  }, [])

  const animateBall = useCallback(
    (velocity: Velocity) => {
      setIsAnimating(true)
      const currentPos = { ...ballPosition }
      const vel = { ...velocity }
      const friction = 0.98
      const gravity = 0.1

      const animate = () => {
        currentPos.x += vel.vx
        currentPos.y += vel.vy
        vel.vx *= friction
        vel.vy *= friction
        vel.vy += gravity

        if (checkGoal(currentPos.x, currentPos.y)) {
          setScore((prev) => prev + 1)
          setShowGoal(true)
          setTimeout(() => {
            setShowGoal(false)
            resetBall()
          }, 1500)
          return
        }

        if (currentPos.x < 5 || currentPos.x > 95 || currentPos.y < 0 || currentPos.y > 85) {
          setShowMiss(true)
          setTimeout(() => {
            setShowMiss(false)
            resetBall()
          }, 1000)
          return
        }

        if (Math.abs(vel.vx) > 0.1 || Math.abs(vel.vy) > 0.1) {
          setBallPosition({ ...currentPos })
          animationRef.current = requestAnimationFrame(animate)
        } else {
          resetBall()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    },
    [ballPosition, checkGoal, resetBall],
  )

  const getEventPosition = (e: React.TouchEvent | React.MouseEvent): Position => {
    if (!gameRef.current) return { x: 0, y: 0 }
    const rect = gameRef.current.getBoundingClientRect()

    let clientX: number, clientY: number
    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    }
  }

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isAnimating) return
    e.preventDefault()
    const pos = getEventPosition(e)

    const distance = Math.sqrt(Math.pow(pos.x - ballPosition.x, 2) + Math.pow(pos.y - ballPosition.y, 2))

    if (distance <= 10) {
      setIsDragging(true)
      setDragStart(pos)
      setCurrentDrag(pos)
    }
  }

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const pos = getEventPosition(e)
    setCurrentDrag(pos)
  }

  const handleEnd = () => {
    if (!isDragging || !dragStart || !currentDrag) return

    setIsDragging(false)

    const velocity: Velocity = {
      vx: (dragStart.x - currentDrag.x) * 0.15,
      vy: (dragStart.y - currentDrag.y) * 0.2,
    }

    if (velocity.vy < -1) {
      animateBall(velocity)
    }

    setDragStart(null)
    setCurrentDrag(null)
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col w-full items-center justify-center h-[60vh] bg-emerald-600 p-4">
      {/* Marcador */}
      <div className="mb-4 text-center">
        <motion.div
          key={score}
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          className="text-6xl font-bold text-white drop-shadow-lg"
        >
          {score}
        </motion.div>
        <div className="text-xl text-emerald-100 font-medium">GOLES</div>
      </div>

      {/* Campo de juego */}
      <div
        ref={gameRef}
        className="relative w-full max-w-sm aspect-[3/4] bg-emerald-500 rounded-3xl border-4 border-white overflow-hidden touch-none select-none"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* Líneas del campo */}
        <div className="absolute inset-x-4 top-1/2 h-px bg-white/50" />
        <div className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 border-2 border-white/50 rounded-full" />

        {/* Área grande */}
        <div className="absolute left-[15%] right-[15%] top-0 h-[25%] border-2 border-white/50 border-t-0" />

        {/* Área chica */}
        <div className="absolute left-[30%] right-[30%] top-0 h-[12%] border-2 border-white/50 border-t-0" />

        {/* Arco */}
        <div className="absolute left-[25%] right-[25%] top-[5%] h-[15%] flex items-end justify-center">
          <div className="w-full h-full border-4 border-white bg-gray-800/30 rounded-b-lg relative">
            <div className="absolute inset-0 opacity-40">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-white"
                  style={{ left: `${(i + 1) * 11}%` }}
                />
              ))}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 h-px bg-white"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Línea de arrastre */}
        {isDragging && dragStart && currentDrag && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1={`${ballPosition.x}%`}
              y1={`${ballPosition.y}%`}
              x2={`${ballPosition.x + (dragStart.x - currentDrag.x) * 2}%`}
              y2={`${ballPosition.y + (dragStart.y - currentDrag.y) * 2}%`}
              stroke="white"
              strokeWidth="3"
              strokeDasharray="8,4"
              opacity="0.8"
            />
            <circle
              cx={`${ballPosition.x + (dragStart.x - currentDrag.x) * 2}%`}
              cy={`${ballPosition.y + (dragStart.y - currentDrag.y) * 2}%`}
              r="6"
              fill="white"
              opacity="0.8"
            />
          </svg>
        )}

        {/* Pelota */}
        <motion.div
          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${ballPosition.x}%`,
            top: `${ballPosition.y}%`,
          }}
          animate={{ scale: isDragging ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full bg-white border-2 border-gray-300 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-800 rounded-full opacity-90" />
            </div>
            <div className="absolute top-1 left-1 w-3 h-3 bg-gray-800 rounded-full opacity-80" />
            <div className="absolute top-1 right-1 w-3 h-3 bg-gray-800 rounded-full opacity-80" />
            <div className="absolute bottom-1 left-2 w-3 h-3 bg-gray-800 rounded-full opacity-80" />
            <div className="absolute bottom-1 right-2 w-3 h-3 bg-gray-800 rounded-full opacity-80" />
          </div>
        </motion.div>

        {/* Mensaje de GOL */}
        <AnimatePresence>
          {showGoal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
                className="text-5xl font-black text-yellow-400 drop-shadow-lg"
              >
                GOL!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mensaje de fallo */}
        <AnimatePresence>
          {showMiss && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30"
            >
              <div className="text-3xl font-bold text-white/90">Afuera!</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instrucción */}
        {!isAnimating && !showGoal && !showMiss && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/80 text-sm font-medium">Arrastra la pelota hacia arriba</p>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setScore(0)
          resetBall()
        }}
        className="mt-6 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl shadow-lg active:scale-95 transition-transform"
      >
        Reiniciar Juego
      </button>
    </div>
  )
}
