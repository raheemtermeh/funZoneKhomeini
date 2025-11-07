
import React from 'react';
import { motion } from 'framer-motion';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 neon-text-cyan"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          آموزش بازی‌ها
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          این بخش به زودی با آموزش‌های ویدیویی و متنی کامل برای بازی‌های مختلف تکمیل خواهد شد تا شما را به یک بازیکن حرفه‌ای تبدیل کند.
        </motion.p>
      </div>
    </div>
  );
};

export default TutorialsPage;
