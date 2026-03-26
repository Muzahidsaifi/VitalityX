import { motion } from "framer-motion";
import "./Programs.css";

const programs = [
  {
    title: "Wellness Optimization",
    desc: "Personalized programs based on biomarkers & lifestyle.",
  },
  {
    title: "Sleep Performance",
    desc: "Improve deep sleep cycles & recovery using science.",
  },
  {
    title: "Mental Performance",
    desc: "Boost focus, clarity and cognitive endurance.",
  },
];

export default function Programs() {
  return (
    <div className="programs">

      {/* Background Glow */}
      <div className="programs-bg"></div>

      {/* Hero */}
      <section className="programs-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Precision Health Programs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tailored health optimization powered by data, science and AI.
        </motion.p>
      </section>

      {/* Cards */}
      <section className="programs-grid">
        {programs.map((item, i) => (
          <motion.div
            key={i}
            className="program-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button>Explore</button>
          </motion.div>
        ))}
      </section>

    </div>
  );
}