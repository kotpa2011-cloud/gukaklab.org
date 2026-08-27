import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABOUT",
  description: "국악 길라잡이 비즈니스 랩의 관점과 과정, 페이스메이커를 소개합니다.",
};

const workSteps = [
  {
    number: "1",
    title: "MEET UP : 익숙한 창작의 틀에서 벗어납니다.",
    body: [
      "당연하게 여겨온 공급자 중심의 기획 방식을 돌아봅니다.",
      "서로 다른 관점과 질문을 통해 생각의 경계를 넓히고",
      "관객 경험(CX)과 소통(Communication)이라는 새로운 시각을 더합니다.",
    ],
  },
  {
    number: "2",
    title: "BOOTCAMP : 팔리는 공연의 핵심을 찾아, 진짜 ‘상품’으로 만듭니다.",
    body: [
      "막연히 큰 규모를 그리기보다 지금 당장 실행 가능한 최적의 스케일에서",
      "공연의 핵심 상품성을 정의합니다. 4인 1조 팀 프로젝트로 관객이",
      "티켓을 구매할 명확한 이유를 구체화하고 쇼케이스 무대로 구현합니다.",
    ],
  },
  {
    number: "3",
    title: "SHOW UP : 관객 앞에서 자생력을 검증합니다.",
    body: [
      "완성된 공연을 실제 관객 앞에 선보입니다.",
      "기획 의도와 시장 반응 사이의 간극을 데이터로 확인하며,",
      "1회성 발표에 그치지 않고 지속해서 팔리는",
      "‘자생적인 국악 비즈니스 모델’을 증명합니다.",
    ],
  },
];

const pacemakers = [
  {
    number: "1",
    focus: "기획과 제작의 시선",
    name: "송혜리",
    image: "/images/gukak/pacemaker-1.png",
    alt: "송혜리 페이스메이커",
    bio: [
      "여우락 페스티벌 7대 제작총감독으로, 전통공연에 서로",
      "다른 장르와 감각을 연결해온 기획자.",
      "익숙한 공연을 새롭게 보고, 무대의 가능성을",
      "확장합니다.",
    ],
  },
  {
    number: "2",
    focus: "교육과 창작의 시선",
    name: "한지연",
    image: "/images/gukak/pacemaker-2.png",
    alt: "한지연 페이스메이커",
    bio: [
      "림컴센터예술교육연구소(LCI)의 TA 교육시스템을",
      "국내 최초로 도입한 예술교육 전문가.",
      "익숙한 답에서 벗어나, 스스로 질문하고 발견하는",
      "과정을 만듭니다.",
    ],
  },
  {
    number: "3",
    focus: "시장과 커뮤니케이션의 시선",
    name: "권희균",
    image: "/images/gukak/pacemaker-3.png",
    alt: "권희균 페이스메이커",
    bio: [
      "보테가 베네타, BMW MINI 등 패션·뷰티·라이프스타일",
      "시장을 넘나든 마케팅·커뮤니케이션 전문가.",
      "가치가 사람의 관심을 얻고, 실제 선택으로 이어지는",
      "방식을 살핍니다.",
    ],
  },
];

export default function AboutPage() {
  return (
    <article className="about-layout">
      <aside className="about-sidebar" aria-label="ABOUT 페이지 목차">
        <div className="sidebar-poster" aria-hidden="true">
          <span>BI</span>
          <strong>GUGAK</strong>
          <span>BIZ</span>
          <span>GAK</span>
          <strong>BIZ LAB</strong>
        </div>
        <nav>
          <Link href="#about">ABOUT</Link>
          <Link href="#how-we-work">HOW WE WORK</Link>
          <Link href="#pace-makers">PACE MAKERS</Link>
        </nav>
      </aside>

      <div className="about-content">
        <section id="about" className="editorial-section">
          <span className="section-rule" aria-hidden="true" />
          <h1>ABOUT</h1>
          <p className="section-kicker">예술의 바깥, 선택의 무대</p>
          <div className="about-copy">
            <p>
              &lt;국악길라잡이 : 비즈니스 랩&gt;은 예술성을 지키면서도,<br />
              국악이 시장에서 지속 가능한 ‘상품’으로 살아남는 새로운 문법을 실험합니다.
            </p>
            <p>
              관객의 선택은 단지 객석을 채우는 데 그치지 않습니다.<br />
              예술가가 다음 무대를 스스로 이어갈 수 있는 자생력을 만듭니다.
            </p>
            <p>
              국악길라잡이는 창작자의 관점에 시장 친화적인 시선을 더합니다.<br />
              공연을 순수 작품에 머무르게 하지 않고, 관객이 기꺼이 시간과 비용을<br />
              지불할 가치가 있는 ‘매력적인 문화상품’으로 다시 바라봅니다.
            </p>
            <p>
              우리는 시장을 예술의 반대편에 두지 않습니다.<br />
              시장은 예술이 소비자와 만나 지속 가능한 생명력을 얻는 가장 중요한 무대입니다.
            </p>
          </div>
        </section>

        <section id="how-we-work" className="editorial-section">
          <span className="section-rule" aria-hidden="true" />
          <h2>HOW WE WORK</h2>
          <p className="section-kicker section-kicker-magenta">
            관점을 바꾸고, 상품으로 짓고, 관객 앞에 섭니다.
          </p>
          <ol className="work-steps">
            {workSteps.map((step) => (
              <li key={step.number}>
                <span className="number-disc">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>
                    {step.body.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="pace-makers" className="editorial-section pace-section">
          <span className="section-rule" aria-hidden="true" />
          <h2>PACE MAKERS</h2>
          <p>
            국악길라잡이에는 정답을 알려주는 ‘일타 강사’ 대신 서로 다른 영역에서<br />
            자신의 길을 만들어온 세 명의 페이스메이커가 함께 합니다.<br />
            전통예술에서 익숙한 시선에 공연 기획, 예술교육, 마케팅과<br />
            커뮤니케이션의 관점을 더합니다.
          </p>

          <ol className="pacemaker-list">
            {pacemakers.map((person) => (
              <li key={person.number}>
                <div className="person-visual">
                  <p>
                    <span className="number-disc">{person.number}</span>
                    <span>{person.focus}</span>
                  </p>
                  <Image src={person.image} alt={person.alt} width={220} height={230} />
                </div>
                <div className="person-copy">
                  <h3>{person.name}</h3>
                  <p>
                    {person.bio.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
