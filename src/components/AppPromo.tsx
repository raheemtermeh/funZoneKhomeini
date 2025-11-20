import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";

// --- داده‌ها (بدون تغییر) ---
const userFeatures = [
  {
    icon: "🎮",
    title: "مشاهده رویدادها",
    desc: "تمام رویدادهای هیجان‌انگیز را در یک جا مشاهده کنید.",
  },
  {
    icon: "☕",
    title: "کشف کافه‌ها",
    desc: "بهترین کافه‌های بازی شهر را پیدا کنید.",
  },
  {
    icon: "🏆",
    title: "جامعه کاربری فعال",
    desc: "به جامعه‌ای از گیمرها بپیوندید و دوستان جدید پیدا کنید.",
  },
];

const businessFeatures = [
  {
    icon: "📝",
    title: "معرفی رویدادها",
    desc: "رویدادهای خود را به راحتی معرفی و اطلاع‌رسانی کنید.",
  },
  {
    icon: "📈",
    title: "افزایش مشتریان",
    desc: "هزاران کاربر جدید را به سمت کافه خود جذب کنید.",
  },
  {
    icon: "📊",
    title: "ابزارهای تحلیلی",
    desc: "آمار دقیق بازدیدها و علاقه‌مندی‌ها را مشاهده کنید.",
  },
];

// انیمیشن‌های ورود موجی برای لیست ویژگی‌ها
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const AppPromo: React.FC = () => {
  const userAppImg = "https://picsum.photos/seed/appuser/300/600";
  const businessAppImg = "https://picsum.photos/seed/appbusiness/300/600";

  return (
    <section className="py-24 bg-grid relative overflow-hidden">
      {/* نوار نئون جداکننده */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-cyan-500/0 via-fuchsia-500 to-cyan-500/0 shadow-[0_0_10px_#f0f]"></div>{" "}
      <div className="container mx-auto px-4 relative z-10">
        {" "}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fuchsia-400">یک اپ،</span> دو جهان{" "}
        </motion.h2>{" "}
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          ابزارهای مخصوص خود را در اپلیکیشن فان زون دانلود کنید:{" "}
          <span className="text-cyan-400">تجربه کاربری</span> یا{" "}
          <span className="text-fuchsia-400">مدیریت کسب‌وکار</span>.{" "}
        </p>{" "}
        <div className="flex flex-col xl:flex-row items-start justify-between gap-16">
          {" "}
          {/* ------------------- Left Side: User Features (Cyan) ------------------- */}{" "}
          <div className="w-full xl:w-[35%] order-2 xl:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={listVariants}
            >
              <h3 className="text-3xl font-bold mb-8 text-right text-cyan-400 drop-shadow-[0_0_5px_#0ff] border-b-2 border-cyan-500/50 pb-2">
                <Users className="inline ml-3 w-7 h-7" /> مزایای کاربران
              </h3>
              <ul className="space-y-6">
                {userFeatures.map((feature) => (
                  <motion.li
                    key={feature.title}
                    className="flex items-start gap-4 text-right bg-gray-800/50 p-4 rounded-xl border-r-4 border-cyan-500 shadow-xl shadow-black/30 hover:bg-gray-700/60 transition-colors cursor-default"
                    variants={itemVariants}
                  >
                    <span className="text-3xl text-cyan-300 drop-shadow-md">
                      {feature.icon}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-white text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* User Download QR & Buttons */}
              <div className="mt-12 flex items-center justify-end gap-6 p-4 bg-gray-800/70 rounded-xl border border-cyan-500/30 shadow-xl shadow-cyan-900/30">
                <div className="flex flex-col gap-3">
                  <motion.button
                    className="px-5 py-2.5 bg-cyan-600 text-black font-bold rounded-lg text-md shadow-[0_0_15px_#0ff] hover:shadow-[0_0_25px_#0ff] transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    کافه بازار (نسخه کاربر)
                  </motion.button>
                  <motion.button
                    className="px-5 py-2.5 bg-gray-700 text-white rounded-lg text-md border border-gray-600 hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    مایکت (نسخه کاربر)
                  </motion.button>
                </div>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=funzone-user-app&bgcolor=000000&color=06b6d4`}
                  alt="User QR Code"
                  className="rounded-lg border-2 border-cyan-500 shadow-[0_0_10px_#0ff] bg-white p-1"
                />
              </div>
            </motion.div>{" "}
          </div>{" "}
          {/* ------------------- Center: Dual Holographic Mockups (Increased Spacing) ------------------- */}{" "}
          <div className="w-full xl:w-[30%] order-1 xl:order-2 flex justify-center items-center h-[32rem] min-h-[32rem] max-h-[32rem] py-8">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* User Phone (Cyan) - Increased X offset */}
              <motion.div
                className="absolute w-56 h-[28rem] rounded-[2.5rem] border-4 border-cyan-500/80 p-1.5 shadow-2xl shadow-cyan-500/50 bg-black/50"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1500px",
                  zIndex: 10,
                }}
                initial={{ rotateY: 15, x: -150, opacity: 0 }} // X: -100 -> -150
                whileInView={{ rotateY: 5, x: -75, opacity: 1 }} // X: -50 -> -75
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, type: "spring" }}
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05, z: 20 }}
              >
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative border-2 border-cyan-400/50">
                  <img
                    src={userAppImg}
                    className="w-full h-full object-cover opacity-80"
                    alt="User App"
                  />
                </div>
              </motion.div>

              {/* Business Phone (Fuchsia) - Increased X offset */}
              <motion.div
                className="absolute w-56 h-[28rem] rounded-[2.5rem] border-4 border-fuchsia-500/80 p-1.5 shadow-2xl shadow-fuchsia-500/50 bg-black/50"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1500px",
                  zIndex: 11,
                }}
                initial={{ rotateY: -15, x: 150, opacity: 0 }} // X: 100 -> 150
                whileInView={{ rotateY: -5, x: 75, opacity: 1 }} // X: 50 -> 75
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, type: "spring", delay: 0.1 }}
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05, z: 20 }}
              >
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative border-2 border-fuchsia-400/50">
                  <img
                    src={businessAppImg}
                    className="w-full h-full object-cover opacity-80"
                    alt="Business App"
                  />
                </div>
              </motion.div>
            </div>{" "}
          </div>{" "}
          {/* ------------------- Right Side: Business Features (Fuchsia) ------------------- */}{" "}
          <div className="w-full xl:w-[35%] order-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={listVariants}
            >
              <h3 className="text-3xl font-bold mb-8 text-left text-fuchsia-400 drop-shadow-[0_0_5px_#f0f] border-b-2 border-fuchsia-500/50 pb-2">
                مزایای کافه‌داران <Briefcase className="inline mr-3 w-7 h-7" />
              </h3>
              <ul className="space-y-6">
                {businessFeatures.map((feature) => (
                  <motion.li
                    key={feature.title}
                    className="flex items-start flex-row-reverse gap-4 text-left bg-gray-800/50 p-4 rounded-xl border-l-4 border-fuchsia-500 shadow-xl shadow-black/30 hover:bg-gray-700/60 transition-colors cursor-default"
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-3xl text-fuchsia-300 drop-shadow-md">
                      {feature.icon}
                    </span>
                    <div className="text-right">
                      {" "}
                      {/* برای درست شدن چینش در حالت LTR */}
                      <h4 className="font-extrabold text-white text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Business Download QR & Buttons */}
              <div className="mt-12 flex items-center justify-start gap-6 p-4 bg-gray-800/70 rounded-xl border border-fuchsia-500/30 shadow-xl shadow-fuchsia-900/30">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=funzone-business-app&bgcolor=000000&color=e879f9`}
                  alt="Business QR Code"
                  className="rounded-lg border-2 border-fuchsia-500 shadow-[0_0_10px_#f0f] bg-white p-1"
                />
                <div className="flex flex-col gap-3">
                  <motion.button
                    className="px-5 py-2.5 bg-fuchsia-600 text-white font-bold rounded-lg text-md shadow-[0_0_15px_#f0f] hover:shadow-[0_0_25px_#f0f] transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    کافه بازار (نسخه کافه‌دار)
                  </motion.button>
                  <motion.button
                    className="px-5 py-2.5 bg-gray-700 text-white rounded-lg text-md border border-gray-600 hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    مایکت (نسخه کافه‌دار)
                  </motion.button>
                </div>
              </div>
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default AppPromo;
