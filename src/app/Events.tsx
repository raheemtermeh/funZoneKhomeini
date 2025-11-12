
import React from 'react';
import { motion } from 'framer-motion';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 neon-text-cyan"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          رویدادها
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          صفحه رویدادها در حال آماده‌سازی است. به زودی می‌توانید تمام رویدادهای هیجان‌انگیز را در اینجا مشاهده کنید.
        </motion.p>
      </div>
    </div>
  );
};

export default EventsPage;
