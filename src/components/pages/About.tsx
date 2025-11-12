import React from "react";
// 🟢 اضافه شدن useScroll و useTransform برای افکت پارالاکس
import { motion, useScroll, useTransform } from "framer-motion";

// 🟢 اعضای تیم به ۶ نفر افزایش یافت و داده‌ها کمی بهتر شد
const teamMembers = [
  {
    name: "علی احمدی",
    role: "بنیان‌گذار و مدیرعامل",
    img: "https://i.pravatar.cc/150?u=ali",
    bio: "راهبر تیم و معمار اصلی پلتفرم FunZone. عاشق مافیا و Catan."
  },
  {
    name: "سارا محمدی",
    role: "مدیر فنی (CTO)",
    img: "https://i.pravatar.cc/150?u=sara",
    bio: "متخصص React و GoLang. تضمین‌کننده سرعت و پایداری وبسایت."
  },
  {
    name: "رضا قاسمی",
    role: "مدیر بازاریابی",
    img: "https://i.pravatar.cc/150?u=reza",
    bio: "مسئول رشد جامعه کاربران و کمپین‌های تبلیغاتی جذاب."
  },
  {
    name: "مریم حسینی",
    role: "مدیر تجربه کاربری (UX)",
    img: "https://i.pravatar.cc/150?u=maryam",
    bio: "خالق رابط کاربری ساده و کاربرپسند FunZone."
  },
  {
    name: "کیوان صادقی",
    role: "توسعه‌دهنده بک‌اند (Go)",
    img: "https://i.pravatar.cc/150?u=keyvan",
    bio: "مدیریت پایگاه داده و زیرساخت قوی سمت سرور."
  },
  {
    name: "نازنین پرویزی",
    role: "کارشناس تولید محتوا",
    img: "https://i.pravatar.cc/150?u=nazanin",
    bio: "مسئول نگارش مطالب جذاب و معرفی کافه‌ها و بازی‌های جدید."
  },
];

const timelineEvents = [
  {
    year: "۱۴۰۱",
    event: "شکل‌گیری ایده اولیه فان زون در یک دورهمی بازی مافیا.",
  },
  {
    year: "۱۴۰۲",
    event: "راه‌اندازی نسخه آزمایشی وبسایت با همکاری ۱۰ کافه در تهران.",
  },
  {
    year: "۱۴۰۳",
    event: "انتشار اپلیکیشن موبایل و عبور از مرز ۵۰,۰۰۰ کاربر فعال.",
  },
  {
    year: "آینده",
    event:
      "گسترش به شهرهای جدید، افزودن رویدادهای ورزشی و ورود به بازارهای بین‌المللی.",
  },
];

const jobOpenings = [
  { title: "کارشناس ارشد React", location: "تهران - حضوری", type: "تمام وقت" },
  { title: "مدیر دیجیتال مارکتینگ", location: "دورکاری", type: "تمام وقت" },
  {
    title: "کارشناس پشتیبانی مشتریان",
    location: "تهران - حضوری",
    type: "پاره وقت",
  },
];

// 🎨 تعریف انیمیشن کانتینر برای Staggering
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // تأخیر بین نمایش هر کارت
        },
    },
};

// 🎨 تعریف انیمیشن آیتم برای هر کارت
const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

// 🌟 TeamCard جدید با انیمیشن بهتر
const TeamCard: React.FC<{ member: (typeof teamMembers)[0] }> = ({
  member,
}) => (
  <motion.div
    className="text-center group p-4 bg-gray-900/50 rounded-xl border border-white/10 hover:border-fuchsia-500 transition-all cursor-pointer"
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(255, 0, 255, 0.2)" }}
  >
    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/50 group-hover:border-fuchsia-400 transition-colors">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <h4 className="text-xl font-extrabold text-white mt-4 neon-text-cyan">
      {member.name}
    </h4>
    <p className="text-sm font-bold text-fuchsia-300 mt-1">{member.role}</p>
    <p className="text-xs text-gray-400 mt-3 h-10 overflow-hidden line-clamp-2">
        {member.bio}
    </p>
  </motion.div>
);

const AboutPage: React.FC = () => {
    // 🟢 ۱. استفاده از useScroll برای افکت پارالاکس
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -400]); // حرکت به سمت بالا در اسکرول

    // 🟢 ۲. انیمیشن چرخیدن لوگو در هدر
    const cubeVariants = {
        animate: {
            rotate: [0, 180, 180, 0],
            scale: [1, 1.1, 1.1, 1],
            borderRadius: ["20%", "20%", "50%", "50%"],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // 🟢 ۳. انیمیشن عمومی برای بخش‌ها
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" 
            } 
        },
    };

  return (
    <div className="min-h-screen bg-black pt-12 pb-24 relative overflow-hidden">
        {/* 🟢 افکت پارالاکس در پس زمینه */}
        <motion.div
            style={{ y: yParallax }}
            className="absolute top-0 left-0 w-full h-[150vh] bg-cover opacity-10 bg-center"


        >
            <div className="w-full h-full bg-cyan-500/10 blur-3xl opacity-50"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center justify-center gap-4">
                    <motion.div 
                        className="w-10 h-10 bg-fuchsia-500/80 rounded-xl shadow-lg shadow-fuchsia-500/50"
                        variants={cubeVariants}
                        animate="animate"
                    >
                        <div className="w-full h-full flex items-center justify-center text-xl font-black text-black">F</div>
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-cyan">
                        داستان فان زون 🚀
                    </h1>
                </div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    ما باور داریم که بهترین لحظات زندگی در کنار هم و با سرگرمی‌های جذاب
                    رقم می‌خورد. فان زون با هدف ایجاد یک پلتفرم جامع برای علاقه‌مندان به
                    بازی‌های گروهی و دورهمی‌های کافه‌ای ایجاد شد تا پیدا کردن
                    سرگرمی بعدی شما، از همیشه آسان‌تر باشد.
                </p>
            </motion.div>

            <motion.div 
                className="mb-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants} // انیمیشن ورود برای کل بخش
            >
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    تیم رؤیایی ما ✨
                </h2>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {teamMembers.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </motion.div>
            </motion.div>

            <motion.div 
                className="mb-24 max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants} // انیمیشن ورود برای کل بخش
            >
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    مسیر ما 🗺️
                </h2>
                <div className="relative border-r-2 border-cyan-500/50 mr-4">
                    {timelineEvents.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-8 flex items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -right-2.5 border-4 border-black ring-2 ring-cyan-500"></div>
                            <div className="bg-gray-900/50 border border-white/10 p-4 rounded-lg mr-10 w-full">
                                <p className="font-bold text-xl text-cyan-400 mb-1">
                                    {item.year}
                                </p>
                                <p className="text-white">{item.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="mb-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants} // انیمیشن ورود برای کل بخش
            >
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    فرصت‌های شغلی 💼
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {jobOpenings.map((job, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900/50 border border-white/10 rounded-lg p-4 flex justify-between items-center hover:border-cyan-400 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // 🟢 جلوه فشار دادن
                            whileTap={{ scale: 0.98, backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                        >
                            <div>
                                <h4 className="text-lg font-semibold text-white">
                                    {job.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {job.location} - {job.type}
                                </p>
                            </div>
                            <button className="px-4 py-1 border border-cyan-400 text-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition-colors">
                                ارسال رزومه
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants} // انیمیشن ورود برای کل بخش
            >
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    ارتباط با ما 📞
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 bg-gray-900/50 border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
                    <div className="lg:w-1/2">
                        <h3 className="text-xl text-white font-bold mb-4">فرم تماس</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="نام"
                                className="w-full bg-gray-800 p-2 rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="ایمیل"
                                className="w-full bg-gray-800 p-2 rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                            <textarea
                                placeholder="پیام شما"
                                rows={5}
                                className="w-full bg-gray-800 p-2 rounded text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                            ></textarea>
                            <motion.button
                                type="submit"
                                className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ارسال
                            </motion.button>
                        </form>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-xl text-white font-bold mb-4">آدرس ما</h3>
                        <p className="text-gray-400 mb-4">
                            تهران، خیابان ولیعصر، پارک ملت، برج سایه، طبقه ۱۰
                        </p>
                        <motion.div 
                            className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 border border-white/10"
                            whileHover={{ rotate: 1, scale: 1.02, boxShadow: "0 0 20px rgba(52, 211, 235, 0.4)" }}
                        >
                            [ نقشه در اینجا قرار میگیرد ]
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default AboutPage;