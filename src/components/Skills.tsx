"use client";
import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud, Brain, Layers } from "lucide-react";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Backend & Automações",
    icon: <Server size={24} />,
    color: "var(--accent-primary)",
    skills: ["Python", "NestJS", "TypeScript", "FastAPI", "Playwright", "PyMuPDF"]
  },
  {
    title: "Frontend & Mobile",
    icon: <Layout size={24} />,
    color: "var(--accent-secondary)",
    skills: ["React", "Next.js", "Vite", "TailwindCSS", "Flutter", "Dart"]
  },
  {
    title: "Bancos de Dados",
    icon: <Database size={24} />,
    color: "var(--accent-tertiary)",
    skills: ["PostgreSQL", "Oracle SQL", "PL/SQL", "SQLAlchemy", "Elasticsearch"]
  },
  {
    title: "IA & Dados",
    icon: <Brain size={24} />,
    color: "#ff00aa",
    skills: ["RAG", "LLMs", "pgvector", "Docling", "Qlik Sense", "Análise de Dados"]
  },
  {
    title: "DevOps & Infra",
    icon: <Cloud size={24} />,
    color: "#ffaa00",
    skills: ["Docker", "Git/GitHub", "Linux", "Rancher", "WSL2"]
  },
  {
    title: "BI & Qlik Sense",
    icon: <Layers size={24} />,
    color: "#00ffaa",
    skills: ["Qlik Sense Developer", "Star Schema", "Set Analysis", "Data Modeling"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <div className={styles.tag}>Competências</div>
          <h2 className={styles.title}>Stack <span>Técnica</span></h2>
        </motion.div>
        
        <div className={styles.grid}>
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className={`${styles.card} glass-panel`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ color: cat.color, borderColor: cat.color }}>
                  {cat.icon}
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.tags}>
                {cat.skills.map((skill, i) => (
                  <span key={i} className={styles.tagItem}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
