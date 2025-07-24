"use client"

interface AnimatedBackgroundProps {
  isDark: boolean
}

export function AnimatedBackground({ isDark }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main gradient background */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-cream-50 via-white to-cream-100"
        }`}
      ></div>

      {/* Slowly Moving Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${isDark ? "bg-blue-400/20" : "bg-navy-600/15"} rounded-full animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            transform: `translateX(${Math.sin(i) * 20}px) translateY(${Math.cos(i) * 20}px)`,
            animation: `float-slow ${8 + Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Slowly Moving Circuit Lines */}
      <svg className={`absolute inset-0 w-full h-full ${isDark ? "opacity-10" : "opacity-5"}`}>
        <defs>
          <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M15 15h90v90h-90z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="15" cy="15" r="2" fill="currentColor" />
            <circle cx="105" cy="15" r="2" fill="currentColor" />
            <circle cx="15" cy="105" r="2" fill="currentColor" />
            <circle cx="105" cy="105" r="2" fill="currentColor" />
          </pattern>
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            values="0,0;10,10;0,0"
            dur="20s"
            repeatCount="indefinite"
          />
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" className={isDark ? "text-blue-400" : "text-navy-600"} />
      </svg>
    </div>
  )
}
