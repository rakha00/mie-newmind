export default function FireEffect() {
    return (
        <svg
            viewBox="0 0 200 200"
            className="w-28 h-28 drop-shadow-xl"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Glow */}
            <defs>
                <radialGradient id="fireGlow" cx="50%" cy="60%" r="60%">
                    <stop offset="0%" stopColor="#fff7cc" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#ffb703" stopOpacity="0.65" />
                    <stop offset="70%" stopColor="#fb8500" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="fireCore" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fff7cc" />
                    <stop offset="40%" stopColor="#ffb703" />
                    <stop offset="75%" stopColor="#fb8500" />
                    <stop offset="100%" stopColor="#ff3d00" />
                </linearGradient>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer glow circle */}
            <circle
                cx="100"
                cy="120"
                r="65"
                fill="url(#fireGlow)"
                className="animate-fireGlow"
            />

            {/* Main flame */}
            <path
                d="M103 20
C125 55 150 78 138 115
C168 90 165 60 178 62
C176 110 150 115 160 150
C168 180 140 190 120 182
C105 195 80 190 70 175
C45 190 30 170 38 145
C25 120 50 110 60 90
C75 60 70 50 103 20Z"
                fill="url(#fireCore)"
                filter="url(#softGlow)"
                className="origin-bottom animate-flame"
            />

            {/* Inner flame */}
            <path
                d="M102 55
C115 75 125 90 118 110
C130 100 132 82 140 85
C138 115 125 120 128 140
C130 160 115 165 105 158
C98 170 82 165 78 150
C65 158 60 145 65 130
C58 115 70 110 75 95
C85 75 85 70 102 55Z"
                fill="#fff2b2"
                opacity="0.85"
                className="origin-bottom animate-flameInner"
            />

            {/* Embers */}
            <circle cx="70" cy="65" r="3" fill="#ffb703" className="animate-ember1" />
            <circle cx="145" cy="80" r="2.5" fill="#fb8500" className="animate-ember2" />
            <circle cx="120" cy="45" r="2" fill="#fff7cc" className="animate-ember3" />
        </svg>
    );
}
