import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data & ML",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
    ],
  },
  {
    title: "Cloud & Dev",
    skills: ["AWS", "GitHub", "JIRA", "React", "Tableau", "Hadoop"],
  },
  {
    title: "AI Expertise",
    skills: ["Transformers", "Hugging Face", "OpenAI GPT", "Copilot Agents"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container py-5 my-5">
      <motion.h2
        className="h4 fw-bold text-uppercase mb-5 text-center tracking-widest"
        style={{ color: "#CEB888" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="row g-4 justify-content-center">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="p-4 rounded-3 h-100"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(206, 184, 136, 0.1)",
              }}
            >
              <h3 className="h6 fw-bold mb-3 text-white">{category.title}</h3>
              <div className="d-flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="badge rounded-pill fw-normal"
                    style={{
                      border: "1px solid #CEB888",
                      color: "#CEB888",
                      fontSize: "0.75rem",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
