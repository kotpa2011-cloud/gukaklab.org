# 국악 길라잡이 (gukak-lab)

전통공연예술진흥재단 국악 프로그램의 소개 및 성과 아카이브 웹사이트입니다.

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## 로컬 실행

```bash
npm install
npm run dev
```

실행 후 브라우저에서 http://localhost:3000 으로 접속합니다.

## Build

```bash
npm run build
```

## 주요 페이지

| 경로       | 설명            |
| ---------- | --------------- |
| `/`        | HOME            |
| `/about`   | ABOUT           |
| `/archive` | ARCHIVE 목록    |

ARCHIVE는 MEET UP / BOOTCAMP / SHOW UP 세 단계로 구분됩니다.

## 콘텐츠 관리 방식

별도의 CMS나 관리자 페이지를 사용하지 않습니다.
`src/data/archive.ts` 파일을 수정한 뒤 GitHub에 Push하면 Vercel이 자동으로 배포합니다.

### ARCHIVE 글 추가하기

`src/data/archive.ts` 의 `archiveItems` 배열에 항목을 추가합니다.

```ts
{
  id: "meetup-0831",          // URL에도 사용되는 고유 값 (중복 금지)
  stage: "MEET_UP",           // MEET_UP | BOOTCAMP | SHOW_UP
  date: "2025-08-31",         // YYYY-MM-DD
  title: "행사 제목",
  summary: "한 줄 소개",
  thumbnail: "/images/meetup-0831.jpg", // 선택 사항
  content: "본문 내용",                  // 선택 사항
}
```

날짜 오름차순 정렬은 자동으로 적용됩니다.

## 폴더 구조

```
src/
├─ app/          페이지 (폴더 이름 = URL 주소)
├─ components/   Header, Footer 등 재사용 요소
├─ data/         콘텐츠 데이터 (수정은 주로 여기)
├─ types/        데이터 형식 정의
└─ lib/          정렬·조회 등 공통 함수
public/          이미지 등 정적 파일
```

## 현재 상태

디자인 적용 전 단계입니다. 색상, 타이포그래피 등 시각 디자인은
Figma 시안 확정 후 `src/app/globals.css` 와 각 컴포넌트에 적용할 예정입니다.
