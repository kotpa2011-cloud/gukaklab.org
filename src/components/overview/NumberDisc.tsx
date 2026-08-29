import type { ReactNode } from "react";

export default function NumberDisc({ children }: { children: ReactNode }) {
  return <span className="overview-number-disc">{children}</span>;
}
