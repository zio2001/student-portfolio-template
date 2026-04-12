export type NavItem = {
  label: string;
  href: string;
};

export const siteContent = {
  site: {
    name: "DAY BY DAY",
    owner: "유슈경",
    role: "디자이너",
    intro: "브랜드를 키워드로 키워 감성디자인 구현합니다.",
    tone: "전문적이고 따뜻한 느낌",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Career", href: "#career" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    title: "Hi, I'm 유슈경!",
    subtitle: "감성과 전략을 함께 설계하는 브랜딩 디자이너",
    description:
      "색상·타이포그래피 조화, 프로젝트 썸네일+아이콘 시스템으로 브랜드의 첫인상을 일관되게 완성합니다.",
    image: "/profile.jpg",
    ctas: [
      {
        label: "포트폴리오",
        href: "https://cafe.naver.com/metablock2338",
        primary: true,
      },
      {
        label: "자료실",
        href: "https://drive.google.com/drive/folders/1xCSUZqtHRYJZZrj7X09b9Nd3d10IuG5o",
      },
      {
        label: "프로필 다운로드",
        href: "/profile.pdf",
        download: true,
      },
    ],
  },
  about: {
    heading: "브랜드의 무드를 시각 언어로 번역합니다",
    body: "DAY BY DAY는 단순히 예쁜 화면이 아닌, 브랜드의 목소리와 사용자의 감정이 만나는 지점을 디자인합니다. 컬러 스토리, 타이포 계층, 아이콘 템플릿을 시스템으로 구성해 어떤 채널에서도 동일한 인상을 전달합니다.",
    values: [
      {
        title: "색상 체계",
        description: "메인/서브/포인트 컬러를 브랜드 톤에 맞춰 설계하고 접근성을 함께 점검합니다.",
      },
      {
        title: "타이포그래피 리듬",
        description: "정보 우선순위가 보이도록 타이틀, 본문, 캡션까지 리듬감 있게 구성합니다.",
      },
      {
        title: "썸네일 + 아이콘",
        description: "콘텐츠 카드와 아이콘 스타일을 일관되게 맞춰 브랜드 인지도를 높입니다.",
      },
    ],
  },
  services: [
    {
      title: "브랜드 아이덴티티 디자인",
      description:
        "로고/색상/폰트 가이드를 정리해 브랜드의 핵심 인상을 일관되게 전달합니다.",
    },
    {
      title: "상세페이지 & SNS 비주얼",
      description:
        "캠페인 목적에 맞춘 썸네일, 카드뉴스, 배너를 기획-디자인하여 전환 흐름을 만듭니다.",
    },
    {
      title: "UI 스타일링 & 컴포넌트",
      description:
        "웹/앱 화면에서 재사용 가능한 버튼, 카드, 섹션 컴포넌트를 설계해 운영 효율을 높입니다.",
    },
    {
      title: "디자인 QA & 리뉴얼",
      description:
        "기존 브랜드의 시각적 불균형을 진단하고, 디자인 톤을 유지한 채 점진적으로 리뉴얼합니다.",
    },
  ],
  career: {
    stats: [
      { label: "완료 프로젝트", value: "48+" },
      { label: "브랜드 리뉴얼", value: "21" },
      { label: "평균 만족도", value: "4.9/5" },
    ],
    timeline: [
      {
        period: "2024 - 현재",
        title: "DAY BY DAY | Lead Designer",
        description: "브랜드 디자인 컨설팅과 디지털 캠페인 비주얼 총괄",
      },
      {
        period: "2022 - 2024",
        title: "Freelance Designer",
        description: "중소 브랜드의 런칭 키트, 콘텐츠 썸네일, 상세페이지 제작",
      },
      {
        period: "2020 - 2022",
        title: "Visual Designer",
        description: "커머스 UI 개선 및 프로모션 콘텐츠 디자인",
      },
    ],
    awards: [
      "2025 Creative Branding Awards - Finalist",
      "2024 Seoul Design Meetup - Guest Speaker",
      "2023 Digital Visual Craft - Excellence Mention",
    ],
  },
  contact: {
    email: "hello@daybyday.design",
    phone: "010-1234-5678",
    location: "Seoul, Korea",
  },
};
