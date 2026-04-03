const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand navbar-dark fixed-top"
      style={{
        zIndex: 9999,
        backgroundColor: "rgba(33, 37, 41, 0.8)", // Slightly transparent
        backdropFilter: "blur(10px)", // This makes it look "smooth"
        padding: "1.2rem 0", // Adds more vertical space
      }}
    >
      <div className="container">
        {/* Brand/Logo */}
        <a
          className="navbar-brand fw-bold fs-4 tracking-tighter"
          href="#hero"
          style={{ color: "#CEB888" }}
        >
          SY
        </a>

        {/* Navigation Links */}
        <div className="ms-auto d-flex gap-5">
          {/* Increased gap from 4 to 5 for better spacing */}
          <a
            href="#about"
            className="nav-link text-uppercase small tracking-widest fw-semibold custom-nav-link"
          >
            About
          </a>
          <a
            href="#experience"
            className="nav-link text-uppercase small tracking-widest fw-semibold custom-nav-link"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="nav-link text-uppercase small tracking-widest fw-semibold custom-nav-link"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="nav-link text-uppercase small tracking-widest fw-semibold custom-nav-link"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
