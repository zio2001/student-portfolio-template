const navStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  padding: "12px 24px",
  zIndex: 10,
};

const listStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  fontSize: "14px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#111827",
  fontWeight: 600,
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li>
          <a href="#home" style={linkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
