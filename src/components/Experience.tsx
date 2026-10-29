"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Experience.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const jobs = [
  {
    company: "Aldrigues Cândido Advocacia",
    role: "Estagiário de tecnologia · Automação e sistemas",
    period: "2026 – hoje",
    points: [
      "Criei a Central AC Cobrança, com login por negociadora, painel de gestão e conciliação automática dos pagamentos.",
      "Fiz um robô que calcula o atraso com multa no site do TJDFT a partir da ficha do cliente.",
      "Automatizei termos de acordo, consultas a tribunais (e-SAJ, PJe e Eproc) e a leitura de termos escaneados com OCR.",
    ],
  },
  {
    company: "Secretaria de Mobilidade do DF (SEMOB-DF)",
    role: "Estagiário de tecnologia",
    period: "Mai 2025 – Ago 2026",
    points: [
      "Reescrevi em NestJS e TypeScript o módulo de Vinculação de Validadores do Transporte Urbano do DF.",
      "Desenvolvi APIs REST de sistemas de mobilidade usados por toda a população.",
      "Montei um pipeline de busca semântica em documentos (RAG) com Python, Docling e pgvector.",
      "Criei painéis gerenciais no Qlik Sense e otimizei consultas em Oracle e PostgreSQL.",
      "Fiz uma aplicação para gerir as imagens dos paraciclos de Brasília e operei ambientes com Docker e Rancher.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          Por onde passei
        </motion.h2>

        <div className={styles.timeline} ref={ref}>
          <div className={styles.track} aria-hidden="true">
            <motion.div className={styles.fill} style={{ scaleY: scrollYProgress }} />
          </div>

          {jobs.map((j) => (
            <motion.article
              key={j.company}
              className={styles.job}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <span className={styles.node} aria-hidden="true" />
              <p className={styles.period}>{j.period}</p>
              <h3>{j.company}</h3>
              <p className={styles.role}>{j.role}</p>
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
