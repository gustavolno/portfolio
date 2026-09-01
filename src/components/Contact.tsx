"use client";
import { motion } from "framer-motion";
import { Mail, Code, Briefcase, Phone } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`${styles.box} glass-panel`}
        >
          <div className={styles.glow} />
          
          <h2 className={styles.title}>Vamos Conversar?</h2>
          <p className={styles.subtitle}>
            Aberto a oportunidades estratégicas. Seja para criar automações complexas, 
            integrar IA nos seus processos ou escalar plataformas governamentais.
          </p>
          
          <div className={styles.links}>
            <a href="mailto:gustavolinomil@gmail.com" className={styles.link}>
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="https://github.com/gustavolno" target="_blank" className={styles.link}>
              <Code size={18} />
              <span>GitHub</span>
            </a>

            <a href="#" className={styles.link}>
              <Phone size={18} />
              <span>(61) 9 9873-1492</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <p>Feito com ❤️ por Gustavo Lino © 2026</p>
        <p>Taguatinga, DF — Brasil</p>
      </footer>
    </section>
  );
}
