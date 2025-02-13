"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { signOut } from "next-auth/react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-semibold">
        <FaSearch size={25} />
      </h1>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 bg-gray-200 p-2 rounded-full"
          aria-label="User menu"
        >
          <FiUser />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded">
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">Profile (In Progress)</button>
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
