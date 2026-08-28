"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNav } from "@/lib/site";

const mobileNav = [
  ...mainNav,
  { href: "/archive#meet-up", label: "MEET UP" },
  { href: "/archive#show-up", label: "SHOW UP" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="desktop-header">
        <Link href="/" className="site-wordmark" aria-label="국악 길라잡이: 비즈니스 랩 홈">
          <Image
            src="/images/gukak/home-v2/header-site-logo.svg"
            alt=""
            width={411}
            height={36}
            priority
          />
        </Link>

        <nav aria-label="주요 메뉴" className="desktop-nav">
          <div className="desktop-nav-links">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Image
            className="desktop-foundation-logo"
            src="/images/gukak/home-v2/header-foundation.svg"
            alt="전통공연예술진흥재단"
            width={214}
            height={36}
            priority
          />
        </nav>
      </div>

      <div className={`mobile-rail${isOpen ? " is-menu-open" : ""}`}>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Image
            src={isOpen ? "/images/gukak/home-v2/close.svg" : "/images/gukak/home-v2/menu.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>

        <span className="mobile-brand-wrap" aria-hidden={isOpen}>
          <Image
            className="vertical-brand"
            src="/images/gukak/home-v2/mobile-site-logo.svg"
            alt="국악 길라잡이: 비즈니스 랩"
            width={160}
            height={14}
          />
        </span>
        <Image
          className="foundation-mark"
          src="/images/gukak/home-v2/mobile-foundation.svg"
          alt="전통공연예술진흥재단"
          width={16}
          height={25}
        />
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        aria-label="모바일 메뉴"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-links">
          {mobileNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
