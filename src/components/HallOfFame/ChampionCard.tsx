import Image from 'next/image';
import { CrownIcon, TrendingUpIcon } from 'lucide-react';

const NEON_YELLOW = 'text-yellow-400';

interface ChampionProps {
  champion: {
    id: number;
    name: string;
    points: number;
    title: string;
    avatarUrl: string;
  };
}

export default function ChampionCard({ champion }: ChampionProps) {
  return (
    // ریسپانسیو شدن: تغییر چیدمان از ستونی به افقی در سایزهای بزرگتر
    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-white p-4 sm:p-0">
      
      {/* اطلاعات اصلی قهرمان */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto">
        
        {/* آواتار */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl shadow-yellow-800/80 transition-all duration-300 hover:scale-[1.05]">
          <Image 
            src={champion.avatarUrl || '/placeholder.jpg'} 
            alt={champion.name} 
            width={128}
            height={128}
            className="object-cover"
          />
          <CrownIcon className={`absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 ${NEON_YELLOW} bg-[#0a0a0a] rounded-full p-1 -mt-2 -ml-2 sm:-mt-3 sm:-ml-3 border border-yellow-400 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]`} />
        </div>
        
        {/* متن */}
        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-lg text-gray-400">قهرمان ماه:</p>
          <h3 className={`text-3xl sm:text-5xl font-black text-white tracking-wide ${NEON_YELLOW} drop-shadow-[0_0_10px_rgba(252,211,77,0.5)] transition-all duration-300 hover:text-white`}>
            {champion.name}
          </h3>
          <p className={`text-base sm:text-xl font-medium ${NEON_YELLOW} mt-2 flex items-center justify-center sm:justify-end`}>
            <TrendingUpIcon className="w-5 h-5 ml-2" />
            {champion.title}
          </p>
        </div>
      </div>
      
      {/* امتیازات */}
      <div className="flex flex-col items-center md:items-end p-4 border border-yellow-700/50 rounded-lg backdrop-blur-md bg-white/5 shadow-inner shadow-yellow-900/50">
        <p className="text-base sm:text-xl text-gray-400 mb-1">امتیاز کسب شده:</p>
        <div className={`text-5xl sm:text-6xl font-extrabold ${NEON_YELLOW} px-4 py-2 rounded-xl border-dashed border-4 border-yellow-600/70 shadow-inner drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]`}>
          {champion.points.toLocaleString('fa-IR')}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">این امتیاز برای رتبه‌بندی ماه جاری است.</p>
      </div>
    </div>
  );
}