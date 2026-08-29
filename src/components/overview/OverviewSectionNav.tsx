import Image from "next/image";
import Link from "next/link";

type OverviewSectionNavProps = {
  items: ReadonlyArray<{ href: string; label: string }>;
};

export default function OverviewSectionNav({ items }: OverviewSectionNavProps) {
  return (
    <nav className="overview-section-nav" aria-label="OVERVIEW 페이지 목차">
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          <Image
            src="/images/gukak/overview-v2/nav-arrow.svg"
            alt=""
            width={36}
            height={31}
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
