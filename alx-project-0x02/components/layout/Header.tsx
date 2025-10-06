import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold">ALX Project 2</h1>
      <nav className="flex gap-6">
        <Link href="/home" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200 transition">
          About
        </Link>
        <Link href="/posts" className="hover:text-gray-200 transition">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;

