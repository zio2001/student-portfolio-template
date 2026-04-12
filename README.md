# Student Portfolio Template (Designer Beginner Ver.)

실무 프로젝트가 아직 없는 초보 디자이너형 수강생을 위한 **학습용 포트폴리오 템플릿**입니다.

Next.js App Router + TypeScript + Tailwind CSS 기준으로 구성되어 있으며,
텍스트만 수정해도 자연스럽고 완성도 있는 포트폴리오를 빠르게 만들 수 있습니다.

## 섹션 구성

- Home
- About
- Projects
- Visual Keywords
- Strength
- Contact

## 어디를 수정하면 되나요?

초보자도 쉽게 수정할 수 있도록 주요 문구와 프로젝트 데이터를 한 파일로 분리했습니다.

### 1) 기본 정보/문구 수정

`data/siteContent.ts` 파일에서 아래 항목을 바꾸면 전체 사이트에 반영됩니다.

- 이름, 한 줄 소개, 스타일
- 관심 분야
- 배우는 도구
- 앞으로 만들고 싶은 작업
- 연락처
- 시각 키워드
- 강점

### 2) 프로젝트 수정

동일한 `data/siteContent.ts` 안의 `projects` 배열을 수정하세요.

각 프로젝트는 아래 구조로 되어 있습니다.

- `title`: 프로젝트 제목
- `description`: 프로젝트 의도/설명
- `designPoint`: 디자인 포인트
- `tools`: 사용 도구 배열

원하는 만큼 프로젝트를 추가/삭제할 수 있습니다.

### 3) 섹션 구조 수정

- `app/page.tsx`: 섹션 조립만 담당
- `components/*`: 섹션별 UI 컴포넌트

## 디자인 방향

- 미니멀하고 세련된 레이아웃
- 넓은 여백
- 카드형 프로젝트 구성
- 명확한 타이포 대비
- 모바일 반응형 구성

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 확인할 수 있습니다.
