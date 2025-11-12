import React from "react";
import { motion } from "framer-motion";

const mockUser = {
  name: "علی احمدی",
  email: "ali.ahmadi@example.com",
  avatar: "https://i.pravatar.cc/150?u=ali",
  level: 12,
  points: 1250,
  levelProgress: 60,
};



const mockBadges = [
  {
    icon: "👑",
    title: "سلطان مافیا",
    desc: "برنده شدن در ۱۰ بازی مافیا",
    unlocked: true,
  },
  {
    icon: "🎲",
    title: "استاد بردگیم",
    desc: "انجام ۵ بازی رومیزی مختلف",
    unlocked: true,
  },

  {
    icon: "🤝",
    title: "یار همیشگی",
    desc: "شرکت در رویداد با ۴ نفر یا بیشتر",
    unlocked: true,
  },
  {
    icon: "🧭",
    title: "کاشف کافه",
    desc: "سر زدن به ۵ کافه مختلف",
    unlocked: false,
  },
  {
    icon: "🧠",
    title: "همه‌فن‌حریف",
    desc: "شرکت در ۳ نوع رویداد مختلف",
    unlocked: false,
  },

];

const mockFriends = [
  { name: "سارا", avatar: "https://i.pravatar.cc/40?u=b" },
  { name: "رضا", avatar: "https://i.pravatar.cc/40?u=c" },
  { name: "مریم", avatar: "https://i.pravatar.cc/40?u=d" },
];

const ProfilePage: React.FC<{
  onNavigate: (page: string, params?: any) => void;
}> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-24 bg-grid">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-gray-900/50 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-8 mb-8">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-24 h-24 rounded-full border-4 border-cyan-500"
            />
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-white">{mockUser.name}</h1>
              <p className="text-gray-400">{mockUser.email}</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>سطح {mockUser.level.toLocaleString("fa-IR")}</span>
                  <span>{mockUser.points.toLocaleString("fa-IR")} / ۲۰۰۰</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-2.5 rounded-full"
                    style={{ width: `${mockUser.levelProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <button className="sm:ml-auto px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition-colors">
              ویرایش پروفایل
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 neon-text-magenta">
                  گذرنامه فان زون
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {mockBadges.map((badge) => (
                    <div
                      key={badge.title}
                      className={`relative group text-center bg-gray-800/50 p-4 rounded-lg border-2 transition-all ${
                        badge.unlocked
                          ? "border-fuchsia-500/50"
                          : "border-gray-700/50"
                      }`}
                    >
                      <div
                        className={`text-4xl transition-transform duration-300 ${
                          badge.unlocked ? "" : "filter grayscale"
                        }`}
                      >
                        {badge.icon}
                      </div>
                      <p
                        className={`text-sm mt-2 font-semibold ${
                          badge.unlocked ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {badge.title}
                      </p>
                      <div className="absolute inset-0 bg-black/90 p-2 text-xs text-center flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <p className="text-gray-300">{badge.desc}</p>
                        {!badge.unlocked && (
                          <p className="mt-2 text-fuchsia-400 font-bold">
                            [قفل]
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text-cyan">
                تیم من
              </h2>
              {mockFriends.map((friend) => (
                <div
                  key={friend.name}
                  className="bg-gray-800/50 p-2 rounded-lg flex items-center gap-3"
                >
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-semibold text-white">{friend.name}</p>
                </div>
              ))}
              <button className="w-full text-sm text-cyan-400 py-2 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-colors">
                + دعوت از دوستان
              </button>
            </div>
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
