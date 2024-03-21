import Link from "next/link";
import React from "react";
import { BsBug } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b-2 items-center h-14 p-6 mb-5 text-lg">
      <Link className="pl-2" href="/">
        <BsBug className="" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                className="text-green-600 hover:text-green-800 transition-colors"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
