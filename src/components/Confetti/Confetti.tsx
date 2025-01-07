"use client"; // Si estás usando el App Router
import ConfettiGenerator from 'confetti-js'
import { useEffect, useRef } from "react";


const ConfettiComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      // Ensure canvas exists before initializing confetti
      if (!canvasRef.current) return
  
      const confetti = new ConfettiGenerator({
        target: canvasRef.current.id,
        max: 80,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
      })
      
      confetti.render()
  
      return () => confetti.clear()
    }, [])
  
    return (
        <canvas
          ref={canvasRef}
          id="confetti-canvas"
          className="absolute inset-0 w-full h-full pointer-events-none z-50"
        />
      )
    }
    
    

export default ConfettiComponent;
