"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./ChaosToOrder.module.css";

type Status = "ok" | "late" | "check";

// Posições do "caos" (em % do palco) e rotação; deterministas para não quebrar a hidratação.
const items: {
  chaos: string;
  order: string;
  status: Status;
  x: number;
  y: number;
  r: number;
}[] = [
  { chaos: "boleto_marco.pdf", order: "Parcela 3/12", status: "ok", x: 4, y: 6, r: -9 },
  { chaos: "termo de acordo.docx", order: "Acordo assinado", status: "ok", x: 46, y: 2, r: 6 },
  { chaos: "comprovante PIX", order: "Parcela 4/12", status: "ok", x: 20, y: 24, r: 11 },
  { chaos: "planilha_controle.xlsx", order: "Parcela 2/6", status: "late", x: 52, y: 30, r: -5 },
  { chaos: "print do WhatsApp", order: "Contato registrado", status: "ok", x: 2, y: 46, r: 8 },
  { chaos: "extrato do banco.pdf", order: "Pagamento conciliado", status: "ok", x: 40, y: 54, r: -12 },
  { chaos: "prazo vencendo?", order: "Em atraso: calcular", status: "late", x: 58, y: 66, r: 7 },
  { chaos: "alvará.pdf", order: "Verificar processo", status: "check", x: 8, y: 72, r: -6 },
  { chaos: "e-mail do cliente", order: "Cliente atualizado", status: "ok", x: 34, y: 86, r: 10 },
];

const ROW = 100 / (items.length + 0.6);

export default function ChaosToOrder() {
  const reduce = useReducedMotion();
  const [ordered, setOrdered] = useState(true);

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setTimeout>;
    // A ordem fica mais tempo na tela que o caos.
    const step = (on: boolean) => {
      setOrdered(on);
      timer = setTimeout(() => step(!on), on ? 4500 : 2200);
    };
    timer = setTimeout(() => step(false), 0);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <div
      className={styles.stage}
      onClick={() => setOrdered((o) => !o)}
      role="img"
      aria-label="Animação: arquivos e avisos soltos se organizando em uma lista de clientes com status"
    >
      <div className={styles.bar}>
        <span />
        <span />
        <span />
        <em>{ordered ? "Central AC · carteira" : "o dia a dia sem sistema"}</em>
      </div>
      <div className={styles.field}>
        {items.map((it, i) => (
          <motion.div
            key={it.chaos}
            className={`${styles.chip} ${ordered ? styles[it.status] : ""}`}
            initial={false}
            animate={
              ordered
                ? { left: "4%", top: `${4 + i * ROW}%`, rotate: 0, width: "92%" }
                : { left: `${it.x}%`, top: `${it.y}%`, rotate: it.r, width: "44%" }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 17,
              delay: i * 0.04,
            }}
          >
            <span className={styles.dot} />
            <span className={styles.label}>{ordered ? it.order : it.chaos}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
