import { motion } from "framer-motion";

const projects = [
  {
    title: "Gender & Age Predictor",
    desc: "Transformers classification model using voter registration data.",
    tech: ["Python", "Transformers", "Data Cleaning"],
    link: "#" // Link to your GitHub
  },
  {
    title: "Housing Price Prediction",
    desc: "Machine Learning model to forecast California real estate trends.",
    tech: ["Scikit-Learn", "Pandas", "Regression"],
    link: "#"
  }
];

const Projects = () => (
  <section id="projects" className="container py-5 my-5">
    <h2 className="h4 fw-bold text-uppercase mb-5 text-center" style={{ color: "#CEB888" }}>
      // Featured Projects
    </h2>
    <div className="row g-4">
      {projects.map((p, i) => (
        <div key={i} className="col-md-6">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-4 rounded-4 h-100"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.03)", 
              border: "1px solid rgba(206, 184, 136, 0.2)" 
            }}
          >
            <h3 className="h5 text-white mb-3">{p.title}</h3>
            <p className="text-secondary small">{p.desc}</p>
            <div className="d-flex gap-2">
              {p.tech.map(t => <span className="badge border border-secondary text-secondary" style={{fontSize: '10px'}}>{t}</span>)}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;