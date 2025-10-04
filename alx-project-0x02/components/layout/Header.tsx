import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex gap-6">
      <h1 className="text-xl font-bold">ALX Project 2</h1>
      <nav className="flex gap-4">
        <Link href="/home">Home</Link>
        <Link href="/about">about</Link>
      </nav>
    </header>
  );
};

export default Header;
