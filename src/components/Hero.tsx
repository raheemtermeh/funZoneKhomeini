import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";

// --- داده‌ها (بدون تغییر) ---
const featuredEvents = [
  {
    title: "قهرمانی مافیا",
    location: "کافه راشا",
    img: "https://picsum.photos/seed/mafiahero/400",
  },
  {
    title: "شب بردگیم",
    location: "کافه برد",
    img: "https://picsum.photos/seed/boardgamehero/400",
  },
  {
    title: "اجرای موسیقی زنده",
    location: "کافه هنر",
    img: "https://picsum.photos/seed/musichero/400",
  },
];

const trendingSearches = [
  "مافیا پیشرفته",
  "Catan",
  "کافه نزدیک پارک ملت",
  "اتاق فرار",
];

// --- داده‌های جدید برای تبلیغ کافه‌ها (Reservation Benefits) ---
const cafePromotionValues = [
  {
    title: "رزرو تضمینی میز",
    desc: "تایید لحظه‌ای و رزرو اختصاصی بهترین جایگاه برای بازی‌های شما.",
    icon: "✅",
    color: "cyan",
  },
  {
    title: "کدهای تخفیف انحصاری",
    desc: "دریافت کوپن‌های ویژه منو و ورودی فقط با رزرو از پلتفرم فان زون.",
    icon: "💳",
    color: "fuchsia",
  },
  {
    title: "امتیازات وفاداری",
    desc: "کسب امتیاز و جوایز نقدی با هر بار رزرو میز از طریق اپلیکیشن.",
    icon: "🌟",
    color: "lime",
  },
];

// --- کامپوننت اصلی Hero ---
const Hero: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({
  onNavigate,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-500, 500], [8, -8]);
  const rotateY = useTransform(mouseX, [-500, 500], [-8, 8]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <section
        className="relative pt-20 pb-40 min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-grid"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black"></div>
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ rotateX, rotateY, transformPerspective: "1000px" }}
        >
          {/* تقویت جلوه‌های نئون پس‌زمینه */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"
            style={{ boxShadow: "0 0 100px #0ff" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"
            style={{ boxShadow: "0 0 100px #f0f" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"
            style={{ boxShadow: "0 0 100px #00f" }}
          ></div>
        </motion.div>
        <motion.div
          className="relative z-10 p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            به <span className="neon-text-cyan">فان زون</span> خوش آمدید
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            پاتوق سرگرمی و رویدادهای هیجان‌انگیز. مافیا، بازی‌های رومیزی و
            بهترین کافه‌ها، همه در یکجا.
          </p>
          {/* باکس مزایای کافه‌ها: استایل ماژول رزرو VIP نئون */}
          <motion.div
            className="mt-12 w-full max-w-3xl mx-auto bg-black/20 backdrop-blur-lg p-8 rounded-t-lg rounded-b-[50px] border-t border-b-2 border-r border-l border-cyan-500/80 shadow-2xl shadow-cyan-900/60" // تغییرات استایل باکس
            initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-3xl font-extrabold text-white mb-8 drop-shadow-[0_0_8px_#0ff]">
              چرا از <span className="text-cyan-400">فان زون</span> رزرو کنیم؟
            </h3>
            {/* کارت‌های مزایای رزرو */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cafePromotionValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-5 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-fuchsia-500/30 shadow-md transform-gpu cursor-pointer transition-all duration-300" // تغییر به گرادیان تیره
                  variants={itemVariants}
                  whileHover={{
                    y: -12, // حرکت به بالا بیشتر
                    scale: 1.08,
                    boxShadow: `0 0 35px rgba(236, 72, 153, 0.7)`, // سایه نئون فوشیا قوی
                    rotateY: 5,
                  }}
                  style={{
                    boxShadow: `0 0 10px rgba(59, 230, 255, 0.2)`, // سایه نئون فیروزه‌ای ضعیف دائمی
                  }}
                >
                  <span
                    className={`text-4xl ${
                      value.color === "fuchsia"
                        ? "text-fuchsia-400"
                        : value.color === "cyan"
                        ? "text-cyan-400"
                        : "text-lime-400"
                    } drop-shadow-[0_0_10px_#fff] block mb-3`} // آیکون درخشان‌تر
                  >
                    {value.icon}
                  </span>
                  <h4 className="font-extrabold text-white mb-1 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            {/* CTA نهایی: هدایت به صفحه کافه‌ها */}
            <div className="mt-6 border-t-2 border-fuchsia-500/80 pt-6">
              {/* مرز فوشیا ضخیم‌تر */}
              <motion.button
                onClick={() => onNavigate("cafes")}
                className="w-full sm:w-2/3 mx-auto px-10 py-4 bg-cyan-500 text-black font-extrabold text-xl rounded-full transition-all duration-300 shadow-[0_0_30px_#0ff] hover:shadow-[0_0_60px_#0ff] hover:bg-cyan-400 hover:scale-[1.07] flex items-center justify-center gap-3 transform-gpu" // دکمه نئون سایان
                style={{ perspective: "1000px" }}
                whileHover={{
                  scale: 1.07,
                  rotateZ: [0, 0.5, -0.5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl animate-pulse">☕</span> شروع رزرو VIP
                کافه
              </motion.button>
            </div>
          </motion.div>
          {/* محتوای کامنت شده اصلی (برای مرجع) - حفظ شده */}
          {/*
          <motion.div
  className="mt-12 w-full max-w-4xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
 >
 <h3 className="text-white mb-4">رویدادهای ویژه</h3>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 {featuredEvents.map((event, index) => (
  <motion.div
  key={index}
  className="relative rounded-lg overflow-hidden group border border-white/10"
  whileHover={{ scale: 1.05, y: -5 }}
  >
  <img
  src={event.img}
  className="w-full h-32 object-cover"
  alt={event.title}
  />
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="absolute bottom-0 p-2 text-right">
  <h4 className="font-bold text-white text-sm">
  {event.title}
  </h4>
  <p className="text-xs text-gray-300">{event.location}</p>
  </div>
  </motion.div>
 ))}
 </div>
 </motion.div>
          */}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
