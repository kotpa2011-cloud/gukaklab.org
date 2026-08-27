import { archiveItems } from "@/data/archive";
import { ARCHIVE_STAGES, type ArchiveItem, type ArchiveStage } from "@/types/archive";

/** 날짜 오름차순으로 정렬된 전체 목록 */
export function getArchiveItems(): ArchiveItem[] {
  return [...archiveItems].sort((a, b) => a.date.localeCompare(b.date));
}

/** 특정 단계(MEET UP / BOOTCAMP / SHOW UP)의 목록 */
export function getArchiveItemsByStage(stage: ArchiveStage): ArchiveItem[] {
  return getArchiveItems().filter((item) => item.stage === stage);
}

/** 단계별로 묶은 목록. 데이터가 없는 단계는 빈 배열로 유지됩니다. */
export function getArchiveItemsGroupedByStage(): {
  stage: ArchiveStage;
  items: ArchiveItem[];
}[] {
  return ARCHIVE_STAGES.map((stage) => ({
    stage,
    items: getArchiveItemsByStage(stage),
  }));
}

/** 향후 /archive/[slug] 상세 페이지에서 사용할 조회 함수 */
export function getArchiveItemById(id: string): ArchiveItem | undefined {
  return archiveItems.find((item) => item.id === id);
}
