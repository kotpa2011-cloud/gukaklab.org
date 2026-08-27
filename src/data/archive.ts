import type { ArchiveItem } from "@/types/archive";

/**
 * ARCHIVE 콘텐츠 목록.
 *
 * 글을 추가하려면 아래 배열에 객체를 하나 더 넣으면 됩니다.
 * 정렬(날짜 오름차순)은 src/lib/archive.ts 가 자동으로 처리하므로
 * 여기서는 순서를 신경 쓰지 않아도 됩니다.
 */
export const archiveItems: ArchiveItem[] = [
  {
    id: "sample-meet-up",
    stage: "MEET_UP",
    date: "2025-01-01",
    title: "샘플 콘텐츠 (테스트용)",
    summary: "구조 확인을 위한 임시 데이터입니다. 실제 콘텐츠로 교체하세요.",
  },
];
