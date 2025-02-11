"use client";
import { useState } from "react";
import { FiHome, FiList, FiLogOut, FiMenu } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`bg-blue-600 text-white h-screen p-5 ${isOpen ? "w-64" : "w-20"} transition-all`}>
      <button
        className="mb-6 text-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FiMenu />
      </button>

      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">
          <FiHome />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link href="/tasks" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">
          <FiList />
          {isOpen && <span>Tasks</span>}
        </Link>
        <button className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">
          <FiLogOut />
          {isOpen && <span>Logout</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
