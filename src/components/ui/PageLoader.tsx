'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
    const [visible, setVisible] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 800)
        const hideTimer = setTimeout(() => setVisible(false), 1150)
        return () => { clearTimeout(timer); clearTimeout(hideTimer) }
    }, [])

    if (!visible) return null

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.35s ease',
                pointerEvents: fadeOut ? 'none' : 'all',
            }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-violet-600/15 blur-[80px]" />
            </div>

            <div className="relative flex flex-col items-center gap-6">
                {/* Orb */}
                <div className="relative w-14 h-14">
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 border-r-purple-500 animate-spin" />
                    <div className="absolute inset-1.5 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
                    {/* Core dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 shadow-[0_0_16px_rgba(139,92,246,0.6)]" />
                    </div>
                </div>

                {/* Logo text */}
                <div className="flex items-center gap-0.5">
                    {['A', 'F', 'O', 'T'].map((letter, i) => (
                        <span
                            key={letter}
                            className="text-xl font-display font-bold"
                            style={{
                                background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: `loaderPulse 1s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="w-32 h-0.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-violet-600 to-purple-500 rounded-full"
                        style={{ animation: 'loaderBar 0.85s ease-out forwards' }}
                    />
                </div>
            </div>

            <style jsx>{`
        @keyframes loaderPulse {
          0%,100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
        @keyframes loaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
        </div>
    )
}
