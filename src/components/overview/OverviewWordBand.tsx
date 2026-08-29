import Image from "next/image";

const rows = [
  [
    { src: "/images/gukak/overview-v2/bizlab-yellow.svg", width: 289, height: 125 },
    { src: "/images/gukak/overview-v2/gugak-purple.svg", width: 269, height: 125 },
    { src: "/images/gukak/overview-v2/bizlab-yellow.svg", width: 289, height: 125 },
  ],
  [
    { src: "/images/gukak/overview-v2/gugak-yellow.svg", width: 269, height: 125 },
    { src: "/images/gukak/overview-v2/bizlab-purple.svg", width: 289, height: 125 },
    { src: "/images/gukak/overview-v2/gugak-yellow.svg", width: 269, height: 125 },
  ],
] as const;

export default function OverviewWordBand() {
  return (
    <div className="overview-word-band" aria-hidden="true">
      {rows.map((row, rowIndex) => (
        <div className="overview-word-row" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              priority
              key={`${rowIndex}-${itemIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
