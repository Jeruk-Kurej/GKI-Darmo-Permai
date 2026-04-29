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
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-15px", "15px", "-15px"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className={`w-full h-full ${animate} flex items-center justify-center`}>
                <div className={`${size} ${borderWidth} ${borderColor} rounded-3xl ${opacity} rotate-45 transform origin-center shadow-sm`} />
            </div>
        </motion.div>
    );
}

// === Wajik Solid (Isi) ===
export function DiamondSolid({ 
    className = "", 
    size = "w-64 h-64", 
    bgColor = "bg-white",
    opacity = "opacity-10",
    blur = "backdrop-blur-sm",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    bgColor?: string;
    opacity?: string;
    blur?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-20px", "20px", "-20px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <div className={`w-full h-full ${animate} flex items-center justify-center`}>
                <div className={`${size} ${bgColor} ${opacity} ${blur} rounded-3xl rotate-45 transform origin-center shadow-lg`} />
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
    dotColor = "white",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    opacity?: string;
    dotSize?: string;
    spacing?: string;
    dotColor?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ y: ["-10px", "10px", "-10px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div 
                className={`w-full h-full ${size} ${opacity} ${animate}`}
                style={{ 
                    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`, 
                    backgroundSize: `${spacing} ${spacing}` 
                }} 
            />
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
    dotColor = "white",
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
                className={`w-full h-full ${size} ${opacity} ${animate}`}
                style={{ 
                    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`, 
                    backgroundSize: `${spacing} ${spacing}`,
                    clipPath: clipPath
                }} 
            />
        </motion.div>
    );
}

// === Lingkaran Blur (Glowing Circle) ===
export function GlowCircle({ 
    className = "", 
    size = "w-16 h-16", 
    opacity = "opacity-40",
    blur = "blur-md",
    animate = ""
}: { 
    className?: string; 
    size?: string; 
    opacity?: string;
    blur?: string;
    animate?: string;
}) {
    return (
        <motion.div 
            className={`absolute ${className}`}
            animate={{ 
                y: ["-15px", "15px", "-15px"],
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className={`w-full h-full ${animate}`}>
                <div className={`${size} bg-white rounded-full ${opacity} ${blur}`} />
            </div>
        </motion.div>
    );
}
