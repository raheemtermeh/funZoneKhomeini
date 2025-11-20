import React, { useState } from 'react'
import { motion } from "framer-motion";
const Faq = () => {
      const [openFaq, setOpenFaq] = useState<number | null>(0);
    const faqs = [
      {
        q: "چگونه می‌توانم کافه خود را ثبت کنم؟",
        a: "از طریق پنل کافه‌داران می‌توانید به سادگی و به صورت رایگان کافه و رویدادهای خود را ثبت کنید.",
      },
      {
        q: "مدل درآمدی فان زون چیست؟",
        a: "ما درصدی از هزینه هر رویداد موفق را به عنوان کمیسیون دریافت می‌کنیم. ثبت کافه رایگان است.",
      },
      {
        q: "آیا امکان همکاری تبلیغاتی وجود دارد؟",
        a: "بله، برای اطلاع از پکیج‌های اسپانسری و همکاری‌های ویژه، لطفا با ما تماس بگیرید.",
      },
    ];

  return (
    <div>
      <div className="flex flex-col px-6 lg:flex-row gap-10 items-start">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-bold text-white mb-6">سوالات متداول</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-right p-4 font-semibold text-white flex justify-between items-center"
                >
                  {faq.q}
                  <span>{openFaq === i ? "-" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="lg:w-1/2 w-full bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            با ما در ارتباط باشید
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="نام شما"
              className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="پیام شما..."
              rows={4}
              className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-cyan-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-cyan-400 neon-border-cyan hover:shadow-none"
            >
              ارسال پیام
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Faq