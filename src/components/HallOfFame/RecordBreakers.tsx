import { AwardIcon, ClockIcon, UsersIcon, GamepadIcon, HeartIcon, ZapIcon, FlameIcon, ShieldIcon, GemIcon } from 'lucide-react';

const NEON_PINK = 'text-pink-400';
const BG_NEON = 'bg-gray-900/40'; // پس زمینه نیمه شفاف

const mockRecords = [
  // ردیف ۱: بازی‌های رقابتی
  { 
    title: "بیشترین برد متوالی", 
    value: "۲۷ بازی", 
    holder: "Shadow_Hunter", 
    game: "Secret Hitler",
    icon: AwardIcon,
    color: 'pink'
  },
  { 
    title: "بیشترین امتیاز در یک بازی", 
    value: "۴,۵۰۰ امتیاز", 
    holder: "Apex_Legend", 
    game: "Ticket to Ride",
    icon: GemIcon,
    color: 'pink'
  },
  { 
    title: "بهترین نسبت برد/باخت", 
    value: "۹۴.۸٪", 
    holder: "The_Unbeatable", 
    game: "Coup",
    icon: ShieldIcon,
    color: 'pink'
  },
  { 
    title: "بیشترین حذف مافیا", 
    value: "۶۳ مافیا", 
    holder: "Justice_Man", 
    game: "Mafia",
    icon: ZapIcon,
    color: 'pink'
  },

  // ردیف ۲: فعالیت و تعامل اجتماعی
  { 
    title: "سریع‌ترین رزرو (ثانیه)", 
    value: "۰.۲۴ ثانیه", 
    holder: "SpeedyGonzales", 
    game: "رویدادهای بزرگ",
    icon: ClockIcon,
    color: 'cyan'
  },
  { 
    title: "بیشترین عضویت در تیم‌ها", 
    value: "۵۸ تیم", 
    holder: "Team_Player", 
    game: "Codenames",
    icon: UsersIcon,
    color: 'cyan'
  },
  { 
    title: "بیشترین لایک دریافتی", 
    value: "۳,۲۰۰ لایک", 
    holder: "Community_Star", 
    game: "نظرات و چت",
    icon: HeartIcon,
    color: 'cyan'
  },
  { 
    title: "حضور مداوم (هفته)", 
    value: "۴۸ هفته متوالی", 
    holder: "Eternal_Gamer", 
    game: "همه رویدادها",
    icon: FlameIcon,
    color: 'cyan'
  },
];

const getColorClasses = (color: 'pink' | 'cyan') => {
    if (color === 'pink') {
        return {
            text: 'text-pink-400',
            border: 'border-pink-600/60',
            shadow: 'shadow-pink-900/60',
            hover: 'hover:border-pink-400 hover:shadow-pink-700/80'
        };
    }
    return {
        text: 'text-cyan-400',
        border: 'border-cyan-600/60',
        shadow: 'shadow-cyan-900/60',
        hover: 'hover:border-cyan-400 hover:shadow-cyan-700/80'
    };
};

export default function RecordBreakers() {
  return (
    // شبکه ۸ ستونه (۲ ردیف ۴ تایی)
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockRecords.map((record, index) => {
        const Icon = record.icon;
        const classes = getColorClasses(record.color);
        
        return (
          <div 
            key={index} 
            className={`p-5 rounded-xl border ${classes.border} ${BG_NEON} backdrop-blur-md 
                       shadow-xl ${classes.shadow} transition-all duration-300 ${classes.hover}`}
          >
            {/* آیکون در گوشه بالا راست */}
            <div className="flex justify-between items-start mb-3 border-b border-gray-700/50 pb-2">
                <p className="text-xs text-gray-500">{record.game}</p>
                <Icon className={`w-6 h-6 ${classes.text} drop-shadow-[0_0_5px_rgba(255,100,255,0.7)]`} />
            </div>
            
            <p className="text-sm text-gray-400 mb-1">{record.title}</p>
            <h3 className={`text-3xl font-extrabold text-white ${classes.text} my-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>
              {record.value}
            </h3>
            <p className="text-xs text-gray-500 pt-2 border-t border-gray-800">
              <span className="font-semibold text-gray-300">{record.holder}</span> 
              <br/>
              <span className={`text-xxs italic ${classes.text} opacity-80`}>رکورد ثبت شده دائمی</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}