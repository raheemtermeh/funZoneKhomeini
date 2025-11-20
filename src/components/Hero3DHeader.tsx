// src/components/Hero3DHeader.tsx
import React, { useState, useEffect } from "react";
import img1 from "../../public/images/Copilot_20251108_134134.png";
import img2 from "../../public/images/17a4be57-9f30-4b14-98f5-c6b6dc6d6a57.jpg";

const Hero3DHeader: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [img1.src, img2.src];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // هر ۶ ثانیه عوض می‌شود
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white">
      {/* --- تصاویر زمینه با افکت تعویض --- */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            activeImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* --- لایه سایه و درخشش رنگی همزمان با تعویض تصویر --- */}
      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ${
          activeImage === 0
            ? "bg-[radial-gradient(circle_at_center,_rgba(255,0,17,0.4)_0%,_transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.4)_0%,_transparent_70%)]"
        } mix-blend-overlay`}
      ></div>

      {/* --- Overlay تاریک برای عمق سه‌بعدی --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 mix-blend-overlay"></div>

      {/* --- نور در پایین برای حس sci-fi --- */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent blur-2xl"></div>

      {/* --- محتوای اصلی روی بنر --- */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
          <span className="text-cyan-400">FUN ZONE</span>
          <span className="text-yellow-400">HALL</span> OF FAME
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 opacity-90">
          دنیای بازی و افتخار! ببین چه کسی قهرمان ماه شده 👑
        </p>

        <button className="mt-8 px-8 py-3 text-lg font-bold bg-cyan-500/70 hover:bg-yellow-400/80 text-black rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,0,0.6)]">
          🎮 ورود به بازی
        </button>
      </div>
    </div>
  );
};

export default Hero3DHeader;
