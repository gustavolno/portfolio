"use client";
import { motion } from "framer-motion";
import ChaosToOrder from "./ChaosToOrder";
import styles from "./Hero.module.css";

const rise = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <motion.p className={styles.kicker} variants={rise} initial="hidden" animate="show" custom={0}>
            Estagiário de tecnologia · Engenharia de Software, 12/2026
          </motion.p>
          <motion.h1 className={styles.name} variants={rise} initial="hidden" animate="show" custom={1}>
            Gustavo
            <br />
            Lino
          </motion.h1>
          <motion.p className={styles.lead} variants={rise} initial="hidden" animate="show" custom={2}>
            Transformo o caos do dia a dia de um escritório em sistemas que rodam sozinhos.
          </motion.p>
          <motion.p className={styles.sub} variants={rise} initial="hidden" animate="show" custom={3}>
            Automação em Python, APIs em NestJS e FastAPI e IA para buscar em documentos. Hoje no
            Aldrigues Cândido Advocacia, antes na SEMOB-DF.
          </motion.p>
          <motion.div className={styles.actions} variants={rise} initial="hidden" animate="show" custom={4}>
            <a href="#projetos" className={styles.primary}>
              Ver a Central AC
            </a>
            <a href="/curriculo-gustavo-lino.pdf" className={styles.secondary} download>
              Baixar currículo
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChaosToOrder />
          <p className={styles.hint}>Clique na janela para bagunçar e organizar de novo.</p>
        </motion.div>
      </div>
    </section>
  );
}
