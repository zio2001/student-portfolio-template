# DAY BY DAY 포트폴리오 홈페이지

참고 레이아웃(스크린샷 기준)의 분위기를 반영해 제작한 **Next.js App Router + TypeScript + Tailwind CSS** 포트폴리오 템플릿입니다.

## 실행 방법

```bash
npm install
npm run dev
```

빌드 확인:

```bash
npm run build
```

## 주요 파일 구조

```text
app/
  layout.tsx
  globals.css
  page.tsx
components/
  NavBar.tsx
  HeroSection.tsx
  AboutSection.tsx
  ServicesSection.tsx
  CareerSection.tsx
  ContactSection.tsx
  Reveal.tsx
  Footer.tsx
data/
  siteContent.ts
```

## 수정 포인트

### 1) 브랜드/문구/링크 변경
- `data/siteContent.ts`
  - 사이트명, 이름, 역할, 소개문구
  - 메뉴 항목
  - 버튼 링크(포트폴리오, 자료실, 다운로드)
  - 서비스/경력/연락처 데이터

### 2) 레이아웃 및 스타일 조정
- `app/page.tsx`: 섹션 순서
- `app/globals.css`: 공통 입력폼/전역 스타일
- `components/*.tsx`: 각 섹션 카드 및 UI

## 구현 포인트

- 원페이지 스크롤 구조 (Home, About, Services, Career, Contact)
- 상단 **고정형(sticky) 네비게이션**
- 모바일 **햄버거 메뉴**
- `framer-motion` 기반 스크롤 등장 애니메이션
- 카드/라운드/그림자/여백 강화로 실제 서비스 페이지 수준의 밀도 반영
