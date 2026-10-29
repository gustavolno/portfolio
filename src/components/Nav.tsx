"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./Nav.module.css";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.logo}>
          Gustavo Lino
        </a>
        <nav className={styles.links} aria-label="Seções">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="/curriculo-gustavo-lino.pdf" className={styles.cv} download>
          Currículo
        </a>
      </div>
      <motion.div className={styles.progress} style={{ scaleX: progress }} />
    </header>
  );
}
