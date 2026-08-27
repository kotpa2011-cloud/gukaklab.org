import Link from "next/link";

import { mainNav, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{siteConfig.name}</h1>
      <p>{siteConfig.description}</p>

      <nav aria-label="바로가기">
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
