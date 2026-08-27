/**
 * 사이트 전역 정보.
 * 사이트명, 설명, 메뉴 이름을 바꿀 때는 이 파일만 수정하면 됩니다.
 */
export const siteConfig = {
  name: "국악 길라잡이",
  description:
    "예술의 바깥에서 새로운 국악의 무대를 만드는 국악 길라잡이 비즈니스 랩입니다.",
} as const;

/** Header / Footer 공통 메뉴 */
export const mainNav = [
  { href: "/about", label: "ABOUT" },
  { href: "/archive", label: "ARCHIVE" },
] as const;
