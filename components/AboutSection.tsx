const sectionStyle: React.CSSProperties = {
  padding: "24px 0",
};

export default function AboutSection() {
  return (
    <section id="about" style={sectionStyle}>
      <h2>About</h2>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        자기소개, 관심 분야, 배우고 있는 기술을 간단히 적어보세요.
      </p>
      <ul style={{ color: "#374151", lineHeight: 1.8 }}>
        <li>이름 / 직무 목표</li>
        <li>기술 스택 (예: HTML, CSS, JavaScript, React)</li>
        <li>강점 한 줄 소개</li>
      </ul>
    </section>
  );
}
