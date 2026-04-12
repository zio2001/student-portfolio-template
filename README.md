# 김민지 디자이너 포트폴리오 (Next.js 데모)

실무 경력이 없어도 **디자인 감각과 방향성**을 자연스럽게 보여줄 수 있도록 만든,
초보 수강생용 원페이지 포트폴리오 템플릿입니다.

- Next.js App Router
- TypeScript
- Tailwind CSS
- 반응형 웹

---

## 1) 실행 방법

아래 순서대로 실행하면 됩니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 확인하세요.

배포 전 빌드 확인:

```bash
npm run build
```

---

## 2) 프로젝트 구조

```text
app/
  layout.tsx
  globals.css
  page.tsx
components/
  NavBar.tsx
  HeroSection.tsx
  AboutSection.tsx
  ProjectsSection.tsx
  VisualKeywordsSection.tsx
  StrengthSection.tsx
  ContactSection.tsx
  Footer.tsx
data/
  siteContent.ts
```

---

## 3) 어디를 수정하면 되나요?

모든 텍스트 데이터는 **`data/siteContent.ts` 하나**에서 관리합니다.
처음 사용하는 분은 이 파일만 수정해도 충분합니다.

### 이름/소개 수정 위치

- `siteContent.hero`
- `siteContent.about`

### 프로젝트 카드 수정 위치

- `siteContent.projects` 배열
- 프로젝트를 추가할 때는 기존 객체 형식을 복사해서 붙여넣으면 됩니다.

### 키워드 수정 위치

- `siteContent.keywords`

### 연락처 수정 위치

- `siteContent.contact`

---

## 4) 초보자를 위한 수정 팁

1. 먼저 `data/siteContent.ts`에서 텍스트만 본인 정보로 교체합니다.
2. `npm run dev` 상태에서 저장하면 화면이 자동 갱신됩니다.
3. 문구 수정이 끝나면 `npm run build`로 최종 오류 여부를 확인하세요.

---

## 5) 섹션 구성

- 홈 (Hero)
- 소개 (About)
- 프로젝트 (Projects)
- 키워드 (Visual Keywords)
- 강점 (My Strengths)
- 연락처 (Contact)

상단 메뉴는 sticky 상태로 고정되며, 클릭 시 각 섹션으로 스크롤 이동합니다.
