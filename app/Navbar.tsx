"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBug } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
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
      <Box>
        {status === "authenticated" ? (
          <Link href="/api/auth/signout">Sign Out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
