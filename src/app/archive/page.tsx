import type { Metadata } from "next";

import { getArchiveItemsGroupedByStage } from "@/lib/archive";
import { ARCHIVE_STAGE_LABEL } from "@/types/archive";

export const metadata: Metadata = {
  title: "ARCHIVE",
  description: "MEET UP, BOOTCAMP, SHOW UP으로 이어지는 국악 길라잡이의 기록입니다.",
};

const stageDescriptions = {
  MEET_UP: "익숙한 창작의 틀을 벗어나 관객의 시선으로 다시 봅니다.",
  BOOTCAMP: "공연의 핵심 상품성을 정의하고 실행 가능한 무대로 만듭니다.",
  SHOW_UP: "완성된 공연을 관객 앞에 선보이고 자생력을 검증합니다.",
} as const;

export default function ArchivePage() {
  const groups = getArchiveItemsGroupedByStage();

  return (
    <article className="archive-page">
      <header className="archive-intro">
        <p>RECORDS OF THE LAB</p>
        <h1>ARCHIVE</h1>
        <span>관점을 바꾸고, 상품으로 짓고, 관객 앞에 선 기록</span>
      </header>

      <div className="archive-groups">
        {groups.map(({ stage, items }, index) => (
          <section key={stage} className="archive-group">
            <header>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{ARCHIVE_STAGE_LABEL[stage]}</h2>
              <p>{stageDescriptions[stage]}</p>
            </header>

            {items.length === 0 ? (
              <p className="archive-empty">COMING SOON</p>
            ) : (
              <ul className="archive-list">
                {items.map((item) => (
                  <li key={item.id}>
                    <article>
                      <time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <span aria-hidden="true">→</span>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
