import HomeBackground from "@/components/home/HomeBackground";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomePage() {
  return (
    <>
      <section className="home-poster" aria-labelledby="home-title">
        <h1 id="home-title" className="sr-only">
          국악 길라잡이: 비즈니스 랩
        </h1>

        <HomeBackground />
      </section>
      <HomeFooter />
    </>
  );
}
