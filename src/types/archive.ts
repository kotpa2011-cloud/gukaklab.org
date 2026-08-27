/**
 * ARCHIVE 콘텐츠 타입 정의.
 * 실제 데이터는 src/data/archive.ts 에 있습니다.
 */

/** ARCHIVE 하위 단계. 이 3개 값만 사용할 수 있습니다. */
export const ARCHIVE_STAGES = ["MEET_UP", "BOOTCAMP", "SHOW_UP"] as const;

export type ArchiveStage = (typeof ARCHIVE_STAGES)[number];

/** 화면에 노출할 단계 이름 (MEET_UP -> MEET UP) */
export const ARCHIVE_STAGE_LABEL: Record<ArchiveStage, string> = {
  MEET_UP: "MEET UP",
  BOOTCAMP: "BOOTCAMP",
  SHOW_UP: "SHOW UP",
};

export interface ArchiveItem {
  /** URL 주소로도 쓰이는 고유 값. 예: "meetup-0831" -> /archive/meetup-0831 */
  id: string;
  stage: ArchiveStage;
  /** YYYY-MM-DD 형식 */
  date: string;
  title: string;
  summary: string;
  /** public 폴더 기준 경로. 예: "/images/meetup-0831.jpg" (없으면 생략) */
  thumbnail?: string;
  /** 상세 페이지 본문. 지금은 사용하지 않아도 됩니다. */
  content?: string;
}
