// app/layout.tsx
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
});

export const metadata = {
  title: "فان زون - کافه و رویداد",
  description: "سایت مدرن اطلاع‌رسانی کافه و رویدادهای بازی",
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        {/* ---- Import Tailwind ---- */}
        <script src="https://cdn.tailwindcss.com" async></script>

        {/* ---- Framer Motion ---- */}
        <script
          src="https://cdn.jsdelivr.net/npm/framer-motion@10/dist/framer-motion.umd.min.js"
          async
        ></script>

        {/* ---- Import map برای Google AI Studio ---- */}
        <script
          type="importmap"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              imports: {
                "react/": "https://aistudiocdn.com/react@^19.2.0/",
                react: "https://aistudiocdn.com/react@^19.2.0",
                "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
                "framer-motion":
                  "https://aistudiocdn.com/framer-motion@^12.23.24",
                "@google/genai":
                  "https://aistudiocdn.com/@google/genai@^0.15.0",
              },
            }),
          }}
        />

        {/* ---- استایل‌های سفارشی ---- */}
        <style>{`
          body {
            font-family: 'Vazirmatn', sans-serif;
            background-color: #0a0a0a;
            color: #e0e0e0;
          }
          .neon-text-cyan {
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.7),
                         0 0 10px rgba(0, 255, 255, 0.7),
                         0 0 20px rgba(0, 255, 255, 0.5);
          }
          .neon-text-magenta {
            text-shadow: 0 0 5px rgba(255, 0, 255, 0.7),
                         0 0 10px rgba(255, 0, 255, 0.7),
                         0 0 20px rgba(255, 0, 255, 0.5);
          }
          .neon-border-cyan {
            box-shadow: 0 0 2px #fff,
                        0 0 5px #fff,
                        0 0 10px #0ff,
                        0 0 20px #0ff;
          }
          .neon-border-magenta {
            box-shadow: 0 0 2px #fff,
                        0 0 5px #fff,
                        0 0 10px #f0f,
                        0 0 20px #f0f;
          }
          .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #00ffff;
            border-radius: 10px;
            box-shadow: 0 0 5px #00ffff;
          }
          .bg-grid {
            background-image:
              linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      </head>

      <body className="bg-[#0a0a0a] text-gray-200">{children}</body>
    </html>
  );
}
