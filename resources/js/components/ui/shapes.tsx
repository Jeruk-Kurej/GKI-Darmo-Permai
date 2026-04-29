import React from 'react';
import { motion } from 'framer-motion';

// === Wajik Outline (Garis Luar) ===
export function DiamondOutline({ 
    className = "", 
    size = "w-64 h-64", 
    borderWidth = "border-[3px]", 
    borderColor = "border-white",
    opacity = "opacity-20",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    borderWidth?: string; 
    borderColor?: string;
    opacity?: string;
    animate?: string;
}) {
    const glowShadow = borderColor.includes('white') ? 'shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'shadow-[0_0_30px_rgba(0,0,0,0.05)]';
    
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-15px", "15px", "-15px"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className={`w-full h-full flex items-center justify-center`}>
                <div 
                    className={`${size} ${borderWidth} ${borderColor} ${opacity} ${glowShadow} backdrop-blur-[2px] rotate-45 transform origin-center transition-all duration-1000 ${animate}`} 
                />
            </div>
        </motion.div>
    );
}

// === Wajik Solid (Isi Premium Glassmorphism) ===
export function DiamondSolid({ 
    className = "", 
    size = "w-64 h-64", 
    bgColor = "bg-white",
    opacity = "opacity-10",
    blur = "backdrop-blur-md",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    bgColor?: string;
    opacity?: string;
    blur?: string;
    animate?: string;
}) {
    const isDark = bgColor.includes('gray') || bgColor.includes('black');
    const glassBorder = isDark ? 'border-[1px] border-black/5' : 'border-[1px] border-white/20';
    const glassShadow = isDark ? 'shadow-[0_8px_32px_rgba(0,0,0,0.1)]' : 'shadow-[0_8px_32px_rgba(255,255,255,0.1)]';

    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-20px", "20px", "-20px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <div className={`w-full h-full flex items-center justify-center`}>
                <div 
                    className={`${size} ${bgColor} ${opacity} ${blur} ${glassBorder} ${glassShadow} rotate-45 transform origin-center transition-all duration-1000 ${animate}`} 
                    style={{
                        background: bgColor.includes('white') 
                            ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)' 
                            : undefined
                    }}
                />
            </div>
        </motion.div>
    );
}

// === Diagonal Bar (Balok Miring Solid) ===
export function DiagonalBar({ 
    className = "", 
    size = "w-16 h-64", 
    bgColor = "bg-gray-300",
    opacity = "opacity-100",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    bgColor?: string;
    opacity?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-10px", "10px", "-10px"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div className={`w-full h-full flex items-center justify-center`}>
                <div 
                    className={`${size} ${bgColor} ${opacity} -rotate-45 transform origin-center transition-all duration-1000 ${animate}`} 
                />
            </div>
        </motion.div>
    );
}

// === Diagonal Gradient Bar (Balok Miring Gradasi) ===
export function DiagonalGradientBar({ 
    className = "", 
    size = "w-16 h-64", 
    gradient = "from-gray-300 to-transparent",
    opacity = "opacity-100",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    gradient?: string;
    opacity?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-12px", "12px", "-12px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
            <div className={`w-full h-full flex items-center justify-center`}>
                <div 
                    className={`${size} bg-gradient-to-tr ${gradient} ${opacity} -rotate-45 transform origin-center transition-all duration-1000 ${animate}`} 
                />
            </div>
        </motion.div>
    );
}

// === Pola Titik (Dots) ===
export function DotsPattern({ 
    className = "", 
    size = "w-32 h-32", 
    opacity = "opacity-20",
    dotSize = "3px",
    spacing = "20px",
    dotColor = "gray",
    animate = "",
    rotated = false
}: { 
    className?: string; 
    size?: string; 
    opacity?: string;
    dotSize?: string;
    spacing?: string;
    dotColor?: string;
    animate?: string;
    rotated?: boolean;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-10px", "10px", "-10px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div 
                className={`w-full h-full flex items-center justify-center`}
            >
                <div 
                    className={`${size} ${opacity} ${animate} ${rotated ? 'rotate-45' : ''}`}
                    style={{ 
                        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`, 
                        backgroundSize: `${spacing} ${spacing}` 
                    }} 
                />
            </div>
        </motion.div>
    );
}

// === Pola Titik Segitiga (Triangle Dots) ===
export function TriangleDotsPattern({ 
    className = "", 
    size = "w-32 h-32", 
    opacity = "opacity-20",
    dotSize = "4px",
    spacing = "24px",
    dotColor = "gray",
    animate = "",
    clipPath = "polygon(0 0, 100% 0, 0 100%)" // Default siku-siku kiri atas
}: { 
    className?: string; 
    size?: string; 
    opacity?: string;
    dotSize?: string;
    spacing?: string;
    dotColor?: string;
    animate?: string;
    clipPath?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-12px", "12px", "-12px"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
            <div 
                className={`w-full h-full flex items-center justify-center`}
            >
                <div 
                    className={`${size} ${opacity} ${animate}`}
                    style={{ 
                        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`, 
                        backgroundSize: `${spacing} ${spacing}`,
                        clipPath: clipPath
                    }} 
                />
            </div>
        </motion.div>
    );
}

// === Lingkaran Blur (Glowing Circle Premium) ===
export function GlowCircle({ 
    className = "", 
    size = "w-8 h-8", 
    opacity = "opacity-40",
    blur = "blur-md",
    color = "bg-gray-300",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    opacity?: string;
    blur?: string;
    color?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ 
                y: ["-15px", "15px", "-15px"],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className={`w-full h-full flex items-center justify-center ${animate}`}>
                <div className={`${size} ${color} rounded-full ${opacity} ${blur} shadow-[0_0_15px_rgba(0,0,0,0.1)]`} />
            </div>
        </motion.div>
    );
}

// ==========================================
// PRE-COMPOSED CLUSTERS DARI REFERENSI GAMBAR
// ==========================================

export function BrandDecoLeft({ className = "", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
    const isDark = theme === "dark";
    
    // Colors based on theme
    const borderColor1 = isDark ? "border-white" : "border-gray-400";
    const borderColor2 = isDark ? "border-white" : "border-gray-300";
    const solidColor = isDark ? "bg-white" : "bg-gray-300";
    const gradient = isDark ? "from-white to-transparent" : "from-gray-300 to-transparent";
    const dotColor1 = isDark ? "rgba(255,255,255,0.7)" : "#d1d5db";
    const dotColor2 = isDark ? "rgba(255,255,255,0.9)" : "#e5e7eb";
    const glowColor = isDark ? "bg-white" : "bg-gray-400";
    
    const opacities = isDark ? { out1: "opacity-20", out2: "opacity-30", solid: "opacity-20", grad: "opacity-30", glow: "opacity-40", dot1: "opacity-40", dot2: "opacity-60" } 
                             : { out1: "opacity-40", out2: "opacity-60", solid: "opacity-80", grad: "opacity-60", glow: "opacity-70", dot1: "opacity-60", dot2: "opacity-80" };

    return (
        <div className={`relative w-[400px] h-[400px] pointer-events-none ${className}`}>
            {/* Outline wajik terluar */}
            <DiamondOutline className="left-10 top-10" size="w-64 h-64" borderWidth="border-[1px]" borderColor={borderColor1} opacity={opacities.out1} />
            <DiamondOutline className="left-20 top-20" size="w-48 h-48" borderWidth="border-[1px]" borderColor={borderColor2} opacity={opacities.out2} />
            
            {/* Balok miring abu-abu tebal */}
            <DiagonalBar className="left-16 top-24" size="w-16 h-72" bgColor={solidColor} opacity={opacities.solid} />
            
            {/* Balok miring gradasi abu ke putih/transparan */}
            <DiagonalGradientBar className="left-32 top-32" size="w-10 h-48" gradient={gradient} opacity={opacities.grad} />
            
            {/* Lingkaran abu-abu */}
            <GlowCircle className="left-48 bottom-20" size="w-6 h-6" color={glowColor} blur="blur-sm" opacity={opacities.glow} />
            
            {/* Titik-titik pola belah ketupat */}
            <DotsPattern className="left-48 top-10" size="w-40 h-40" dotColor={dotColor1} dotSize="2px" spacing="12px" opacity={opacities.dot1} rotated={true} />
            <DotsPattern className="left-32 bottom-[-20px]" size="w-32 h-32" dotColor={dotColor2} dotSize="2px" spacing="10px" opacity={opacities.dot2} rotated={true} />
        </div>
    );
}

export function BrandDecoRight({ className = "", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
    const isDark = theme === "dark";
    
    // Colors based on theme
    const borderColor1 = isDark ? "border-white" : "border-gray-300";
    const borderColor2 = isDark ? "border-white" : "border-gray-400";
    const solidColor = isDark ? "bg-white" : "bg-gray-300";
    const gradient = isDark ? "from-white to-transparent" : "from-gray-200 to-transparent";
    const dotColor1 = isDark ? "rgba(255,255,255,0.9)" : "#e5e7eb";
    const dotColor2 = isDark ? "rgba(255,255,255,0.7)" : "#d1d5db";
    const glowColor = isDark ? "bg-white" : "bg-gray-400";

    const opacities = isDark ? { out1: "opacity-30", out2: "opacity-20", solid: "opacity-20", grad: "opacity-30", glow: "opacity-40", dot1: "opacity-60", dot2: "opacity-40" } 
                             : { out1: "opacity-60", out2: "opacity-40", solid: "opacity-80", grad: "opacity-80", glow: "opacity-70", dot1: "opacity-80", dot2: "opacity-50" };


    return (
        <div className={`relative w-[400px] h-[400px] pointer-events-none ${className}`}>
            {/* Outline wajik terluar */}
            <DiamondOutline className="right-10 top-20" size="w-64 h-64" borderWidth="border-[1px]" borderColor={borderColor1} opacity={opacities.out1} />
            <DiamondOutline className="right-32 top-32" size="w-32 h-32" borderWidth="border-[1px]" borderColor={borderColor2} opacity={opacities.out2} />
            
            {/* Balok miring abu-abu tebal */}
            <DiagonalBar className="right-32 bottom-0" size="w-20 h-64" bgColor={solidColor} opacity={opacities.solid} />
            
            {/* Balok miring gradasi */}
            <DiagonalGradientBar className="right-48 top-40" size="w-12 h-32" gradient={gradient} opacity={opacities.grad} />
            
            {/* Lingkaran abu-abu */}
            <GlowCircle className="right-32 top-24" size="w-6 h-6" color={glowColor} blur="blur-sm" opacity={opacities.glow} />
            
            {/* Titik-titik */}
            <DotsPattern className="right-48 top-0" size="w-48 h-48" dotColor={dotColor1} dotSize="2px" spacing="12px" opacity={opacities.dot1} rotated={true} />
            <DotsPattern className="right-10 bottom-10" size="w-32 h-32" dotColor={dotColor2} dotSize="2px" spacing="12px" opacity={opacities.dot2} rotated={true} />
        </div>
    );
}
