const sectionStyle: React.CSSProperties = {
  padding: "24px 0",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  padding: "16px",
  marginBottom: "12px",
};

export default function ProjectsSection() {
  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <div style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>프로젝트 1</h3>
        <p style={{ color: "#4b5563" }}>
          어떤 문제를 해결했는지, 어떤 기술을 사용했는지 적어보세요.
        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>프로젝트 2</h3>
        <p style={{ color: "#4b5563" }}>
          팀 프로젝트였다면 맡은 역할과 기여도를 작성해보세요.
        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>프로젝트 3</h3>
        <p style={{ color: "#4b5563" }}>
          배운 점이나 개선하고 싶은 부분을 정리해보세요.
        </p>
      </div>
    </section>
  );
}
