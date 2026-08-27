"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNav, siteConfig } from "@/lib/site";

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
        <Link href="/" className="site-wordmark">
          {siteConfig.name}: 비즈니스 랩
        </Link>

        <nav aria-label="주요 메뉴" className="desktop-nav">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <span className="foundation-name" aria-label="전통공연예술진흥재단">
            전통공연예술진흥재단
            <small>Korea Traditional Performing Arts Foundation</small>
          </span>
        </nav>
      </div>

      <div className="mobile-rail">
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <Image
          className="vertical-brand"
          src="/images/gukak/vertical-brand.svg"
          alt="국악 길라잡이: 비즈니스 랩"
          width={13}
          height={148}
        />
        <Image
          className="foundation-mark"
          src="/images/gukak/foundation-mark.svg"
          alt="전통공연예술진흥재단"
          width={16}
          height={22}
        />
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        aria-label="모바일 메뉴"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-links">
          {mainNav.map((item) => (
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
