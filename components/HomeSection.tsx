const sectionStyle: React.CSSProperties = {
  padding: "48px 0 24px",
};

export default function HomeSection() {
  return (
    <section id="home" style={sectionStyle}>
      <h1 style={{ marginBottom: "8px" }}>홍길동 포트폴리오</h1>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        안녕하세요! 초보자도 쉽게 구성할 수 있는 포트폴리오 템플릿입니다.
      </p>
    </section>
  );
}
