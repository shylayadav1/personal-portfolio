import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <h2
              className="h4 fw-bold text-uppercase tracking-widest"
              style={{ color: "#CEB888" }}
            >
              About Me
            </h2>
            <h1
              className="h2 fw-bold text-light-50"
              style={{ fontSize: "3.7rem" }}
            >
              Shyla Yadav
            </h1>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 d-flex justify-content-center"
          >
            <div className="position-relative">
              {/* The Golden Glow behind the photo */}
              <div
                className="position-absolute translate-middle start-50 top-50"
                style={{
                  width: "320px",
                  height: "320px",
                  background:
                    "radial-gradient(circle, rgba(206, 184, 136, 0.15) 0%, rgba(0,0,0,0) 70%)",
                  zIndex: -1,
                }}
              />

              <img
                src="/shyla-profile.jpg"
                alt="Shyla Yadav"
                className="img-fluid rounded-2 grayscale-to-color"
                style={{
                  maxWidth: "300px",
                  border: "1px solid rgba(206, 184, 136, 0.3)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lead fw-normal text-light-50 lh-lg"
          >
            <p>
              I am a <span style={{ color: "#CEB888" }}>Data Analytics</span>{" "}
              student at
              <strong> Purdue University</strong>, graduating in December 2026.
              My work lives at the intersection of software engineering and
              machine learning, where I focus on building systems that transform
              complex data into meaningful insights and intelligent tools.
            </p>
            <p className="mt-4">
              Outside of tech, I have a deep passion for any artistic
              expression, whether to create art pieces, appreciate music, or
              explore the world through travel and food.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
