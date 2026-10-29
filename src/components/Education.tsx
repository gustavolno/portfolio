"use client";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  { title: "Bacharelado em Engenharia de Software", where: "Anhanguera", when: "Conclusão em dezembro de 2026" },
  { title: "Qlik Sense Developer (Módulos I e II) e Qlik Sense Server", where: "NowVertical Academy · 32 h presenciais", when: "Maio de 2026" },
  { title: "Técnico em Informática", where: "Centro de Ensino Técnico de Brazlândia", when: "Concluído em julho de 2023" },
  { title: "Análise de Dados com Python e Inglês Técnico para Desenvolvimento de Software", where: "Cursos complementares", when: "Concluídos" },
];

export default function Education() {
  return (
    <section id="formacao" className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          Formação
        </motion.h2>
        <ul>
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
            >
              <h3>{it.title}</h3>
              <p>
                {it.where} · {it.when}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
