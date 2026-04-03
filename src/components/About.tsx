import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container py-5 my-5">
      {/* 1. about me title */}
      <div className="mx-auto" style={{ maxWidth: "1000px" }}>
        <motion.h2
          className="h4 fw-bold text-uppercase mb-5 tracking-widest text-start"
          style={{ color: "#CEB888" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* 2. profile image  */}
        <motion.img
          src="/shyla-profile.jpg"
          alt="Shyla Yadav"
          className="float-start rounded-circle me-5 mb-3 d-none d-md-block"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            border: "3px solid rgba(206, 184, 136, 0.4)",
            boxShadow: "0 0 25px rgba(206, 184, 136, 0.15)",
            clear: "right",
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        />

        {/* 3.body paragraph */}
        <motion.div
          className="text-white" 
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "white", 
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I am a <strong style={{ color: "#CEB888" }}>Data Analytics</strong>{" "}
            student at{" "}
            <strong style={{ color: "#CEB888" }}>Purdue University</strong>,
            graduating in{" "}
            <strong style={{ color: "#CEB888" }}>December 2026</strong>. My work
            lives at the intersection of{" "}
            <strong className="text-white">software engineering</strong> and{" "}
            <strong className="text-white">machine learning</strong>, where I
            focus on building systems that transform complex data into
            meaningful insights and intelligent tools.
          </p>

          <p>
            Outside of tech, I have a deep passion for any artistic expression,
            whether it be painting, creative writing, or exploring new forms of
            design. I believe that creativity and structured problem-solving go
            hand-in-hand, and I often draw inspiration from art when designing
            robust
            <strong className="text-white"> data models</strong> and{" "}
            <strong className="text-white">AI agents</strong>.
          </p>

          <p>
            This unique blend of technical expertise and artistic sensibility
            drives me to create not just functional code, but solutions that are
            intuitive, ethical, and aesthetically resonant.
          </p>
        </motion.div>

        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default About;
