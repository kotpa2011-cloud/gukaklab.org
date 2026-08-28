import Image from "next/image";

const graphics = {
  fan: {
    src: "/images/gukak/home-v2/fan.png",
    width: 1711,
    height: 1477,
  },
  geomungo: {
    src: "/images/gukak/home-v2/geomungo.png",
    width: 1380,
    height: 1363,
  },
  gong: {
    src: "/images/gukak/home-v2/gong.png",
    width: 1414,
    height: 1330,
  },
  janggu: {
    src: "/images/gukak/home-v2/janggu.png",
    width: 1437,
    height: 1686,
  },
} as const;

type GraphicName = keyof typeof graphics;

function RollingLane({
  graphic,
  className,
}: {
  graphic: GraphicName;
  className: string;
}) {
  const asset = graphics[graphic];

  return (
    <div className={`rolling-lane ${className}`}>
      <div className="rolling-track">
        {[0, 1].map((copy) => (
          <div className="rolling-sequence" key={copy}>
            <div className={`rolling-object rolling-object-${graphic}`}>
              <div className="rolling-spinner">
                <Image
                  className={`rolling-asset rolling-asset-${graphic}`}
                  src={asset.src}
                  alt=""
                  width={asset.width}
                  height={asset.height}
                  priority={copy === 0}
                  sizes="(max-width: 700px) 46vw, 23vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="home-poster" aria-labelledby="home-title">
      <h1 id="home-title" className="sr-only">
        국악 길라잡이: 비즈니스 랩
      </h1>

      <div className="desktop-poster" aria-hidden="true">
        <div className="poster-background poster-background-pc">
          <Image
            className="poster-pattern poster-pattern-pc"
            src="/images/gukak/home-v2/pattern-pc.svg"
            alt=""
            width={1920}
            height={1430}
            priority
          />

          <Image
            className="pc-type pc-gugak-ghost"
            src="/images/gukak/home-v2/pc-gugak-ghost.svg"
            alt=""
            width={804}
            height={374}
            priority
          />
          <Image
            className="pc-type pc-bizlab-ghost"
            src="/images/gukak/home-v2/pc-bizlab-ghost.svg"
            alt=""
            width={864}
            height={374}
            priority
          />
          <Image
            className="pc-type pc-gugak"
            src="/images/gukak/home-v2/pc-gugak.svg"
            alt=""
            width={804}
            height={374}
            priority
          />
          <Image
            className="pc-type pc-bizlab"
            src="/images/gukak/home-v2/pc-bizlab.svg"
            alt=""
            width={864}
            height={374}
            priority
          />
        </div>

        <RollingLane graphic="janggu" className="lane-janggu" />
        <RollingLane graphic="fan" className="lane-fan" />
        <RollingLane graphic="geomungo" className="lane-geomungo" />
        <RollingLane graphic="gong" className="lane-gong" />
      </div>

      <div className="mobile-poster" aria-hidden="true">
        <div className="poster-background poster-background-mo">
          <Image
            className="poster-pattern poster-pattern-mo"
            src="/images/gukak/home-v2/pattern-mo.svg"
            alt=""
            width={1920}
            height={1430}
            priority
          />

          <span className="mo-type mo-gugak-ghost">
            <Image src="/images/gukak/home-v2/mo-gugak-ghost.svg" alt="" width={282} height={131} />
          </span>
          <span className="mo-type mo-gugak">
            <Image src="/images/gukak/home-v2/mo-gugak.svg" alt="" width={282} height={131} />
          </span>
          <span className="mo-type mo-bizlab">
            <Image src="/images/gukak/home-v2/mo-bizlab.svg" alt="" width={303} height={131} />
          </span>
          <span className="mo-type mo-bizlab-ghost">
            <Image src="/images/gukak/home-v2/mo-bizlab-ghost.svg" alt="" width={303} height={131} />
          </span>
          <span className="mo-type mo-gugak-ghost mo-gugak-ghost-repeat">
            <Image src="/images/gukak/home-v2/mo-gugak-ghost.svg" alt="" width={282} height={131} />
          </span>
          <span className="mo-type mo-gugak mo-gugak-repeat">
            <Image src="/images/gukak/home-v2/mo-gugak.svg" alt="" width={282} height={131} />
          </span>
        </div>

        <RollingLane graphic="geomungo" className="lane-geomungo" />
        <RollingLane graphic="gong" className="lane-gong" />
        <RollingLane graphic="janggu" className="lane-janggu" />
        <RollingLane graphic="fan" className="lane-fan" />
      </div>
    </section>
  );
}
