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
import { Skeleton } from "./components";

const Navbar = () => {
  return (
    <nav className=" border-b-2 py-3 p-6 mb-5 text-lg">
      <Container>
        <Flex justify="between" align="center">
          <NavLinks />
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Issues", href: "/issues" },
  ];
  return (
    <Flex gap="4" align="center">
      <Link className="pl-2" href="/">
        <BsBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                className={classNames({
                  "nav-link": true,
                  "!text-green-700": link.href === currentPath,
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
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="4rem" />;
  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Sign In
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            size="2"
            radius="full"
            src={session!.user!.image!}
            fallback="?"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Sign Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default Navbar;
