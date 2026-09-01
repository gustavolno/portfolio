"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Code } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/5561998731492?text=" +
    encodeURIComponent("Olá, Gustavo! Vi seu portfólio e gostaria de conversar.");

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

            <a
              href="https://github.com/gustavolno"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Code size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {/* Ícone Oficial do WhatsApp */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <p>Feito por Gustavo Lino © 2026</p>
        <p>Taguatinga, DF — Brasil</p>
      </footer>
    </section>
  );
}
