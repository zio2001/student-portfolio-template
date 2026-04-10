const sectionStyle: React.CSSProperties = {
  padding: "24px 0 48px",
};

export default function ContactSection() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact</h2>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        이메일: your-email@example.com
        <br />
        GitHub: github.com/your-id
      </p>
    </section>
  );
}
