import { ScrollTextIcon, BrainIcon, VideoIcon, SettingsIcon } from 'lucide-react';
import GameTools from '@/components/Guide/GameTools';

interface GameGuideProps {
  params: {
    gameSlug: string; // مثال: 'mafia-full-guide'
  };
}

// --- داده‌های نمونه (برای نمایش اولیه) ---
const mockGuideData = {
  title: "راهنمای کامل بازی مافیا",
  description: "جامع‌ترین قوانین و استراتژی‌ها برای تسلط بر شهر",
  rules: `بازی مافیا یک بازی نقش‌آفرینی است که در آن دو گروه اصلی، شهروندان و مافیا، به صورت مخفیانه با هم مبارزه می‌کنند. هدف شهروندان شناسایی و حذف تمام مافیا است، در حالی که مافیا سعی می‌کند تعداد خود را با شهروندان برابر کند... [جزئیات کامل قوانین در اینجا قرار می‌گیرد]`,
  strategies: [
    "تاکتیک سکوت اولیه: بهترین راه برای پنهان کردن نقش‌های مهم در شب اول.", 
    "هنر دروغ گفتن: چگونه یک شهروند بتواند مافیا را متقاعد کند که دروغ می‌گوید.", 
    "استفاده صحیح از نقش‌های کلیدی: محافظ، پزشک، کارآگاه."
  ],
  youtubeId: "dQw4w9WgXcQ" // شناسه ویدیو آموزشی
};

export default function GameGuidePage({ params }: GameGuideProps) {
  const { gameSlug } = params;
  // * نکته مهم: در اینجا باید اطلاعات مربوط به gameSlug را از بک‌اند فچ کنید.

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <header className="text-center mb-10 bg-indigo-50 p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {mockGuideData.title}
        </h1>
        <p className="mt-2 text-xl text-indigo-700">
          {mockGuideData.description}
        </p>
      </header>

      {/* بخش ۱: قوانین جامع */}
      <section className="mb-12 border-l-4 border-red-500 pl-6 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="flex items-center text-3xl font-bold text-red-700 mb-4">
          <ScrollTextIcon className="w-6 h-6 ml-2" />
          قوانین پایه و نقش‌ها
        </h2>
        <div className="text-lg text-gray-700 whitespace-pre-line">
          {mockGuideData.rules}
        </div>
      </section>
      
      {/* بخش ۲: استراتژی‌ها */}
      <section className="mb-12 bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="flex items-center text-3xl font-bold text-green-700 mb-4 border-b pb-2 border-green-300">
          <BrainIcon className="w-6 h-6 ml-2" />
          تاکتیک‌ها و استراتژی‌های پیشرفته
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 pr-4">
          {mockGuideData.strategies.map((s, index) => (
            <li key={index} className="text-right">{s}</li>
          ))}
        </ul>
      </section>

      {/* بخش ۳: ابزارک‌های تعاملی */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-purple-700 mb-4 border-b pb-2 border-purple-300">
          <SettingsIcon className="w-6 h-6 ml-2" />
          ابزارهای کمکی
        </h2>
        <GameTools gameSlug={gameSlug} />
      </section>

      {/* بخش ۴: آموزش ویدیویی */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-bold text-blue-700 mb-4 border-b pb-2 border-blue-300">
          <VideoIcon className="w-6 h-6 ml-2" />
          آموزش ویدیویی (منبع: YouTube)
        </h2>
        {/* این قسمت باید یک iframe واقعی برای Embed کردن ویدیو یوتیوب باشد */}
        <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-xl">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${mockGuideData.youtubeId}`} 
            title="آموزش بازی مافیا" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}