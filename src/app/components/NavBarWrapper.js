"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const noNavbarPages = ["/pages/login", "/pages/register"];

  if (noNavbarPages.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
