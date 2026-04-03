import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-5 mt-5" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <div className="card border-secondary rounded-4 shadow-lg p-4" style={{ backgroundColor: '#161616' }}>
          <div className="card-body text-center">
            <h2 className="h4 fw-bold text-uppercase tracking-widest mb-2" style={{ color: "#CEB888" }}>
              Contact Me
            </h2>
            <p className="text-secondary small mx-auto" style={{ maxWidth: '420px' }}>
              Currently seeking 2027 Full-Time AI Engineering or Data Analytics roles in the Bay Area.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 mb-2">
              <motion.a
                href="mailto:shylayadav1@gmail.com"
                className="btn btn-outline-secondary text-white fw-semibold small text-uppercase tracking-wider"
                whileHover={{ backgroundColor: "rgba(206, 184, 136, 0.1)", color: "#CEB888" }}
                style={{ borderWidth: 2 }}
              >
                ✉️ Email
              </motion.a>

              <motion.a
                href="2026 - Resume - Shyla Yadav - Feb.pdf"
                target="_blank"
                className="btn btn-outline-secondary text-white fw-semibold small text-uppercase tracking-wider"
                whileHover={{ backgroundColor: "rgba(206, 184, 136, 0.1)", color: "#CEB888" }}
                style={{ borderWidth: 2 }}
              >
                📄 Resume
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/shyla-yadav/"
                target="_blank"
                className="btn btn-outline-secondary text-white fw-semibold small text-uppercase tracking-wider"
                whileHover={{ backgroundColor: "rgba(206, 184, 136, 0.1)", color: "#CEB888" }}
                style={{ borderWidth: 2 }}
              >
                🔗 LinkedIn
              </motion.a>
            </div>

            <div className="mt-4 pt-3 border-top border-dark text-center">
              <p className="text-uppercase tracking-widest mb-0" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
                Built with React & Framer Motion • Shyla Yadav 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
