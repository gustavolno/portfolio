"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const groups = [
  { name: "Backend e automação", items: ["Python", "FastAPI", "NestJS", "TypeScript", "Node.js", "Playwright", "PyMuPDF", "OCR"] },
  { name: "Frontend", items: ["React", "Next.js", "JavaScript", "Vite", "TailwindCSS", "Flutter"] },
  { name: "Dados", items: ["PostgreSQL", "Oracle SQL", "SQLite", "pgvector", "SQLAlchemy", "Elasticsearch", "Qlik Sense"] },
  { name: "IA", items: ["LLMs", "RAG", "Docling", "Ingestão de dados"] },
  { name: "Infra", items: ["Docker", "Rancher", "Git e GitHub", "Linux", "Cloudflare Tunnel"] },
];

const strip = groups.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[...strip, ...strip].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          Com o que eu trabalho
        </motion.h2>
        <dl className={styles.groups}>
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              className={styles.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
            >
              <dt>{g.name}</dt>
              <dd>{g.items.join(", ")}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
