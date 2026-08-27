import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm">
        <p>{siteConfig.name}</p>
      </div>
    </footer>
  );
}
