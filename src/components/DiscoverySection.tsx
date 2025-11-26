"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// --- Mock Data (بدون نیاز به بک‌اند) ---
const mockCafes = [
  { id: 1, name: "کافه راشا", type: "کافه برد", location: "ولیعصر", rating: 4.8, img: "https://picsum.photos/seed/cafe1/300" },
  { id: 2, name: "قهوه دمی", type: "کافی شاپ", location: "پاسداران", rating: 4.5, img: "https://picsum.photos/seed/cafe2/300" },
  { id: 3, name: "گیم‌لند", type: "گیم سنتر", location: "شهرک غرب", rating: 4.9, img: "https://picsum.photos/seed/cafe3/300" },
  { id: 4, name: "کافه هنر", type: "کافه کتاب", location: "انقلاب", rating: 4.3, img: "https://picsum.photos/seed/cafe4/300" },
];

const mockEvents = [
  { id: 101, name: "تورنومنت Catan", type: "بردگیم", location: "گیم‌لند", date: "جمعه", img: "https://picsum.photos/seed/event1/300" },
  { id: 102, name: "شب مافیا حرفه‌ای", type: "شب مافیا", location: "کافه راشا", date: "چهارشنبه", img: "https://picsum.photos/seed/event2/300" },
  { id: 103, name: "مسابقه بیلیارد", type: "مسابقه", location: "باشگاه آس", date: "شنبه", img: "https://picsum.photos/seed/event3/300" },
  { id: 104, name: "لایو آکوستیک", type: "موسیقی", location: "کافه هنر", date: "دوشنبه", img: "https://picsum.photos/seed/event4/300" },
];

// --- کامپوننت کارت (شیشه‌ای مدرن) ---
const DiscoveryCard = ({ item, type, onNavigate }: any) => {
  const isCafe = type === "cafes";
  const handleClick = () => onNavigate(isCafe ? "cafeDetail" : "eventDetail", { id: item.id });

  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      whileHover={{ scale: 1.05, rotateZ: 1, transition: { duration: 0.2 } }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative w-full h-40">
        <Image
          src={item.img}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
        
        {/* Type & Location */}
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span className="bg-cyan-600/20 text-cyan-400 px-2 py-0.5 rounded-full text-xs">
            {isCafe ? item.type : item.date}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 ml-1 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </span>
        </div>

        {/* Rating/Action Button */}
        {isCafe && (
          <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-yellow-400 font-bold flex items-center">
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
              {item.rating}
            </span>
            <button 
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm font-medium"
                onClick={(e) => { e.stopPropagation(); handleClick(); }}
            >
                رزرو و جزئیات →
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- کامپوننت اصلی ---
const DiscoverySection: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState("cafes");
  const displayData = activeTab === "cafes" ? mockCafes : mockEvents;

  // Parallax (اختیاری)
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); 
  
  // انیمیشن برای Switch شدن Tabs
  const gridVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05, duration: 0.3 } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <motion.section 
      ref={ref} 
      style={{ y }} // اعمال Parallax
      className="py-16 px-4 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* عنوان مدرن */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            <span className="neon-text-cyan">کشف</span> کافه‌ها و رویدادها
          </h2>
          <p className="text-gray-400 mt-2">جستجو، انتخاب و رزرو آسان</p>
        </motion.div>

        {/* --- Tabs Switcher (سوییچ Tabs با استایل حرفه‌ای) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center p-1 bg-gray-800/70 border border-gray-700/50 rounded-full max-w-sm mx-auto mb-12"
        >
          <button
            onClick={() => setActiveTab("cafes")}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 z-10 ${
              activeTab === "cafes" ? "text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            {activeTab === "cafes" && (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-0 bg-cyan-400 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative">کافه‌ها</span>
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 z-10 ${
              activeTab === "events" ? "text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            {activeTab === "events" && (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-0 bg-fuchsia-400 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative">رویدادها</span>
          </button>
        </motion.div>

        {/* --- Content Grid --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // کلید برای فعال کردن AnimatePresence هنگام تغییر تب
            variants={gridVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {displayData.map((item) => (
              <DiscoveryCard 
                key={item.id} 
                item={item} 
                type={activeTab} 
                onNavigate={onNavigate} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default DiscoverySection;