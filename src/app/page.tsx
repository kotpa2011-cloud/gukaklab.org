import Image from "next/image";

export default function HomePage() {
  return (
    <section className="home-poster" aria-labelledby="home-title">
      <h1 id="home-title" className="sr-only">
        국악 길라잡이: 비즈니스 랩
      </h1>

      <div className="desktop-poster" aria-hidden="true">
        <p className="poster-type poster-gugak">GUGAK</p>
        <p className="poster-type poster-biz-ghost">BIZ LAB</p>
        <p className="poster-type poster-gugak-ghost">GUGAK</p>
        <p className="poster-type poster-biz">BIZ LAB</p>

        <Image
          className="instrument instrument-janggu"
          src="/images/gukak/janggu-cutout.png"
          alt=""
          width={848}
          height={622}
          priority
        />
        <Image
          className="instrument instrument-fan"
          src="/images/gukak/fan-cutout.png"
          alt=""
          width={955}
          height={755}
          priority
        />
        <Image
          className="instrument instrument-geomungo"
          src="/images/gukak/geomungo-silhouette.svg"
          alt=""
          width={104}
          height={123}
        />
        <span className="gong-paper">
          <Image
            className="instrument instrument-gong"
            src="/images/gukak/gong-silhouette.svg"
            alt=""
            width={110}
            height={100}
          />
        </span>
      </div>

      <div className="mobile-poster" aria-hidden="true">
        <div className="mobile-word word-gugak">
          <Image src="/images/gukak/gugak-yellow.svg" alt="" fill sizes="35vw" />
          <Image src="/images/gukak/gugak-magenta.svg" alt="" fill sizes="35vw" />
        </div>
        <div className="mobile-word word-bizlab">
          <Image src="/images/gukak/bizlab-yellow.svg" alt="" fill sizes="35vw" />
          <Image src="/images/gukak/bizlab-magenta.svg" alt="" fill sizes="35vw" />
        </div>
        <Image
          className="mobile-geomungo"
          src="/images/gukak/geomungo-silhouette.svg"
          alt=""
          width={104}
          height={123}
        />
        <Image
          className="mobile-gong"
          src="/images/gukak/gong-silhouette.svg"
          alt=""
          width={110}
          height={100}
        />
        <Image
          className="mobile-janggu"
          src="/images/gukak/janggu-cutout.png"
          alt=""
          width={848}
          height={622}
          priority
        />
        <Image
          className="mobile-fan"
          src="/images/gukak/fan-cutout.png"
          alt=""
          width={955}
          height={755}
          priority
        />
      </div>
    </section>
  );
}
