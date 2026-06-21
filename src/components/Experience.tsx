import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer Intern (TECDP)",
    company: "Cigna - Evernorth Services",
    period: "May 2026 – Present",
    bullets: [
      "Owned ML problem formulation and data infrastructure for an inbound fax forecasting system on Databricks, scaling data prep across 2M+ records (~300MB) to isolate a high-priority cohort of 21 status codes using a dual-volume ranking strategy.",
      "Engineered multivariate feature pipelines (mapping volume tiers, business priority queues, and client routing) to aggregate raw events into structured daily/hourly training datasets (393K+ rows) optimized for NeuralProphet and LSTM experiments.",
      "Shipped internal ML tooling using Streamlit and DuckDB to enable out-of-core exploratory data analysis and automated status-code profiling, reducing manual scoping effort and standardizing reproducible training slices."
    ]
  },
  {
    title: "Innovate Insights Intern",
    company: "Purdue Research Foundation",
    period: "Jan 2026 – Present",
    bullets: [
      "Developed and deployed custom Microsoft AI agents to automate the generation of 150+ non-confidential patent summaries, leveraging prompt engineering and RAG to streamline intellectual property workflows.",
      "Developing data workflows and Power BI dashboards to track AI agent performance metrics and support operational visibility.",
      "Building a custom AI agent using Microsoft Copilot Studio to streamline internal business insights and knowledge discovery."
    ]
  },
  {
    title: "Research Assistant",
    company: "Co-Intelligence Lab - Purdue University",
    period: "Sept 2025 – Present",
    bullets: [
      "Co-authoring a comprehensive literature review on smart home systems by synthesizing 100+ academic papers to identify critical gaps in Human-Computer Interaction (HCI).",
      "Processed and labeled student-AI interaction data with Python and pandas to isolate distinct learning patterns.",
      "Optimized downstream LLM tutoring model performance through iterative prompt refinement and structured interaction datasets."
    ]
  },
  {
    title: "Data Engineering Intern",
    company: "Amgen",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built 5+ automated data pipelines with SQL and Python to process log data, reducing manual processing time by ~40% and eliminating recurring data errors per week.",
      "Developed 3 Tableau dashboards for analytics, observability, and data quality, enabling real-time monitoring for a team of 15 stakeholders across 3 platforms.",
      "Utilized AWS CloudWatch and Excel for prototyping, validation, and maintaining data integrity during cloud integration."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Skima AI",
    period: "June 2024 – Aug 2024",
    bullets: [
      "Designed and trained a multi-class Transformers pipeline on structured tabular data using Hugging Face, achieving 82% accuracy on an imbalanced real-world dataset of 50K+ records.",
      "Applied geospatial feature engineering by integrating U.S. Census demographic data at the zip code level, improving model generalization by 7% over the baseline.",
      "Assisted in training and deploying ML models, focusing on data preprocessing and feature engineering to improve overall model accuracy."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container py-5 my-5">
      <motion.h2
        className="display-6 fw-bold text-uppercase mb-5 text-center tracking-widest"
        style={{ color: "#CEB888" }}
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
          style={{
            width: "2px",
            backgroundColor: "rgba(206, 184, 136, 0.2)",
            top: 0,
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="d-flex flex-column align-items-center mb-5 position-relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* The Dot on the Line */}
            <div
              className="rounded-circle mb-3"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#CEB888",
                zIndex: 2,
              }}
            />

            <div className="col-md-8 bg-dark p-4 rounded-3 border border-secondary shadow-sm text-start">
              <div className="text-center mb-3">
                <span
                  className="small text-uppercase fw-bold"
                  style={{ color: "#CEB888" }}
                >
                  {exp.period}
                </span>
                <h3 className="h5 fw-bold mt-2 text-white">{exp.title}</h3>
                <p className="text-secondary mb-0">{exp.company}</p>
              </div>
              
              <ul className="small text-light-50 ps-3 mb-0" style={{ listStyleType: "disc" }}>
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="mb-2 last:mb-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;