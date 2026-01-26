export default function BackgroundAccessories() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary Blobs (Large) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            {/* Secondary Floating Shapes */}
            <div className="absolute top-20 right-10 w-20 h-20 border-4 border-white/20 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rotate-45 transform"></div>
            <div className="absolute top-1/3 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-100"></div>
            <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-ping delay-300"></div>
            <div className="absolute top-40 left-1/4 w-6 h-6 border-2 border-yellow-300 rotate-12 opacity-30"></div>

            {/* Extra "Lively" Elements (Scattered Dots/Crosses) */}
            <div className="absolute top-10 left-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-500/40 rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-20 left-1/2 w-4 h-4 border border-white/30 rotate-45"></div>
            <div className="absolute top-32 right-32 w-2 h-2 bg-white/40 rounded-full"></div>

            {/* Pattern Grid Effect (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Bottom Wave Pattern */}
            <div className="absolute bottom-0 left-0 right-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
}
