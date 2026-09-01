"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.imageWrap}
          >
            <div className={styles.imageFrame}>
              <img src="/perfil.jpeg" alt="Gustavo Lino" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.decoBox}></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.content}
          >
            <div className={styles.tag}>Quem sou eu</div>
            <h2 className={styles.title}>Engenharia de <span>Software & Soluções</span></h2>
            <p className={styles.bio}>
              Sou desenvolvedor Fullstack de Taguatinga, DF, cursando Engenharia de Software
              e trabalhando na SEMOB-DF. Tenho vasta experiência prática com APIs em NestJS/TypeScript,
              frontend em React, automações complexas em Python e pipelines de IA generativa com RAG e pgvector.
            </p>
            <p className={styles.bio}>
              Gosto de transformar problemas reais em software que funciona — seja modernizando sistemas de governo críticos
              (utilizados por toda a população do DF), construindo arquiteturas robustas em bancos Oracle/PostgreSQL ou automatizando
              tarefas jurídicas repetitivas. Eu entrego a stack completa: do banco de dados ao frontend, da IA à infraestrutura.
            </p>

            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>+1</span>
                <span className={styles.statLabel}>Anos de Experiência</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Repositórios no GitHub</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>8+</span>
                <span className={styles.statLabel}>Projetos de Alto Impacto</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
