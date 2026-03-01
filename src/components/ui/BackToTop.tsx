'use client'

import { useEffect, useState } from 'react'

export function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
                pointerEvents: visible ? 'all' : 'none',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                boxShadow: '0 0 20px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)',
            }}
        >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    )
}
