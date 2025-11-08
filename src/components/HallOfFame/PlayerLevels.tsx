import { ArrowRightIcon, BarcodeIcon, ShieldIcon, StarIcon, LightbulbIcon, ZapIcon } from 'lucide-react';

const NEON_FUCHSIA = 'text-fuchsia-400';
const BORDER_NEON = 'border-fuchsia-700/50';
const BG_DARK_GLASS = 'bg-gray-900/40';

const levels = [
  { level: 1, name: "تازه‌وارد", points: 500, benefit: "نشان اولین بازی و دسترسی به بلاگ VIP" },
  { level: 5, name: "ماجراجو", points: 2500, benefit: "تخفیف ۲٪ روی رویدادها و آیکون چت اختصاصی" },
  { level: 10, name: "گیمر ماهر", points: 5000, benefit: "تخفیف ۵٪ و اولویت رزرو برای رویدادهای پرطرفدار" },
  { level: 15, name: "نخبه", points: 7500, benefit: "دسترسی به تیم‌های سطح بالا و دعوت به رویدادهای ویژه" },
  { level: 20, name: "استاد فان‌زون", points: 10000, benefit: "عضویت طلایی، تخفیف ۱۰٪ و یک روز رایگان در ماه" },
];

// فرض می‌کنیم کاربر در حال حاضر این مشخصات را دارد
const currentUser = {
    currentLevel: 8,
    currentPoints: 4200,
    nextLevel: 10,
    pointsToNext: 800,
    progressPercentage: 84, // (4200 - 2500) / (5000 - 2500) * 100
};

export default function PlayerLevels() {
  return (
    <div className="flex flex-col gap-8">
        
      {/* نوار پیشرفت کاربر */}
      <div className="p-6 rounded-xl border-2 ${BORDER_NEON} ${BG_DARK_GLASS} shadow-lg shadow-fuchsia-900/40">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white flex items-center">
                <StarIcon className={`w-6 h-6 ml-2 ${NEON_FUCHSIA}`} />
                وضعیت فعلی شما: <span className={`mr-2 ${NEON_FUCHSIA}`}>سطح {currentUser.currentLevel} ({currentUser.currentPoints.toLocaleString('fa-IR')} امتیاز)</span>
            </h3>
            <span className="text-sm text-gray-400">هدف: سطح {currentUser.nextLevel}</span>
        </div>
        
        {/* نوار پیشرفت با افکت نئون */}
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className={`h-3 rounded-full bg-fuchsia-500 shadow-md shadow-fuchsia-500/80 transition-all duration-1000`}
            style={{ width: `${currentUser.progressPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500 mt-2">
            تنها <span className={`${NEON_FUCHSIA} font-semibold`}>{currentUser.pointsToNext.toLocaleString('fa-IR')}</span> امتیاز دیگر تا ارتقا به سطح {currentUser.nextLevel}!
        </p>
      </div>
        
      {/* جدول سطوح و مزایا */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white border-b border-fuchsia-700/50 pb-2 flex items-center">
            <LightbulbIcon className={`w-6 h-6 ml-2 ${NEON_FUCHSIA}`} />
            جدول مزایای سطوح
        </h3>
        
        {levels.map((level, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-xl border ${BORDER_NEON} ${BG_DARK_GLASS} shadow-md shadow-fuchsia-900/30 
                       transition-transform hover:scale-[1.01] flex flex-col sm:flex-row justify-between items-start sm:items-center`}
          >
            <div className="flex items-center mb-2 sm:mb-0">
              <span className={`text-xl font-extrabold w-8 text-center ${NEON_FUCHSIA}`}>{level.level}</span>
              <div className="mr-4">
                <p className="text-lg font-semibold text-white">{level.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">نیاز: {level.points.toLocaleString('fa-IR')} امتیاز</p>
              </div>
            </div>
            
            {/* مزایا با استایل نئونی برجسته */}
            <p className={`text-sm text-white bg-fuchsia-900/30 px-3 py-1 rounded-full border border-fuchsia-500/50 shadow-inner shadow-fuchsia-900/50`}>
              {level.benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}