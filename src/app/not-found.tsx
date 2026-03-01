import Link from 'next/link'

function AstronautSVG() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-52 h-52">
      <defs>
        {/* Suit body gradient — 3D shading */}
        <radialGradient id="suit-grad" cx="38%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="45%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        {/* Helmet glass gradient */}
        <radialGradient id="visor-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.3" />
        </radialGradient>
        {/* Helmet shell gradient */}
        <radialGradient id="helmet-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="40%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        {/* Glove gradient */}
        <radialGradient id="glove-grad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>
        {/* Boot gradient */}
        <radialGradient id="boot-grad" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        {/* Tether cord */}
        <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="float-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Floating animation wrapper */}
      <g style={{ animation: 'astro-float 5s ease-in-out infinite', transformOrigin: '100px 110px' }}>

        {/* === Body shadow / ambient === */}
        <ellipse cx="100" cy="195" rx="38" ry="8" fill="#8b5cf6" opacity="0.18" />

        {/* === Left arm === */}
        <rect x="56" y="105" width="16" height="38" rx="8" fill="url(#suit-grad)" />
        {/* Left glove */}
        <circle cx="64" cy="148" r="9" fill="url(#glove-grad)" />
        <circle cx="61" cy="146" r="3" fill="#ddd6fe" opacity="0.4" />

        {/* === Right arm === */}
        <rect x="128" y="105" width="16" height="38" rx="8" fill="url(#suit-grad)" />
        {/* Right glove */}
        <circle cx="136" cy="148" r="9" fill="url(#glove-grad)" />
        <circle cx="133" cy="146" r="3" fill="#ddd6fe" opacity="0.4" />

        {/* === Body / torso === */}
        <rect x="68" y="100" width="64" height="70" rx="18" fill="url(#suit-grad)" />

        {/* Chest panel */}
        <rect x="80" y="112" width="40" height="28" rx="6" fill="#4c1d95" opacity="0.6" />
        <rect x="84" y="116" width="12" height="4" rx="2" fill="#67e8f9" opacity="0.8" />
        <rect x="84" y="122" width="8" height="4" rx="2" fill="#a78bfa" opacity="0.7" />
        <rect x="84" y="128" width="10" height="4" rx="2" fill="#f0abfc" opacity="0.6" />
        {/* Chest indicator dot */}
        <circle cx="108" cy="118" r="4" fill="#22d3ee" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* === Suit highlight stripe === */}
        <rect x="95" y="100" width="10" height="70" rx="5" fill="white" opacity="0.06" />

        {/* === Left leg === */}
        <rect x="74" y="165" width="22" height="36" rx="11" fill="url(#suit-grad)" />
        {/* Left boot */}
        <ellipse cx="85" cy="202" rx="14" ry="9" fill="url(#boot-grad)" />
        <ellipse cx="82" cy="199" rx="5" ry="3" fill="#c4b5fd" opacity="0.25" />

        {/* === Right leg === */}
        <rect x="104" y="165" width="22" height="36" rx="11" fill="url(#suit-grad)" />
        {/* Right boot */}
        <ellipse cx="115" cy="202" rx="14" ry="9" fill="url(#boot-grad)" />
        <ellipse cx="112" cy="199" rx="5" ry="3" fill="#c4b5fd" opacity="0.25" />

        {/* === Helmet === */}
        <circle cx="100" cy="82" r="32" fill="url(#helmet-grad)" />
        {/* Helmet ring */}
        <circle cx="100" cy="82" r="32" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
        {/* Visor */}
        <ellipse cx="100" cy="82" rx="22" ry="20" fill="url(#visor-grad)" opacity="0.9" />
        {/* Visor shine */}
        <ellipse cx="91" cy="73" rx="7" ry="5" fill="white" opacity="0.22" transform="rotate(-20,91,73)" />
        {/* Helmet side detail */}
        <circle cx="68" cy="80" r="5" fill="#4c1d95" stroke="#8b5cf6" strokeWidth="1" />
        <circle cx="132" cy="80" r="5" fill="#4c1d95" stroke="#8b5cf6" strokeWidth="1" />

        {/* Reflection in visor — small stars */}
        <circle cx="94" cy="78" r="1.2" fill="white" opacity="0.6" />
        <circle cx="106" cy="74" r="0.8" fill="white" opacity="0.5" />
        <circle cx="110" cy="85" r="1" fill="white" opacity="0.4" />

        {/* === Tether cord === */}
        <path d="M 136 130 Q 160 100 175 60" stroke="#8b5cf6" strokeWidth="1.5"
          strokeDasharray="4 3" fill="none" filter="url(#glow-line)" opacity="0.7" />
        {/* Tether anchor */}
        <circle cx="175" cy="58" r="5" fill="#a78bfa" opacity="0.8" filter="url(#float-glow)" />

        {/* === Floating small star details === */}
        <circle cx="38" cy="68" r="1.5" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="165" cy="140" r="1" fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="48" cy="160" r="1.2" fill="#a78bfa" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
      </g>

      <style>{`
        @keyframes astro-float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          30%      { transform: translateY(-12px) rotate(3deg); }
          70%      { transform: translateY(-6px) rotate(-2deg); }
        }
      `}</style>
    </svg>
  )
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative text-center px-6">
        {/* 404 number */}
        <div className="relative inline-block mb-4">
          <span className="text-[120px] md:text-[160px] font-display font-bold leading-none"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #6d28d9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            404
          </span>
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        {/* 3D Astronaut */}
        <div className="flex justify-center mb-4">
          <AstronautSVG />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Lost in the cosmos
        </h2>
        <p className="text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for has drifted into deep space. Let&apos;s navigate you back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-violet-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-violet-500/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
