import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500); // 3.5 seconds per slide
        return () => clearInterval(timer);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {/* Carousel Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 rounded-full transition-all duration-500 ${
                                idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export function Sejarah() {
    const timelineData = [
        {
            year: "1980",
            title: "AWAL MULA",
            description: "GKI Damai adalah sekelompok warga Darmo Permai dan sekitarnya, yang merasa terlalu jauh untuk beribadah di GKI Diponegoro Surabaya, terutama bagi anak-anak sekolah minggu.",
            image: "/images/about-us/awal-mula.png",
            align: "right"
        },
        {
            year: "1981",
            title: "KA DARMO PERMAI",
            description: "Kemudian pada November 1981 berdirilah Persekutuan Komisi Anak GKI Diponegoro di daerah Darmo Permai mengambil tempat di rumah Kel. Bpk. Gunawan & Ibu Sienta Jln DPU I/48. Inilah embrio yang kelak menjadi GKI Damai.\n\nKemudian atas kebaikan PPPK Petra, tempat tersebut akhirnya dipindahkan ke tempat yang lebih leluasa, yaitu SD Petra X Darmo Harapan, kemudian dibentuklah Kebaktian Umum.",
            image: "/images/about-us/ka-darmo-permai.png",
            align: "left"
        },
        {
            year: "1989",
            title: "TEMPAT YANG BARU",
            description: "Setelah berkembang selama beberapa tahun, kebutuhan dan keinginan untuk mempunyai tempat ibadah sendiri mulai muncul. Melalui doa dan perjuangan yang panjang, akhirnya pada tanggal 23 April 1989 penandatanganan pembelian tanah di notaris dapat dilaksanakan.",
            image: "/images/about-us/tempat-yang-baru.png",
            align: "right"
        },
        {
            year: "1994",
            title: "KEBAKTIAN PENDEWASAAN",
            description: "Akhirnya pada tanggal 9 Nopember 1994 GKI Darmo Permai dikukuhkan sebagai gereja dewasa, melalui kebaktian Pendewasaan.",
            images: [
                "/images/about-us/kebaktian-pendewasaan/1.png",
                "/images/about-us/kebaktian-pendewasaan/2.png",
                "/images/about-us/kebaktian-pendewasaan/3.png",
            ],
            align: "left"
        },
        {
            year: "", // No year for this item based on design
            title: "PERJUANGAN BERLANJUT",
            description: "Setelah berkembang selama beberapa tahun, kebutuhan dan keinginan untuk mempunyai tempat ibadah sendiri mulai muncul. Melalui doa dan perjuangan yang panjang, akhirnya pada tanggal 23 April 1989 penandatanganan pembelian tanah di notaris dapat dilaksanakan.",
            images: [
                "/images/about-us/perjuangan-berlanjut/1.png",
                "/images/about-us/perjuangan-berlanjut/2.png",
            ],
            align: "right",
            hideYear: true
        }
    ];

    return (
        <section className="relative w-full py-24 bg-white">
            {/* Background Decorative Elements */}
            <motion.div 
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-0 w-[40%] h-full pointer-events-none opacity-20"
            >
                <BrandDecoLeft className="-translate-x-32 scale-125" />
            </motion.div>
            <motion.div 
                animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -2, 0]
                }}
                transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 right-0 w-[40%] h-full pointer-events-none opacity-20 flex justify-end items-end"
            >
                <BrandDecoRight className="translate-x-32 scale-125" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
                        PERJALANAN IMAN YANG DIMULAI DARI PERSEKUTUAN KECIL HINGGA MENJADI KOMUNITAS YANG BERTUMBUH
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase">
                        SEJARAH GKI DAMAI
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative w-full mx-auto flex flex-col items-center">
                    
                    {/* Vertical Center Line - Growing Effect */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gray-100 md:-translate-x-1/2 z-0">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="w-full bg-[#7a9d54]"
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="w-full space-y-8 md:space-y-0">
                        {timelineData.map((item, index) => {
                            const isLeft = item.align === 'left';
                            
                            return (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start w-full group ${index > 0 ? 'md:-mt-16 lg:-mt-20' : ''} ${index === timelineData.length - 1 ? 'pb-12' : ''}`}
                                >
                                    
                                    {/* Timeline Dot (Hollow Circle) */}
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="absolute left-[32px] md:left-1/2 top-8 w-5 h-5 bg-white border-[4px] border-[#7a9d54] rounded-full transform -translate-x-1/2 z-20 shadow-sm group-hover:scale-125 transition-transform duration-300"
                                    />

                                    {/* Left Alignment Container */}
                                    {isLeft && (
                                        <div className="w-full md:w-1/2 pl-16 md:pl-0 pr-0 md:pr-12 lg:pr-16 flex flex-col items-start md:items-end">
                                            <div className="flex flex-row md:flex-row-reverse w-full items-start gap-4 lg:gap-8">
                                                
                                                {/* Year Typography */}
                                                {!item.hideYear && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        className="text-[60px] md:text-[80px] lg:text-[100px] font-black leading-[0.8] select-none flex flex-col mt-4"
                                                        style={{
                                                            color: 'transparent',
                                                            WebkitTextStroke: '2px #7a9d54',
                                                        }}
                                                    >
                                                        <span>{item.year.substring(0, 2)}</span>
                                                        <span>{item.year.substring(2, 4)}</span>
                                                    </motion.div>
                                                )}

                                                {/* Content block */}
                                                <div className="flex flex-col flex-1 w-full text-left mt-2">
                                                    <div className="mb-6 w-full">
                                                        {item.images ? (
                                                            item.images.length === 3 ? (
                                                                <div className="flex gap-3 md:gap-4 w-full">
                                                                    <div className="flex flex-col gap-3 md:gap-4 w-[40%]">
                                                                        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                            <img src={item.images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                            <img src={item.images[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                    </div>
                                                                    <motion.div whileHover={{ scale: 1.02 }} className="w-[60%] aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                        <img src={item.images[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                                                                        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                                                                            <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                                                                            <div className="h-1.5 w-4 rounded-full bg-white" />
                                                                            <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                                                                        </div>
                                                                    </motion.div>
                                                                </div>
                                                            ) : (
                                                                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                                                                    {item.images.map((img, idx) => (
                                                                        <motion.div 
                                                                            key={idx}
                                                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                                                            className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer"
                                                                        >
                                                                            <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )
                                                        ) : item.image ? (
                                                            <motion.div whileHover={{ scale: 1.02 }} className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                                            </motion.div>
                                                        ) : null}
                                                    </div>
                                                    
                                                    <h3 className="text-[22px] md:text-[26px] font-black text-[#1a1a1a] mb-3 uppercase tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                    <div className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed space-y-4">
                                                        {item.description.split('\n\n').map((paragraph, pIdx) => (
                                                            <p key={pIdx}>{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Right Alignment Container */}
                                    {!isLeft && (
                                        <div className="w-full md:w-1/2 ml-auto pl-16 md:pl-10 lg:pl-16 flex flex-col items-start mt-[-20px] md:mt-0">
                                            <div className="flex flex-row w-full items-start gap-4 lg:gap-8">
                                                
                                                {/* Year Typography */}
                                                {!item.hideYear && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        className="text-[60px] md:text-[80px] lg:text-[100px] font-black leading-[0.8] select-none flex flex-col mt-4"
                                                        style={{
                                                            color: 'transparent',
                                                            WebkitTextStroke: '2px #7a9d54',
                                                        }}
                                                    >
                                                        <span>{item.year.substring(0, 2)}</span>
                                                        <span>{item.year.substring(2, 4)}</span>
                                                    </motion.div>
                                                )}

                                                {/* Content block */}
                                                <div className="flex flex-col flex-1 w-full text-left mt-2">
                                                    <div className="mb-6 w-full">
                                                        {item.images ? (
                                                            item.images.length === 3 ? (
                                                                <div className="flex gap-3 md:gap-4 w-full">
                                                                    <div className="flex flex-col gap-3 md:gap-4 w-[40%]">
                                                                        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                            <img src={item.images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                            <img src={item.images[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                    </div>
                                                                    <motion.div whileHover={{ scale: 1.02 }} className="w-[60%] aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                        <img src={item.images[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                                                                    </motion.div>
                                                                </div>
                                                            ) : (
                                                                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                                                                    {item.images.map((img, idx) => (
                                                                        <motion.div 
                                                                            key={idx}
                                                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                                                            className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer"
                                                                        >
                                                                            <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )
                                                        ) : item.image ? (
                                                            <motion.div whileHover={{ scale: 1.02 }} className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm relative group cursor-pointer">
                                                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                                            </motion.div>
                                                        ) : null}
                                                    </div>
                                                    
                                                    <h3 className="text-[22px] md:text-[26px] font-black text-[#1a1a1a] mb-3 uppercase tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                    <div className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed space-y-4">
                                                        {item.description.split('\n\n').map((paragraph, pIdx) => (
                                                            <p key={pIdx}>{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
