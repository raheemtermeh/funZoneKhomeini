"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// فرض می‌کنیم این آدرس عکس شماست، در محیط واقعی باید مسیر رو درست کنید
import logo from "../../public/images/photo_2025-11-12_19-49-54.png";
// const logo = { src: "../../public/images/photo_2025-11-12_19-49-54.png", width: 120, height: 40 };

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

// ❌ کامنت شده: آیکون پروفایل
// const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
//  <svg
//   className={className}
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth={2}
//  >
//   <path
//    strokeLinecap="round"
//    strokeLinejoin="round"
//    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//   />
//  </svg>
// );

// ❌ کامنت شده: آیکون زنگوله
// const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
//  <svg
//   className={className}
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth={2}
//  >
//   <path
//    strokeLinecap="round"
//    strokeLinejoin="round"
//    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//   />
//  </svg>
// );

const Header: React.FC<{
  onNavigate: (page: string, params?: any) => void;
}> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // ❌ کامنت شده: استیت باز بودن منوی پروفایل // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate("search", { query: searchQuery });
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  }; // 🏠 تابع جدید برای رفرش صفحه

  const handleHomeClick = () => {
    window.location.reload();
    setMenuOpen(false);
  };

  const navItems = [
    { label: "خانه", action: handleHomeClick }, // 🏠 اضافه شدن آیتم خانه // ❌ کامنت شده: رویدادها // { label: "رویدادها", page: "events" },
    { label: "کافه‌ها", page: "cafes" }, // ❌ کامنت شده: آموزش // { label: "آموزش", page: "tutorials" },
    { label: "درباره ما", page: "about" }, // ❌ کامنت شده: قهرمانان // { label: "قهرمانان", page: "hallOfFame" }, // { label: "کتابخونه", page: "library" },
  ];

  return (
    <motion.header
      className={`fixed bg-grid top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 shadow-lg shadow-cyan-500/10"
          : "bg-black/30 backdrop-blur-md"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            {/* 👈 Link حذف و به a تغییر یافته */}
            <Image
              src={logo}
              alt="لوگوی فان زون"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.label} // 🚀 منطق شرطی برای فراخوانی action (خانه) یا onNavigate (بقیه)
                onClick={() =>
                  item.action ? item.action() : onNavigate(item.page!)
                }
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label} {/* Underline Hover Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          {/* Right side - Icons (Search remains) */}
          <div className="flex items-center gap-3">
            {/* آیکون جستجو */}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400"
              whileTap={{ scale: 0.9 }}
              aria-label="جستجو"
            >
              <SearchIcon className="w-5 h-5" />
            </motion.button>
            {/* ❌ کامنت شده: آیکون زنگوله (اعلانات) */}
            {/* <motion.button
       onClick={() => onNavigate("notifications")}
       className="p-2 text-gray-300 hover:text-cyan-400 relative"
       whileTap={{ scale: 0.9 }}
       aria-label="اعلانات"
      >
       <BellIcon className="w-5 h-5" />
       <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-fuchsia-500 ring-2 ring-black"></span>
      </motion.button> */}
            {/* ❌ کامنت شده: آیکون پروفایل و Dropdown */}
            {/* <div className="relative">
       <motion.button
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className="w-9 h-9 rounded-full bg-gray-800 border border-cyan-500 flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label="پروفایل کاربر"
       >
        <UserIcon className="w-5 h-5 text-cyan-400" />
       </motion.button>

       <AnimatePresence>
        {isProfileOpen && (
         <motion.div
          className="absolute left-0 mt-2 w-44 bg-gray-900 border border-white/10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
         >
          <button
           onClick={() => {
            onNavigate("profile");
            setIsProfileOpen(false);
           }}
           className="w-full text-right px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
          >
           پروفایل
          </button>
          <button
           onClick={() => {
            onNavigate("profile", { tab: "passport" });
            setIsProfileOpen(false);
           }}
           className="w-full text-right px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
          >
           گذرنامه فان زون
          </button>
          <hr className="border-white/10 my-1" />
          <a
           href="#"
           className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
          >
           خروج
          </a>
         </motion.div>
        )}
       </AnimatePresence>
      </div> */}
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="منوی موبایل"
            >
              ☰
            </button>
          </div>
        </div>
        {/* Mobile nav (remains full width) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="md:hidden flex flex-col space-y-2 pb-3 text-right"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action ? item.action() : onNavigate(item.page!);
                    setMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-cyan-400 text-sm border-b border-gray-700 py-1"
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      {/* 🌟 Search Bar - Absolutely positioned and centered for a clean look 🌟 */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-16 md:top-1/2 md:-translate-y-1/2 z-50 w-[95%] max-w-lg p-2"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی رویداد یا کافه..." // 🟢 بهبود ظاهر input
                className="w-full bg-gray-800 border border-cyan-500/80 rounded-full px-4 py-2 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 shadow-xl"
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 🌟 پایان Search Bar 🌟 */}
      {/* 🟢 Backdrop برای بستن نوار جستجو با کلیک بیرون */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
