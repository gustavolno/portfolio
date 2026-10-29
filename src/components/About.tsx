"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import styles from "./About.module.css";

const stats = [
  { to: 900, prefix: "+", label: "clientes na carteira da Central AC" },
  { to: 5, label: "negociadoras, cada uma com o próprio login" },
  { to: 15, label: "meses em sistemas do governo do DF" },
  { text: "12/26", label: "formatura em Engenharia de Software" },
];

function Count({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });

  useEffect(() => {
    if (!seen || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = prefix + Math.round(v)),
    });
    return () => controls.stop();
  }, [seen, to, prefix]);

  return <span ref={ref}>{prefix}0</span>;
}

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.photo}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/perfil.jpg" alt="Gustavo Lino" fill sizes="(max-width: 900px) 320px, 400px" />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Gosto de ver o trabalho repetitivo acabar.</h2>
          <p>
            Sou de Taguatinga, DF, e estou no último semestre de Engenharia de Software. Comecei
            em sistemas de mobilidade do governo do DF, usados por toda a população, e hoje levo
            essa experiência para a rotina de cobrança de um escritório de advocacia.
          </p>
          <p>
            Quando vejo uma tarefa feita à mão todo dia, penso em como um robô pode fazê-la. Cuido
            do banco de dados, da API e da tela, e trato dados de clientes com acesso restrito e
            atenção à LGPD.
          </p>
        </motion.div>
      </div>

      <ul className={styles.stats}>
        {stats.map((s) => (
          <li key={s.label}>
            <strong>{s.text ?? <Count to={s.to!} prefix={s.prefix} />}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
