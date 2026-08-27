/**
 * 사이트 전역 정보.
 * 사이트명, 설명, 메뉴 이름을 바꿀 때는 이 파일만 수정하면 됩니다.
 */
export const siteConfig = {
  name: "국악 길라잡이",
  description:
    "국악과 관객을 잇는 과정과 기록을 소개하는 국악 길라잡이 웹사이트입니다.",
} as const;

/** Header / Footer 공통 메뉴 */
export const mainNav = [
  { href: "/about", label: "ABOUT" },
  { href: "/archive", label: "ARCHIVE" },
] as const;
