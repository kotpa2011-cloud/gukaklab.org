"use client";

import { usePathname } from "next/navigation";

import HomeFooter from "@/components/home/HomeFooter";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <HomeFooter variant="static" />;
}
