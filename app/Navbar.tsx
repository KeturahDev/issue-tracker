"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBug } from "react-icons/bs";

const Navbar = () => {
  const currentPath = usePathname();
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
                className={classNames({
                  "text-green-600": link.href !== currentPath,
                  "text-green-700": link.href === currentPath,
                  "hover:text-green-800 transition-colors": true,
                })}
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
