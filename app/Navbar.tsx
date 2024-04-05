"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBug } from "react-icons/bs";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Issues", href: "/issues" },
  ];
  return (
    <nav className=" border-b-2 py-3 p-6 mb-5 text-lg">
      <Container>
        <Flex justify="between" align="center">
          <Flex gap="4" align="center">
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
          </Flex>
          <Box>
            {status === "authenticated" ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    size="2"
                    radius="full"
                    src={session.user!.image!}
                    fallback="?"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
