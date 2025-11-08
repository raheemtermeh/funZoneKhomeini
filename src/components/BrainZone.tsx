"use client";
import React, { useState } from "react";
import { Zap, Brain, Target, Users, BookOpen, Star, Clock, Award, Lightbulb, Video, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NEON_CYAN = "text-cyan-400";
const NEON_PINK = "text-pink-400";
const NEON_LIME = "text-lime-400";
const BG_DARK = "bg-[#0a0a0a]";

// ---------------- داده‌های علمی و توسعه فردی ----------------
const scientificContent = [
  {
    title: "تقویت حافظه کاری",
    description: "بازی‌های پازل و استراتژیک حافظه کاری را افزایش می‌دهند.",
    details: "مطالعات نشان می‌دهند که حل مسائل پیچیده و تمرکز روی چند وظیفه، مغز را برای پردازش سریع‌تر و ذخیره اطلاعات موقت آماده می‌کند.",
    icon: Brain,
    category: "پژوهش علمی",
    image: "https://images.unsplash.com/photo-1581092334432-fd0b6d29b259?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    title: "افزایش سرعت تصمیم‌گیری",
    description: "بازی‌های تحت فشار زمان سرعت پردازش اطلاعات مغز را بالا می‌برند.",
    details: "تصمیم‌گیری سریع در بازی باعث تقویت شبکه‌های عصبی مرتبط با تحلیل سریع، پیش‌بینی و مدیریت ریسک می‌شود.",
    icon: Clock,
    category: "تحلیل بازی",
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c3?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    title: "توسعه هوش هیجانی (EQ)",
    description: "بازی‌های گروهی مهارت‌های EQ را بهبود می‌دهند.",
    details: "این نوع بازی‌ها بازیکن را مجبور به تحلیل زبان بدن و مدیریت هیجانات خود و دیگران می‌کند، که در زندگی واقعی بسیار مفید است.",
    icon: Users,
    category: "روانشناسی",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    title: "تقویت تفکر سیستمی",
    description: "بازی‌های استراتژیک باعث دید یکپارچه و تحلیل سیستم‌ها می‌شوند.",
    details: "تفکر سیستمی در بازی باعث می‌شود بازیکن روابط بین اجزا، پیش‌بینی عواقب و تصمیمات بهینه را بهتر مدیریت کند.",
    icon: Target,
    category: "پژوهش علمی",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    title: "تقویت تمرکز و دقت",
    description: "تمرین‌های روزانه در بازی، توجه و تمرکز را افزایش می‌دهند.",
    details: "تمرکز روی اهداف کوتاه و بلند در بازی باعث افزایش بهره‌وری و کاهش حواس‌پرتی در زندگی واقعی می‌شود.",
    icon: Lightbulb,
    category: "روانشناسی",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
];

// ---------------- نقل قول‌ها ----------------
const quotes = [
  { text: "مهارت استراتژیک، مهمتر از هر نیروی نظامی است.", author: "سان تزو", color: NEON_PINK },
  { text: "تخیل، پیش‌نمایش جاذبه‌های آینده زندگی است.", author: "آلبرت انیشتین", color: NEON_CYAN },
  { text: "بازی‌ها تمرینی برای بقا هستند.", author: "ناپلئون بناپارت", color: NEON_LIME },
  { text: "ذهن انسان، بزرگترین زمین بازی است.", author: "ویکتور هوگو", color: NEON_PINK },
  { text: "تفکر استراتژیک، هنر انجام کارهای درست است.", author: "پیتر دراکر", color: NEON_CYAN },
];

// ---------------- تمرین‌های کوتاه ----------------
const quickExercises = [
  { question: "اگر در یک بازی ۱۰ نفره مافیا، ۳ مافیا، ۱ دکتر و ۱ کارآگاه باشند، چند شهروند عادی باقی می‌ماند؟", answer: "۵ شهروند", difficulty: 'آسان' },
  { question: "معادله زیر را حل کنید: اگر A=2, B=4, C=6 باشد، (A*C) / B = ؟", answer: "3", difficulty: 'متوسط' },
  { question: "کدام مهره شطرنج می‌تواند تنها با یک حرکت، به همه خانه‌های خالی وسط صفحه (d4, d5, e4, e5) برسد؟", answer: "وزیر (Queen)", difficulty: 'سخت' },
  { question: "یک پازل منطقی: ۳ نفر با سن‌های متفاوت (۲۵، ۳۰، ۳۵) در سه خانه کنار هم زندگی می‌کنند، هر کسی با رنگ خاص خانه دارد. رنگ خانه ۳۰ ساله چیست؟", answer: "سبز", difficulty: 'سخت' },
];

// ---------------- تمرین‌های استراتژی طولانی ----------------
const advancedChallenges = [
  {
    title: "چالش استراتژی مافیا",
    description: "تحلیل رفتار بازیکنان و پیش‌بینی حرکت‌های آن‌ها.",
    details: "در این چالش شما باید در طول چند روز بازی، با تحلیل رفتارها و تصمیمات، بهترین استراتژی را انتخاب کنید تا بیشترین امتیاز را کسب کنید.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
  {
    title: "پازل ترکیبی شطرنج",
    description: "چالش پیشرفته برای شطرنج‌بازان حرفه‌ای.",
    details: "این پازل نیاز به تفکر چند مرحله‌ای دارد و شما باید بهترین حرکت را برای هر وضعیت پیدا کنید.",
    image: "https://images.unsplash.com/photo-1612197527101-d299b3f9edc5?crop=entropy&cs=tinysrgb&fit=max&w=400",
  },
];

// ---------------- Modal عمومی ----------------
const Modal: React.FC<{ show: boolean; onClose: () => void; title: string; content: string; image?: string }> = ({ show, onClose, title, content, image }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-cyan-700/50"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {image && <img src={image} alt={title} className="rounded-xl mb-4 w-full object-cover h-48" />}
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h2>
          <p className="text-gray-200">{content}</p>
          <button
            className="mt-4 px-4 py-2 bg-cyan-600/80 hover:bg-cyan-500/90 text-black rounded-lg font-bold transition-all duration-300"
            onClick={onClose}
          >
            بستن
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ---------------- کارت‌های مختلف ----------------
const ScienceCard: React.FC<typeof scientificContent[0]> = ({ title, description, icon: Icon, category, details, image }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <motion.div
        className="bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/50"
        onClick={() => setShowModal(true)}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center justify-between mb-4 border-b border-cyan-800/50 pb-3">
          <div className="flex items-center">
            <Icon className={`w-6 h-6 ml-3 ${NEON_CYAN} drop-shadow-md`} />
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-700/50">{category}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </motion.div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={title} content={details} image={image} />
    </>
  );
};

const ExerciseCard: React.FC<typeof quickExercises[0]> = ({ question, answer, difficulty }) => {
  const [showModal, setShowModal] = useState(false);
  const colorClass = difficulty === 'آسان' ? NEON_LIME : difficulty === 'متوسط' ? NEON_CYAN : NEON_PINK;

  return (
    <>
      <motion.div
        className={`bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-5 border cursor-pointer border-lime-700/50`}
        onClick={() => setShowModal(true)}
      >
        <p className="font-semibold text-white">{question}</p>
        <span className={`text-xs font-mono px-3 py-1 mt-2 inline-block rounded-full border ${colorClass} border-lime-700/50`}>
          {difficulty}
        </span>
      </motion.div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={`تمرین: ${difficulty}`} content={`پاسخ: ${answer}`} />
    </>
  );
};

const AdvancedChallengeCard: React.FC<typeof advancedChallenges[0]> = ({ title, description, details, image }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <motion.div
        className="bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-xl p-6 cursor-pointer hover:scale-[1.02] transition-all"
        onClick={() => setShowModal(true)}
      >
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={title} content={details} image={image} />
    </>
  );
};

// ---------------- صفحه اصلی ----------------
const BrainZoneFull: React.FC = () => (
  <div className={`${BG_DARK} text-white py-16 px-4 md:px-12 min-h-screen`}>
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.header
        className="text-center mb-20 p-8 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-900/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Zap className={`w-12 h-12 mx-auto mb-4 ${NEON_CYAN} drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]`} />
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-widest leading-snug">
          <span className={NEON_CYAN}>COGNITIVE</span> LAB
        </h2>
        <p className="mt-2 text-xl text-gray-400">کتابخانه منابع فکری: تقویت ذهن برای موفقیت در بازی و زندگی.</p>
      </motion.header>

      {/* محتوای علمی */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-500/50 pb-2 flex items-center">
          <BookOpen className={`w-6 h-6 ml-3 ${NEON_CYAN}`} />
          پژوهش‌های پیشرفته بازی
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scientificContent.map((item, idx) => <ScienceCard key={idx} {...item} />)}
        </div>
      </section>

      {/* نقل قول‌ها */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-pink-500/50 pb-2 flex items-center">
          <Star className={`w-6 h-6 ml-3 ${NEON_PINK}`} />
          فلسفه و استراتژی نوابغ
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={idx}
              className={`bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 text-center italic border-l-4 border-pink-500 shadow-lg transform transition-all duration-300 hover:shadow-pink-500/50`}
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-200 text-base leading-relaxed mb-3">"{q.text}"</p>
              <footer className={`font-bold text-sm ${q.color} drop-shadow-sm`}>— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* تمرین‌های کوتاه */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-lime-500/50 pb-2 flex items-center">
          <Zap className={`w-6 h-6 ml-3 ${NEON_LIME}`} />
          تمرین‌های کوتاه مغزی
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {quickExercises.map((ex, idx) => <ExerciseCard key={idx} {...ex} />)}
        </div>
      </section>

      {/* تمرین‌های استراتژی پیشرفته */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-500/50 pb-2 flex items-center">
          <Target className={`w-6 h-6 ml-3 ${NEON_CYAN}`} />
          تمرین‌های استراتژی پیشرفته
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedChallenges.map((item, idx) => <AdvancedChallengeCard key={idx} {...item} />)}
        </div>
      </section>
    </div>
  </div>
);

export default BrainZoneFull;
