import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 500 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative pt-5"
    >
      <motion.div
        className="position-fixed"
        style={{
          left: dx,
          top: dy,
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(206, 184, 136, 0.10) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="container text-center position-relative z-1"
        style={{ zIndex: 1 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="display-1 fw-bold tracking-tighter mb-2"
          variants={itemVariants}
          style={{ letterSpacing: "-2px" }}
        >
          Shyla Yadav
        </motion.h1>

        <motion.p
          className="lead fw-mono mb-5"
          variants={itemVariants}
          style={{ color: "#CEB888" }}
        >
          Data Analytics @ Purdue University
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-4"
          variants={itemVariants}
        >
          <a
            href="https://github.com/shylayadav1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-4 py-2 border-2 fw-bold"
            style={{
              borderColor: "#CEB888",
              color: "#CEB888",
              backgroundColor: "transparent",
            }}
          >
            GITHUB
          </a>
          <a
            href="#contact"
            className="btn rounded-1 px-4 py-2 fw-bold"
            style={{
              backgroundColor: "#CEB888",
              color: "#212529",
              border: "none",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            CONTACT ME
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
