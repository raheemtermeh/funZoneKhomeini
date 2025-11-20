import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- داده‌های کمپین‌ها (بدون تغییر) ---
const campaignsData = [
  {
    id: 1,
    name: "شب مافیا",
    img: "https://picsum.photos/seed/mafia/200",
    desc: "تخفیف ویژه گروه‌های بالای ۴ نفر برای تمام شب‌های مافیا در کافه‌های منتخب.",
    countdown: true,
    category: "بازی",
    progress: 75,
    details: {
      gallery: [
        "https://picsum.photos/seed/mafia/400/200",
        "https://picsum.photos/seed/mafiadetail/400/200",
      ],
      location: "کانه‌های منتخب تهران",
      terms: "این تخفیف فقط برای شرکت حضوری معتبر است.",
    },
  },
  {
    id: 2,
    name: "تخفیف قهوه",
    img: "https://picsum.photos/seed/coffee/200",
    desc: "با سفارش هر قهوه، قهوه دوم را با ۵۰٪ تخفیف دریافت کنید. این پیشنهاد فقط برای امروز است!",
    category: "غذا",
    details: {
      gallery: ["https://picsum.photos/seed/coffee/400/200"],
      location: "کافه هنر",
      terms: "فقط برای قهوه‌های دمی معتبر است.",
    },
  },
  {
    id: 3,
    name: "تورنومنت بردگیم",
    img: "https://picsum.photos/seed/boardgame/200",
    desc: "در تورنومنت بزرگ Catan شرکت کنید و جایزه ۵ میلیون تومانی را برنده شوید.",
    countdown: true,
    category: "تورنومنت",
    progress: 40,
    details: {
      gallery: ["https://picsum.photos/seed/boardgame/400/200"],
      location: "کافه برد",
      terms: "ورودی مسابقه ۱۰۰ هزار تومان است.",
    },
  },
  {
    id: 4,
    name: "ایونت ویژه",
    img: "https://picsum.photos/seed/event/200",
    desc: "موسیقی زنده به همراه منوی ویژه شب‌های پنجشنبه در کافه هنر.",
    category: "ویژه",
  },
  {
    id: 5,
    name: "پنجشنبه‌ها",
    img: "https://picsum.photos/seed/thursday/200",
    desc: "شب‌های بازی تا پاسی از شب در تمام کافه‌های همکار فان زون.",
    category: "بازی",
  },
  {
    id: 6,
    name: "جایزه بزرگ",
    img: "https://picsum.photos/seed/prize/200",
    desc: "با هر شرکت در رویداد، یک شانس در قرعه‌کشی هفتگی ما برای بردن یک کنسول بازی دریافت کنید.",
    category: "ویژه",
  },
  {
    id: 7,
    name: "موسیقی زنده",
    img: "https://picsum.photos/seed/music/200",
    desc: "هر آخر هفته با هنرمندان جدید در کافه‌های منتخب. لیست کافه‌ها را در وبسایت ببینید.",
    category: "ویژه",
  },
];

// --- کامپوننت Countdown ---
const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft: { days?: number; hours?: number; minutes?: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-xs font-mono mt-1 text-cyan-400 drop-shadow-[0_0_4px_#00ffff]">
      {timeLeft.days != null && timeLeft.hours != null
        ? `${timeLeft.days} روز ${timeLeft.hours} ساعت مانده`
        : "پایان یافته"}
    </div>
  );
};

// --- کامپوننت Modal ---
const CampaignModal: React.FC<{ campaign: any; onClose: () => void }> = ({
  campaign,
  onClose,
}) => {
  const neonTextClass = "text-white drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]";

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-950/95 border border-fuchsia-500/50 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl shadow-fuchsia-700/30"
        initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateX: 20 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-300 hover:text-fuchsia-400 text-3xl font-light transition-colors z-10"
        >
          &times;
        </button>

        {campaign.details?.gallery?.[0] || campaign.img ? (
          <img
            src={campaign.details?.gallery?.[0] || campaign.img}
            alt={campaign.name}
            className="w-full h-48 object-cover rounded-lg mb-4 border border-cyan-500/20"
          />
        ) : null}

        <h3
          className={`text-3xl font-extrabold text-center mb-2 ${neonTextClass}`}
        >
          {campaign.name}
        </h3>

        <p className="text-gray-400 text-center mb-6 text-sm">
          {campaign.desc}
        </p>

        {campaign.details && (
          <div className="mt-6 border-t border-fuchsia-500/20 pt-4 text-sm space-y-3">
            <p className="flex justify-between items-center bg-gray-900 p-2 rounded-lg border-l-4 border-cyan-500">
              <strong className="text-white">مکان:</strong>

              <span className="text-gray-300 text-left">
                {campaign.details.location}
              </span>
            </p>

            <p className="flex justify-between items-start bg-gray-900 p-2 rounded-lg border-l-4 border-fuchsia-500">
              <strong className="text-white">شرایط:</strong>

              <span className="text-gray-300 text-left">
                {campaign.details.terms}
              </span>
            </p>
          </div>
        )}

        {campaign.countdown && (
          <div className="text-center mt-6 p-2 bg-gray-900 rounded-lg border border-cyan-400/20">
            <p className="text-sm text-gray-300 mb-1">زمان باقی‌مانده:</p>
            <Countdown />
          </div>
        )}

        {campaign.progress !== undefined && (
          <div className="my-6">
            <p className="text-sm text-white mb-2 text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
              ظرفیت باقی‌مانده: **{100 - campaign.progress}%**
            </p>

            <div className="w-full bg-gray-700 rounded-full h-3 border border-fuchsia-500/50 overflow-hidden">
              <div
                className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${campaign.progress}%`,
                  boxShadow: `0 0 10px #ec4899`,
                }}
              ></div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- کامپوننت اصلی Campaigns (کوچک و نئون) ---
const Campaigns: React.FC<{
  onNavigate: (page: string, params?: any) => void;
}> = ({ onNavigate }) => {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const displayedCampaigns = campaignsData;

  return (
    // py-1 برای حداقل فاصله عمودی و استفاده از کلاس bg-grid برای پس‌زمینه نئون
    <section className="py-1 bg-grid">
      <div className="container mx-auto px-4">
        {/* نوار پیمایش افقی کمپین‌ها */}
        <div className="flex items-start space-x-8 space-x-reverse pb-3 overflow-x-auto custom-scrollbar">
          {displayedCampaigns.map((campaign, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center flex-shrink-0 text-center group cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => setSelectedCampaign(campaign)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div // استایل نئون متحرک (Pulse Glow)
                className="w-24 h-24 mt-3 p-0.5 rounded-full border-2 border-transparent ring-2 ring-cyan-400/0 transition-all duration-300 ease-out"
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                }}
                style={{
                  animation: "pulse-glow 3s infinite alternate",
                }} /* ✨ اضافه شده */
              >
                <div // لایه‌ی داخلی تیره و جلوه نئون فوشیا هنگام هاور
                  className="bg-gray-900 w-full h-full p-1 rounded-full overflow-hidden relative"
                >
                  <div
                    className="absolute inset-0 rounded-full border-2 border-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        "0 0 10px rgba(236, 72, 153, 0.8), inset 0 0 10px rgba(236, 72, 153, 0.5)",
                    }}
                  ></div>

                  <img
                    src={campaign.img}
                    alt={campaign.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
              {/* نام و تایمر با استایل نئون */}
              <span className="mt-3 text-sm font-medium text-white drop-shadow-[0_0_4px_#ffffff] group-hover:text-fuchsia-400 transition-colors">
                {campaign.name}
              </span>
              {campaign.countdown && <Countdown />}
            </motion.div>
          ))}
        </div>
      </div>
      {/* کامپوننت Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <CampaignModal
            campaign={selectedCampaign}
            onClose={() => setSelectedCampaign(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Campaigns;
