import { GaugeIcon } from 'lucide-react';

const NEON_BLUE = 'text-cyan-400';
const BG_CARD = 'bg-gray-900/50';

interface Stat {
  label: string;
  value: string;
}

interface GlobalStatsProps {
  stats: Stat[];
}

export default function GlobalStats({ stats }: GlobalStatsProps) {
  return (
    // ریسپانسیو: ۲ ستونه در موبایل، ۴ ستونه در دسکتاپ
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`p-4 sm:p-6 rounded-xl border border-cyan-700/50 text-center transition ${BG_CARD} 
            shadow-lg shadow-cyan-900/50 backdrop-blur-sm hover:shadow-cyan-700/80 hover:scale-[1.03] duration-300`}
        >
          <GaugeIcon className={`w-8 h-8 sm:w-10 sm:h-10 ${NEON_BLUE} mx-auto mb-2 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]`} />
          
          {/* فونت کوچکتر برای موبایل */}
          <p className="text-xs sm:text-base text-gray-400 mb-1">{stat.label}</p>
          <p className={`text-2xl sm:text-3xl font-extrabold text-white ${NEON_BLUE} tracking-wider`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}