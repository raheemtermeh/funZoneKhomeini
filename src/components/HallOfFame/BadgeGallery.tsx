import { ShieldCheckIcon, LockIcon, GemIcon, ZapIcon, BarcodeIcon, UsersIcon } from 'lucide-react';

const NEON_GREEN = 'text-lime-400';
const NEON_RED = 'text-pink-500'; 
const BG_DARK = 'bg-[#0a0a0a]';

// نگاشت آیکون‌ها
const IconMap = {
  GemIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarcodeIcon,
  UsersIcon
};

interface Badge {
  id: number;
  name: string;
  description: string;
  condition: string;
  isAchieved: boolean;
  icon: keyof typeof IconMap;
}

const mockBadges: Badge[] = [
  { id: 1, name: "مبتدی فان‌زون", description: "اولین بار وارد فان زون شوید.", condition: "ورود به سیستم", isAchieved: true, icon: 'ShieldCheckIcon' },
  { id: 2, name: "پادشاه مافیا", description: "۱۰ بازی مافیا را با پیروزی به پایان برسانید.", condition: "۱۰ پیروزی در مافیا", isAchieved: false, icon: 'GemIcon' },
  { id: 3, name: "منتقد برتر", description: "۵ نقد کامل و امتیاز بالا برای کافه‌ها ثبت کنید.", condition: "۵ نقد کافه", isAchieved: true, icon: 'ZapIcon' },
  { id: 4, name: "همکار کافه", description: "برای اولین بار یک تیم برای رویدادی تشکیل دهید.", condition: "ایجاد ۱ تیم", isAchieved: false, icon: 'UsersIcon' },
  { id: 5, name: "جامعه‌ساز", description: "بیش از ۱۰۰ پیام در چت فان‌زون ارسال کنید.", condition: "۱۰۰ پیام چت", isAchieved: true, icon: 'ShieldCheckIcon' },
  { id: 6, name: "تلاشگر", description: "به مدت ۳ ماه متوالی فعال باشید.", condition: "۳ ماه فعالیت", isAchieved: false, icon: 'BarcodeIcon' },
];

const BadgeGallery = () => {
  return (
    // ریسپانسیو: ۱ ستونه در موبایل، ۴ ستونه در دسکتاپ
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockBadges.map((badge) => {
        const IconComponent = IconMap[badge.icon] || GemIcon;
        
        const achievedClass = `border-lime-500/50 shadow-lg shadow-lime-900/50 ${NEON_GREEN} bg-gray-900/70 hover:shadow-lime-600/50`;
        const lockedClass = `border-pink-500/30 shadow-md shadow-pink-900/30 opacity-60 ${NEON_RED} bg-gray-900/70`;
        
        const cardClass = badge.isAchieved ? achievedClass : lockedClass;
        const iconColor = badge.isAchieved ? NEON_GREEN : NEON_RED;
        const statusBg = badge.isAchieved ? 'bg-lime-800/50 border-lime-500/50' : 'bg-pink-800/50 border-pink-500/50';

        return (
          <div 
            key={badge.id} 
            className={`p-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm ${cardClass} hover:scale-[1.03]`}
          >
            <div className="flex items-start mb-3 border-b pb-3 border-gray-700/50">
              <div className={`p-2 rounded-lg border ml-3 ${iconColor} ${statusBg} drop-shadow-[0_0_5px_rgba(163,230,53,0.5)]`}>
                {badge.isAchieved ? (
                  <IconComponent className="w-6 h-6" />
                ) : (
                  <LockIcon className="w-6 h-6" />
                )}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">{badge.name}</h3>
            </div>
            
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">{badge.description}</p>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-700/50">
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusBg} ${iconColor}`}>
                {badge.isAchieved ? "کسب شده" : "قفل"}
              </span>
              <span className="text-xs text-gray-500 flex items-center">
                <span className="text-gray-400 mr-1">{badge.condition}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BadgeGallery;