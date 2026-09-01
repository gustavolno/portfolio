"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import styles from "./Education.module.css";

const educations = [
  {
    degree: "Bacharelado em Engenharia de Software",
    school: "Anhanguera",
    period: "Conclusão: Dezembro 2026",
    icon: <GraduationCap size={24} />
  },
  {
    degree: "Técnico em Informática",
    school: "Centro de Ensino Técnico Brazlândia",
    period: "Conclusão: Julho 2023",
    icon: <Award size={24} />
  },
  {
    degree: "Análise de Dados com Python",
    school: "Certificação Técnica",
    period: "Concluído",
    icon: <Award size={24} />
  }
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <div className={styles.tag}>Onde Aprendi</div>
          <h2 className={styles.title}>Formação <span>Acadêmica</span></h2>
        </motion.div>
        
        <div className={styles.grid}>
          {educations.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className={`${styles.card} glass-panel`}
            >
              <div className={styles.iconWrap}>
                {edu.icon}
              </div>
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.school}>{edu.school}</h4>
                <span className={styles.period}>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
