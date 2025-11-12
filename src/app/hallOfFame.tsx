import {
  ChessQueen,
  TrophyIcon,
  ShieldIcon,
  BarChartIcon,
  ZapIcon,
  FlameIcon,
} from "lucide-react";

import ChampionCard from "@/components/HallOfFame/ChampionCard";
import BadgeGallery from "@/components/HallOfFame/BadgeGallery";
import GlobalStats from "@/components/HallOfFame/GlobalStats";
import RecordBreakers from "@/components/HallOfFame/RecordBreakers"; // کامپوننت جدید
import PlayerLevels from "@/components/HallOfFame/PlayerLevels"; // کامپوننت جدید
import Header from "@/components/Header";
import MonthlyTopPlayers from "@/components/HallOfFame/MonthlyTopPlayers";
import Hero3DHeader from "@/components/Hero3DHeader";

// رنگ‌های نئونی
const NEON_YELLOW = "text-yellow-400";
const NEON_BLUE = "text-cyan-400";
const NEON_GREEN = "text-lime-400";
const BG_DARK = "bg-[#0a0a0a]"; // مشکی مطلق

// --- داده‌های نمونه ---
const mockChampion = {
  id: 1,
  name: "Raheem Termeh",
  points: 12500,
  title: "King of Mafia",
  avatarUrl: "/avatars/raheem.jpg",
};

const mockStats = [
  { label: "اعضای فعال فان‌زون", value: "۸,۷۴۲ نفر" },
  { label: "کل رویدادهای برگزار شده", value: "۴۵,۲۵۰" },
  { label: "محبوب‌ترین بازی این ماه", value: "Mafia" },
  { label: "کافه برتر (میانگین امتیاز)", value: "کافه بُردگیم پازل" },
];



export default function HallOfFamePage({ onNavigate }) {
  return (
    <>
      <Header onNavigate={onNavigate} />

      <div className={`min-h-screen ${BG_DARK} text-white font-mono transition-all duration-500`}>
        <div className="container mx-auto py-16 px-4 xl:max-w-7xl">
          <header>
            <Hero3DHeader />
          </header>

          <section className="mb-20">
            <h2
              className={`
                relative flex justify-center items-center text-3xl sm:text-5xl font-extrabold 
                mb-12 pb-4 border-b-4 border-yellow-400/40
                text-white tracking-wider
                before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 
                before:w-20 before:h-1 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600 
                before:rounded-full before:shadow-[0_0_15px_rgba(255,255,0,0.7)]
                after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2
                after:w-4 after:h-4 after:bg-yellow-400 after:rounded-full after:animate-pulse
                neon-text
              `}
            >
              <TrophyIcon className="w-10 h-10 ml-4 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]" />
              برترین بازیکنان این ماه (TOP 3)
            </h2>

            <MonthlyTopPlayers />
          </section>

          {/* بخش رکوردها */}
          <section className="mb-20">
            <h2
              className={`flex items-center text-3xl sm:text-4xl font-bold mb-8 border-b-2 pb-3 border-pink-500/50 text-pink-400`}
            >
              <FlameIcon className="w-8 h-8 ml-3" />
              رکوردهای شکست‌ناپذیر (All-Time Records)
            </h2>
            <RecordBreakers />
          </section>

          {/* آمار کلی */}
          <section className="mb-20">
            <h2
              className={`flex items-center text-3xl sm:text-4xl font-bold mb-8 border-b-2 pb-3 border-cyan-500/50 ${NEON_BLUE}`}
            >
              <BarChartIcon className="w-8 h-8 ml-3" />
              آمار کلی فان‌زون
            </h2>
            <GlobalStats stats={mockStats} />
          </section>

          {/* سطح‌بندی */}
          <section className="mb-20">
            <h2
              className={`flex items-center text-3xl sm:text-4xl font-bold mb-8 border-b-2 pb-3 border-fuchsia-500/50 text-fuchsia-400`}
            >
              <ZapIcon className="w-8 h-8 ml-3" />
              ساختار سطح‌بندی (Player Levels)
            </h2>
            <PlayerLevels />
          </section>

          {/* گالری بج‌ها */}
          <section className="mb-20">
            <h2
              className={`flex items-center text-3xl sm:text-4xl font-bold mb-8 border-b-2 pb-3 border-lime-500/50 ${NEON_GREEN}`}
            >
              <ShieldIcon className="w-8 h-8 ml-3" />
              کلکسیون بج‌های افتخار
            </h2>
            <BadgeGallery />
          </section>
        </div>
      </div>
    </>
  );
}
