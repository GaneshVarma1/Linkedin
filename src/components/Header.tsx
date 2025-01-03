import React from "react";
import { MessageSquare, Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./common/Logo";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              50+
            </span>
          </button>
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white relative">
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              200+
            </span>
          </button>
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src="sri-ln.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
