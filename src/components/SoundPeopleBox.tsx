import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
const SoundPeopleBox = () => {
    const testimonials = [
      {
        name: "سارا",
        text: "با فان زون همیشه بهترین ایونت‌های مافیا رو پیدا می‌کنم. عالیه!",
        role: "کاربر",
      },
      {
        name: "کافه برد",
        text: "از وقتی پنل کافه‌داری رو فعال کردیم، تعداد مشتری‌هامون دو برابر شده.",
        role: "کافه‌دار",
      },
      {
        name: "علی",
        text: "اپلیکیشن خیلی روون و کاربردیه. پیدا کردن رویدادها خیلی راحته.",
        role: "کاربر",
      },
    ];

  return (
    <div>
      {/* Testimonials */}
      <div className="mt-24 mb-24">
        <h3 className="text-2xl font-bold text-center text-white mb-8">
          صدای مشتریان ما
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 border border-white/10 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-cyan-400 mr-3">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoundPeopleBox