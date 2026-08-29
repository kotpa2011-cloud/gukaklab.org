type OverviewSectionHeaderProps = {
  title: string;
  subtitle?: string;
  accent?: "yellow" | "purple";
  level?: 1 | 2;
};

export default function OverviewSectionHeader({
  title,
  subtitle,
  accent,
  level = 2,
}: OverviewSectionHeaderProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <header className="overview-section-header">
      <span className="overview-section-rule" aria-hidden="true" />
      <div className="overview-section-heading">
        <Heading>{title}</Heading>
        {subtitle ? <p className={accent ? `is-${accent}` : "is-body"}>{subtitle}</p> : null}
      </div>
    </header>
  );
}
