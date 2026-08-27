import Link from "next/link";

import { mainNav, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>{siteConfig.name}: 비즈니스 랩</p>
      <nav aria-label="하단 메뉴">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
