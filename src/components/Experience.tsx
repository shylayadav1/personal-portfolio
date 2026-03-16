import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Innovate Insights Intern",
    company: "Purdue Research Foundation",
    period: "Jan 2026 – Present",
    description: "Developing data workflows and Power BI dashboards to track AI agent performance. Currently building a custom AI agent using Microsoft Copilot to streamline internal insights.",
  },
  {
    title: "Data Engineer Intern",
    company: "Amgen",
    period: "May 2025 – Aug 2025",
    description: "Built automated data pipelines and optimized SQL queries for large-scale pharmaceutical datasets. Focused on data integrity and cloud integration.",
  },
  {
    title: "Machine Learning Intern",
    company: "Skima AI",
    period: "Jun 2024 – Aug 2024",
    description: "Assisted in training and deploying ML models. Worked on data preprocessing and feature engineering to improve model accuracy.",
  }
];

const Experience = () => {
  return (
    <section className="container py-5 my-5">
      <motion.h2 
        className="display-6 fw-bold text-uppercase mb-5 text-center tracking-widest" 
        style={{ color: '#CEB888' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="position-relative">
        {/* The Vertical Line */}
        <div 
          className="position-absolute start-50 translate-middle-x h-100" 
          style={{ width: '2px', backgroundColor: 'rgba(206, 184, 136, 0.2)', top: 0 }}
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className={`d-flex flex-column align-items-center mb-5 position-relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* The Dot on the Line */}
            <div 
              className="rounded-circle mb-3" 
              style={{ width: '12px', height: '12px', backgroundColor: '#CEB888', zIndex: 2 }}
            />

            <div className="col-md-8 text-center bg-dark p-4 rounded-3 border border-secondary shadow-sm">
              <span className="small text-uppercase fw-bold" style={{ color: '#CEB888' }}>
                {exp.period}
              </span>
              <h3 className="h5 fw-bold mt-2 text-white">{exp.title}</h3>
              <p className="text-secondary mb-3">{exp.company}</p>
              <p className="small text-light-50">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;