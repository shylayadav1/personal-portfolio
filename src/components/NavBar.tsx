const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary"
      style={{ zIndex: 9999, backgroundColor: "#212529" }}
    >
      <div className="container">
        {/* Brand Logo - Your Initials */}
        <a
          className="navbar-brand fw-bold"
          href="#"
          style={{ color: "#CEB888" }}
        >
          SY
        </a>

        {/* Navigation Links */}
        <div className="d-flex gap-4">
          <a
            href="#about"
            className="nav-link text-uppercase small tracking-widest text-light"
          >
            About
          </a>
          <a
            href="#experience"
            className="nav-link text-uppercase small tracking-widest text-light"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="nav-link text-uppercase small tracking-widest text-light"
          >
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
