import Link from "next/link";

import { mainNav, siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-4">
        <Link href="/" className="font-medium">
          {siteConfig.name}
        </Link>

        <nav aria-label="주요 메뉴">
          <ul className="flex gap-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
