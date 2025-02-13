"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1d4ed8"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm160-640h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Zm200 200q17 0 28.5-11.5T640-560v-80h-80v80q0 17 11.5 28.5T600-520Zm-240 0q17 0 28.5-11.5T400-560v-80h-80v80q0 17 11.5 28.5T360-520Z" />
          </svg>
          <span className="text-gray-900 self-center text-2xl font-semibold whitespace-nowrap">
            Salna
          </span>
        </Link>

        <div className="w-auto">
          <ul className="font-medium flex mt-4 space-x-4 md:space-x-8">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-blue-700" : "text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`${
                  pathname === "/products" ? "text-blue-700" : "text-gray-900"
                }`}
              >
                Our Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;