import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// --- داده‌های ثابت (برای Modal) ---
const CONTACT_NUMBER_FA = "+۹۸ ۹۱۲ XXX XX XX";

// --- 1. کامپوننت AnimatedCounter (شمارنده متحرک) ---
const AnimatedCounter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      // منطق ساده شمارنده
      let start = 0;
      const duration = 2000;
      const end = to;
      let startTime: number | null = null;
      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step); // نکته: کنترل‌های stop در این پیاده‌سازی ساده‌شده حذف شدند.
    }
  }, [inView, to]); // استفاده از toLocaleString("fa-IR") برای نمایش اعداد فارسی

  return <span ref={ref}>{count.toLocaleString("fa-IR")}</span>;
};

// --- 2. کامپوننت PartnershipModal (مدال ثبت تلفن) ---
const PartnershipModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"form" | "submitted">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length > 5) {
      // بررسی ساده
      setStatus("submitted");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {" "}
      <motion.div
        className="bg-gray-950/90 border border-fuchsia-500/50 rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-fuchsia-700/50"
        initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateX: -30 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-cyan-400 text-3xl font-light z-10"
        >
          &times;{" "}
        </button>{" "}
        {status === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {" "}
            <h3 className="text-2xl font-extrabold text-white text-center drop-shadow-[0_0_5px_#fff]">
              ثبت درخواست همکاری VIP{" "}
            </h3>{" "}
            <p className="text-gray-400 text-sm text-center">
              لطفا شماره تماس خود را وارد کنید تا تیم پشتیبانی در اولین فرصت با
              شما ارتباط بگیرد.{" "}
            </p>{" "}
            <div className="text-center">
              {" "}
              <span className="text-xs text-cyan-400 font-mono">
                یا با شماره مستقیم: {CONTACT_NUMBER_FA} تماس بگیرید.{" "}
              </span>{" "}
            </div>{" "}
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="شماره تلفن (مثال: ۰۹۱۲xxxxxxx)"
              className="w-full bg-gray-800/60 border border-fuchsia-500/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-center"
              required
            />{" "}
            <motion.button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-black font-extrabold rounded-full shadow-[0_0_20px_#0ff] hover:shadow-[0_0_35px_#0ff] transition-all"
              whileHover={{ scale: 1.02 }}
            >
              ثبت و ارسال{" "}
            </motion.button>{" "}
          </form>
        ) : (
          <div className="text-center space-y-6 p-4">
            <p className="text-5xl animate-bounce">✅</p>{" "}
            <h3 className="text-3xl font-extrabold text-fuchsia-400 drop-shadow-[0_0_8px_#f0f]">
              درخواست شما ثبت شد!{" "}
            </h3>{" "}
            <p className="text-gray-300">
              تیم پشتیبانی فان زون ظرف ۲۴ ساعت آینده جهت هماهنگی همکاری با شما
              تماس خواهد گرفت.{" "}
            </p>{" "}
            <motion.button
              onClick={onClose}
              className="w-full py-3 bg-fuchsia-500 text-white font-extrabold rounded-full transition-all"
              whileHover={{ scale: 1.02 }}
            >
              بستن{" "}
            </motion.button>{" "}
          </div>
        )}{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

// --- 3. کامپوننت Investment (اصلی) ---
const Investment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* المان‌های نئون پس‌زمینه */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animation-delay-2000"></div>
      </div>{" "}
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        {/* باکس همکاری VIP مرکزی (استایل خلاقانه سه‌بعدی) */}{" "}
        <motion.div
          className="w-full max-w-4xl bg-black/50 backdrop-blur-md p-10 rounded-[35px] border-4 border-cyan-500/50 text-center shadow-3xl shadow-cyan-900/70"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, type: "spring" }}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          {" "}
          <motion.h2
            className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_#0ff]"
            whileHover={{ scale: 1.01 }}
          >
            همکار <span className="text-fuchsia-400">آینده</span> فان زون شوید{" "}
          </motion.h2>{" "}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            با ما رشد کنید! ما بزرگترین بستر بازی‌های گروهی هستیم و به دنبال
            کافه‌ها و اسپانسرهای جدید برای گسترش شبکه خود می‌گردیم.{" "}
          </p>
          {/* بخش آمار/اعتبار */}
          <div className="flex justify-center gap-12 mb-10 border-t border-b border-white/10 py-4">
            <div className="text-2xl font-mono">
              <AnimatedCounter to={30} />{" "}
              <span className="text-cyan-400 font-bold">+</span>
              <p className="text-sm text-gray-400 mt-1">کافه همکار</p>
            </div>
            <div className="text-2xl font-mono">
              <AnimatedCounter to={5000} />{" "}
              <span className="text-cyan-400 font-bold">+</span>
              <p className="text-sm text-gray-400 mt-1">بازیکن فعال</p>
            </div>
          </div>{" "}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-1/2 px-10 py-4 bg-[#0891b2] text-white font-extrabold text-xl rounded-full transition-all duration-300 shadow-[0_0_30px_#f0f] hover:shadow-[0_0_50px_#f0f] hover:scale-[1.05] flex items-center justify-center gap-3 mx-auto"
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl animate-pulse"></span> درخواست همکاری{" "}
          </motion.button>{" "}
        </motion.div>{" "}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <PartnershipModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Investment;
