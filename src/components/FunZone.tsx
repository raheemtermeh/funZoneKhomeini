import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // اضافه کردن AnimatePresence

// --- داده‌ها (تصاویر اصلی) ---
const galleryImages = [
  "https://picsum.photos/seed/gallery1/800/600", // ابعاد بزرگتر برای نمایش در Modal
  "https://picsum.photos/seed/gallery2/800/600",
  "https://picsum.photos/seed/gallery3/800/600",
  "https://picsum.photos/seed/gallery4/800/600",
  "https://picsum.photos/seed/gallery5/800/600",
  "https://picsum.photos/seed/gallery6/800/600",
];

// --- کامپوننت Modal جدید ---
const GalleryModal: React.FC<{
  imgSrc: string;
  index: number;
  onClose: () => void;
}> = ({ imgSrc, index, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-950/90 border-2 border-cyan-500/50 rounded-2xl p-6 max-w-3xl w-full relative shadow-2xl shadow-cyan-700/30"
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-cyan-400 hover:text-white text-3xl font-light z-10"
        >
          &times;
        </button>
        <img
          src={imgSrc}
          alt={`لحظه ${index + 1}`}
          className="w-full max-h-[70vh] object-contain rounded-lg mb-4 border border-fuchsia-500/20"
        />
        <p className="text-sm text-gray-300 text-center border-t border-white/10 pt-3">
          لحظه به یاد ماندنی{" "}
          <span className="text-fuchsia-400 font-bold">#{index + 1}</span> از
          دورهمی‌های فان زون.
        </p>
      </motion.div>
    </motion.div>
  );
};

// انیمیشن‌های ورود موجی برای گالری
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const FunZone: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    index: number;
  } | null>(null);

  // تمام بخش‌های غیر گالری کامنت شده‌اند، بنابراین نیازی به state 'voted' نیست.
  // const [voted, setVoted] = useState(false);

  return (
    <section className="py-20 bg-gray-950 overflow-hidden relative">
      {/* المان‌های پس‌زمینه نئون */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_#f0f]">
            <span className="text-fuchsia-400">گالری خاطرات</span> فان زون
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            لحظات پرشور، قهرمانی‌ها و دورهمی‌های ما در کافه‌های فان زون. برای
            تماشای جزئیات، روی هر تصویر کلیک کنید.
          </p>
        </div>

        {/* --------------- گالری تصاویر مدرن (چینش منظم جدید) -------------- */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer transform-gpu shadow-xl bg-gray-900/50 group"
              variants={itemVariants}
              onClick={() => setSelectedImage({ src: img, index: i })} // ✨ قابلیت مشاهده با کلیک
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 25px rgba(236, 72, 153, 0.7)", // سایه نئون فوشیا
              }}
              style={{
                perspective: "1000px",
                height: "250px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Image with subtle hover effect */}
              <img
                src={img}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                alt={`Gallery image ${i + 1}`}
              />

              {/* Holographic Overlays & View Button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.p
                  className="text-cyan-400 text-lg font-bold border border-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500/20 drop-shadow-[0_0_5px_#0ff]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  مشاهده جزئیات
                </motion.p>
              </div>

              {/* Label at the bottom */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between">
                <p className="text-gray-300 text-sm drop-shadow-md">
                  لحظه{" "}
                  <span className="text-fuchsia-400 font-bold">#{i + 1}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ------------------ Modal ----------------- */}
        <AnimatePresence>
          {selectedImage && (
            <GalleryModal
              imgSrc={selectedImage.src}
              index={selectedImage.index}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </AnimatePresence>

        {/* ------------------ سایر بخش‌ها (کامنت شده) ----------------- */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-16">
          <div className="space-y-8">
            <motion.div
              className="bg-black/30 border border-white/10 rounded-2xl p-6 h-80 flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                چت زنده فان زون
              </h3>
            </motion.div>
            <motion.div
              className="bg-black/30 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                نظرسنجی بازی هفته
              </h3>
            </motion.div>
          </div>

          <motion.div
            className="bg-fuchsia-900/20 border border-fuchsia-500/30 rounded-2xl p-8 text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-lg p-4">
              <p className="font-bold text-white">رویداد بعدی فان زون:</p>
              <p className="text-fuchsia-300 text-lg">
                تورنومنت آنلاین مافیا - جمعه ساعت ۹ شب
              </p>
            </div>
            <button className="w-full px-8 py-3 bg-fuchsia-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_#f0f] hover:shadow-[0_0_25px_#f0f] hover:scale-105">
              ورود به فان زون
            </button>
            <div className="bg-black/30 border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold mb-4 text-white">
                جدول امتیازات هفتگی
              </h3>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="bg-black/30 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                آخرین دستاوردها
              </h3>
            </motion.div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default FunZone;
