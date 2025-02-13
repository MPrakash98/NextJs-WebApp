"use client";

import { useState } from "react";
import { FiMenu, FiHome, FiList, FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Persistent toggle state

  return (
    <aside
      className={`bg-customDark text-white h-screen p-5 transition-all ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <button
        className="mb-6 text-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FiMenu />
      </button>

      <nav className="space-y-4 flex-grow">
        <Link href="/dashboard" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">
          <FiHome />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link href="/tasks" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">
          <FiList />
          {isOpen && <span>Tasks</span>}
        </Link>
        <button
          className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <FiLogOut />
          {isOpen && <span>Logout</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
