import type { Metadata } from "next";

import { getArchiveItemsGroupedByStage } from "@/lib/archive";
import { ARCHIVE_STAGE_LABEL } from "@/types/archive";

export const metadata: Metadata = {
  title: "ARCHIVE",
};

export default function ArchivePage() {
  const groups = getArchiveItemsGroupedByStage();

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-semibold">ARCHIVE</h1>

      {groups.map(({ stage, items }) => (
        <section key={stage} className="space-y-3">
          <h2 className="text-lg font-medium">{ARCHIVE_STAGE_LABEL[stage]}</h2>

          {items.length === 0 ? (
            <p className="text-sm">등록된 콘텐츠가 없습니다.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id}>
                  <article className="space-y-1">
                    <p className="text-sm">
                      <time dateTime={item.date}>{item.date}</time>
                    </p>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm">{item.summary}</p>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
