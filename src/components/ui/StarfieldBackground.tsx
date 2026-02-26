'use client'

import { useEffect, useRef } from 'react'

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0
    let time = 0

    interface Star {
      x: number
      y: number
      size: number
      speed: number
      brightness: number
    }

    let stars: Star[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000)
      stars = []
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          brightness: Math.random(),
        })
      }
    }

    const draw = () => {
      time += 0.005
      const width = canvas.width
      const height = canvas.height

      // Clear with dark background
      ctx.fillStyle = '#030308'
      ctx.fillRect(0, 0, width, height)

      // Animated gradient background
      const gradient = ctx.createRadialGradient(
        width / 2 + Math.sin(time) * 100,
        height / 3 + Math.cos(time * 0.7) * 50,
        0,
        width / 2,
        height / 2,
        width * 0.8
      )
      gradient.addColorStop(0, 'rgba(88, 28, 135, 0.15)')
      gradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.08)')
      gradient.addColorStop(0.6, 'rgba(59, 7, 100, 0.05)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Secondary glow
      const gradient2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 0.5) * 80,
        height * 0.6 + Math.sin(time * 0.8) * 60,
        0,
        width * 0.75,
        height * 0.6,
        width * 0.5
      )
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.1)')
      gradient2.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)')
      gradient2.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, width, height)

      // Third glow (bottom left)
      const gradient3 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.6) * 60,
        height * 0.8 + Math.cos(time * 0.4) * 40,
        0,
        width * 0.2,
        height * 0.8,
        width * 0.4
      )
      gradient3.addColorStop(0, 'rgba(124, 58, 237, 0.08)')
      gradient3.addColorStop(0.5, 'rgba(91, 33, 182, 0.03)')
      gradient3.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, width, height)

      // Draw stars
      stars.forEach((star) => {
        const parallaxX = (mouseX - width / 2) * star.speed * 0.02
        const parallaxY = (mouseY - height / 2) * star.speed * 0.02
        const x = star.x + parallaxX
        const y = star.y + parallaxY

        // Twinkle
        const twinkle = 0.5 + Math.sin(time * 3 + star.brightness * 10) * 0.5
        const alpha = star.brightness * twinkle * 0.8

        // Star glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 4)
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        glowGradient.addColorStop(0.3, `rgba(167, 139, 250, ${alpha * 0.3})`)
        glowGradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(x, y, star.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Star core
        ctx.beginPath()
        ctx.arc(x, y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.2})`
        ctx.fill()
      })

      // Floating particles
      for (let i = 0; i < 20; i++) {
        const px = (width * 0.1 + i * width * 0.045 + Math.sin(time * 0.8 + i * 0.5) * 40) % width
        const py = (height * 0.2 + i * height * 0.035 + Math.cos(time * 0.6 + i * 0.3) * 50) % height
        const pAlpha = 0.15 + Math.sin(time * 2 + i) * 0.1

        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${pAlpha})`
        ctx.fill()
      }

      // Grid lines (subtle)
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 80
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
