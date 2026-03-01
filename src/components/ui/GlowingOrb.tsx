'use client'

import { useEffect, useRef } from 'react'

interface Ring {
    rx: number
    ry: number
    tilt: number      // visual rotation of ellipse in degrees
    speed: number     // radians per frame (positive = CW, negative = CCW)
    nodeAngle: number // current angle of the travelling node
    color: [number, number, number, number][] // gradient stops [r,g,b,a]
    strokeW: number
    opacity: number
}

export function GlowingOrb() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animRef = useRef<number>(0)
    const mouseRef = useRef({ x: 0, y: 0 })
    const targetRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!

        const W = canvas.width
        const H = canvas.height
        const cx = W / 2
        const cy = H / 2

        // Mouse parallax
        const onMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            targetRef.current = {
                x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
                y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
            }
        }
        window.addEventListener('mousemove', onMove)

        // Ring definitions
        const rings: Ring[] = [
            {
                rx: 190, ry: 52, tilt: -12,
                speed: 0.0012,
                nodeAngle: 0,
                color: [[139, 92, 246, 0], [139, 92, 246, 1], [217, 70, 239, 0.7], [139, 92, 246, 0]],
                strokeW: 1.2, opacity: 0.9,
            },
            {
                rx: 148, ry: 40, tilt: 28,
                speed: -0.002,
                nodeAngle: Math.PI,
                color: [[168, 85, 247, 0], [232, 121, 249, 1], [103, 232, 249, 0.6], [168, 85, 247, 0]],
                strokeW: 0.9, opacity: 0.7,
            },
            {
                rx: 108, ry: 28, tilt: -42,
                speed: 0.0016,
                nodeAngle: Math.PI / 2,
                color: [[109, 40, 217, 0], [124, 58, 237, 0.5], [109, 40, 217, 0]],
                strokeW: 0.7, opacity: 0.45,
            },
        ]

        let t = 0

        function drawRing(ring: Ring, offX: number, offY: number) {
            const { rx, ry, tilt, color, strokeW, opacity } = ring
            const tiltRad = (tilt * Math.PI) / 180

            ctx.save()
            ctx.translate(cx + offX, cy + offY)
            ctx.rotate(tiltRad)
            ctx.globalAlpha = opacity

            // Build gradient along ellipse
            const grad = ctx.createLinearGradient(-rx, 0, rx, 0)
            const stops = color.length
            color.forEach((c, i) => {
                const [r, g, b, a] = c
                grad.addColorStop(i / (stops - 1), `rgba(${r},${g},${b},${a})`)
            })

            ctx.beginPath()
            ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
            ctx.strokeStyle = grad
            ctx.lineWidth = strokeW
            ctx.stroke()

            ctx.restore()
        }

        function drawNode(ring: Ring, offX: number, offY: number) {
            const { rx, ry, tilt, nodeAngle } = ring
            const tiltRad = (tilt * Math.PI) / 180

            // Point on ellipse at nodeAngle
            const ex = rx * Math.cos(nodeAngle)
            const ey = ry * Math.sin(nodeAngle)
            // Rotate by tilt
            const nx = ex * Math.cos(tiltRad) - ey * Math.sin(tiltRad)
            const ny = ex * Math.sin(tiltRad) + ey * Math.cos(tiltRad)

            const wx = cx + offX + nx
            const wy = cy + offY + ny

            // Outer glow
            const glowGrad = ctx.createRadialGradient(wx, wy, 0, wx, wy, 10)
            glowGrad.addColorStop(0, 'rgba(196,181,253,0.9)')
            glowGrad.addColorStop(0.3, 'rgba(167,139,250,0.5)')
            glowGrad.addColorStop(1, 'rgba(139,92,246,0)')
            ctx.beginPath()
            ctx.arc(wx, wy, 10, 0, Math.PI * 2)
            ctx.fillStyle = glowGrad
            ctx.fill()

            // Core dot
            ctx.beginPath()
            ctx.arc(wx, wy, 2.5, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(220,210,255,0.95)'
            ctx.fill()

            // Trail — 4 dots behind
            for (let i = 1; i <= 5; i++) {
                const ta = nodeAngle - ring.speed * i * 40
                const tex = rx * Math.cos(ta)
                const tey = ry * Math.sin(ta)
                const tnx = tex * Math.cos(tiltRad) - tey * Math.sin(tiltRad)
                const tny = tex * Math.sin(tiltRad) + tey * Math.cos(tiltRad)
                ctx.beginPath()
                ctx.arc(cx + offX + tnx, cy + offY + tny, 1.8 - i * 0.25, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(196,181,253,${0.45 - i * 0.08})`
                ctx.fill()
            }
        }

        function drawSphere(offX: number, offY: number, breathe: number) {
            const r = 80
            const sx = cx + offX
            const sy = cy + offY

            // Deep volumetric glow
            for (let i = 3; i >= 1; i--) {
                const gr = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * (1.2 + i * 0.8))
                const alpha = (0.12 + breathe * 0.05) / i
                gr.addColorStop(0, `rgba(109,40,217,${alpha * 2.5})`)
                gr.addColorStop(0.5, `rgba(88,28,135,${alpha})`)
                gr.addColorStop(1, 'rgba(0,0,0,0)')
                ctx.beginPath()
                ctx.arc(sx, sy, r * (1.2 + i * 0.8), 0, Math.PI * 2)
                ctx.fillStyle = gr
                ctx.fill()
            }

            // Sphere body
            const bodyGrad = ctx.createRadialGradient(sx - r * 0.3, sy - r * 0.32, r * 0.05, sx, sy, r)
            bodyGrad.addColorStop(0.0, '#ddd6fe')
            bodyGrad.addColorStop(0.2, '#a78bfa')
            bodyGrad.addColorStop(0.55, '#7c3aed')
            bodyGrad.addColorStop(0.82, '#4c1d95')
            bodyGrad.addColorStop(1.0, '#1e0a3c')
            ctx.beginPath()
            ctx.arc(sx, sy, r, 0, Math.PI * 2)
            ctx.fillStyle = bodyGrad
            ctx.fill()

            // Fresnel rim glow
            const rimGrad = ctx.createRadialGradient(sx, sy, r * 0.55, sx, sy, r)
            rimGrad.addColorStop(0, 'rgba(139,92,246,0)')
            rimGrad.addColorStop(0.75, 'rgba(139,92,246,0.15)')
            rimGrad.addColorStop(0.9, `rgba(167,139,250,${0.55 + breathe * 0.15})`)
            rimGrad.addColorStop(1.0, 'rgba(196,181,253,0.1)')
            ctx.beginPath()
            ctx.arc(sx, sy, r, 0, Math.PI * 2)
            ctx.fillStyle = rimGrad
            ctx.fill()

            // Specular highlight
            const specGrad = ctx.createRadialGradient(sx - r * 0.28, sy - r * 0.3, 0, sx - r * 0.2, sy - r * 0.2, r * 0.45)
            specGrad.addColorStop(0, 'rgba(255,255,255,0.30)')
            specGrad.addColorStop(0.5, 'rgba(255,255,255,0.08)')
            specGrad.addColorStop(1, 'rgba(255,255,255,0)')
            ctx.beginPath()
            ctx.arc(sx, sy, r, 0, Math.PI * 2)
            ctx.fillStyle = specGrad
            ctx.fill()

            // Breathing outer pulse rings
            for (let p = 0; p < 2; p++) {
                const pAlpha = (0.25 - p * 0.1) * (0.7 + breathe * 0.3)
                const pR = r * (1.28 + p * 0.2) + breathe * 4
                ctx.beginPath()
                ctx.arc(sx, sy, pR, 0, Math.PI * 2)
                ctx.strokeStyle = `rgba(167,139,250,${pAlpha})`
                ctx.lineWidth = 0.8
                ctx.stroke()
            }
        }

        function frame() {
            ctx.clearRect(0, 0, W, H)

            // Lerp mouse
            const m = mouseRef.current
            const tr = targetRef.current
            m.x += (tr.x - m.x) * 0.04
            m.y += (tr.y - m.y) * 0.04

            const breathe = (Math.sin(t * 0.018) + 1) / 2 // 0..1

            const rOff = { x: m.x * 10, y: m.y * 7 }
            const sOff = { x: m.x * 18, y: m.y * 12 }

            // Draw back rings (ring 2, 3) before sphere
            rings.slice(1).forEach(ring => {
                drawRing(ring, rOff.x, rOff.y)
                drawNode(ring, rOff.x, rOff.y)
            })

            // Sphere
            drawSphere(sOff.x, sOff.y, breathe)

            // Draw front ring (ring 1) after sphere for depth illusion
            drawRing(rings[0], rOff.x, rOff.y)
            drawNode(rings[0], rOff.x, rOff.y)

            // Advance ring node angles
            rings.forEach(r => { r.nodeAngle += r.speed })

            t++
            animRef.current = requestAnimationFrame(frame)
        }

        animRef.current = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(animRef.current)
            window.removeEventListener('mousemove', onMove)
        }
    }, [])

    return (
        <div className="relative flex items-center justify-center w-full select-none" style={{ height: 460 }}>
            <canvas
                ref={canvasRef}
                width={560}
                height={460}
                className="pointer-events-none"
                style={{ maxWidth: '100%' }}
            />

            {/* Floating badges — HTML layer on top */}
            {[
                { label: '<AI />', color: '#a78bfa', top: '9%', left: '67%', dur: '7s', delay: '0s' },
                { label: '{ cloud }', color: '#67e8f9', top: '74%', left: '4%', dur: '9s', delay: '1s' },
                { label: 'secure()', color: '#e879f9', top: '44%', left: '79%', dur: '8s', delay: '2s' },
                { label: '$ deploy', color: '#6ee7b7', top: '82%', left: '64%', dur: '10s', delay: '0.5s' },
            ].map(b => (
                <div
                    key={b.label}
                    className="absolute px-3 py-1.5 rounded-lg border backdrop-blur-sm font-mono text-xs tracking-wide"
                    style={{
                        top: b.top,
                        left: b.left,
                        color: b.color,
                        borderColor: `${b.color}28`,
                        background: 'rgba(10,6,25,0.6)',
                        animation: `badgefloat ${b.dur} ease-in-out infinite ${b.delay}`,
                    }}
                >
                    {b.label}
                </div>
            ))}

            <style jsx>{`
        @keyframes badgefloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    )
}
