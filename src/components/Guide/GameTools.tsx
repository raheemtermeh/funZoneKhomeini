'use client';

import { Dice5Icon, Loader2Icon } from 'lucide-react';
import { useState } from 'react';

interface GameToolsProps {
  gameSlug: string; // مثلاً 'mafia-full-guide'
}

export default function GameTools({ gameSlug }: GameToolsProps) {
  const [generatedRoles, setGeneratedRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // این تابع باید با مسیر POST /api/games/tools/{game_slug}/randomizer ارتباط برقرار کند.
  const handleGenerateRoles = async () => {
    if (gameSlug !== 'mafia-full-guide') return; // فقط برای مافیا فعال است
    
    setIsLoading(true);
    setGeneratedRoles([]);

    // شبیه‌سازی API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const roles = ["مافیا ساده", "دکتر", "کارآگاه", "شهروند ساده", "نقش فدایی", "شهروند ساده"];
    setGeneratedRoles(roles);
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
      <h3 className="text-2xl font-semibold mb-4 text-purple-800">ژنراتور نقش تصادفی</h3>
      <p className="text-gray-600 mb-4">تعداد بازیکنان را وارد کنید تا لیست نقش‌های تصادفی برای شما ساخته شود.</p>

      {/* دکمه تعاملی */}
      <button 
        onClick={handleGenerateRoles} 
        disabled={isLoading}
        className="flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-purple-700 transition disabled:bg-purple-400"
      >
        {isLoading ? (
          <Loader2Icon className="w-5 h-5 ml-2 animate-spin" />
        ) : (
          <Dice5Icon className="w-5 h-5 ml-2" />
        )}
        {isLoading ? "در حال ساخت..." : "ساخت لیست نقش‌ها (مثال ۶ نفره)"}
      </button>

      {/* نتایج */}
      {generatedRoles.length > 0 && (
        <div className="mt-6 p-4 bg-purple-50 border border-purple-300 rounded-lg">
          <p className="font-bold text-purple-800 mb-2">نقش‌های تولید شده:</p>
          <div className="flex flex-wrap gap-2">
            {generatedRoles.map((role, index) => (
              <span key={index} className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                {role}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}