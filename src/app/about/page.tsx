import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
};

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">ABOUT</h1>
      <p>소개 콘텐츠가 들어갈 페이지입니다.</p>
    </div>
  );
}
