'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    className?: string
}

export function AnimatedCounter({ end, duration = 2, suffix = '', className = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!isInView) return

        let startTime: number | null = null
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                setCount(end)
            }
        }

        requestAnimationFrame(step)
    }, [isInView, end, duration])

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className={className}
        >
            {count}{suffix}
        </motion.span>
    )
}
