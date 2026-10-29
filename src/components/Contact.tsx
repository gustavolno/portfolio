"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const EMAIL = "gustavolinomil@gmail.com";
const whatsapp =
  "https://wa.me/5561998731492?text=" +
  encodeURIComponent("Olá, Gustavo! Vi seu portfólio e gostaria de conversar.");

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Vamos
          <br />
          conversar?
        </motion.h2>

        <div className={styles.side}>
          <a href={`mailto:${EMAIL}`} className={styles.mail}>
            {EMAIL}
          </a>
          <button type="button" onClick={copy} className={styles.copy} aria-live="polite">
            {copied ? "E-mail copiado" : "Copiar e-mail"}
          </button>
          <ul className={styles.links}>
            <li>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com/gustavolno" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-lino-601449356"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/curriculo-gustavo-lino.pdf" download>
                Currículo em PDF
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Gustavo Lino · Taguatinga, DF</p>
        <p>© 2026</p>
      </footer>
    </section>
  );
}
