"use client";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const others = [
  {
    title: "Robôs de apoio à cobrança",
    desc: "Geram termos de acordo a partir da planilha, preenchem o Global Office e consultam processos nos tribunais (e-SAJ, PJe e Eproc). O que levava horas passou a levar minutos.",
    tags: ["Python", "Playwright", "PyMuPDF", "OCR"],
  },
  {
    title: "Calculadora de dívidas",
    desc: "Calculadora usada pela equipe para negociar dívidas de plano de saúde, com geração da proposta.",
    tags: ["JavaScript", "Python"],
  },
  {
    title: "Vinculação de Validadores",
    desc: "Módulo do sistema de Transporte Urbano do DF (o antigo SITWEB) reescrito em NestJS e TypeScript, com rastreabilidade das operações.",
    tags: ["NestJS", "TypeScript", "Oracle", "PostgreSQL"],
  },
  {
    title: "Doc Smart: busca em documentos com IA",
    desc: "Lê PDFs, guarda o conteúdo em um banco vetorial e responde perguntas sobre os documentos com LLMs.",
    tags: ["Python", "Docling", "pgvector", "LLMs"],
  },
  {
    title: "Rebuyer",
    desc: "Marketplace para revenda segura de ingressos, com API própria e banco PostgreSQL na nuvem.",
    tags: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Jenne Hair",
    desc: "Agendamento online e página de apresentação para um salão de beleza.",
    tags: ["Next.js", "TypeScript"],
  },
];

const bars = [62, 88, 40, 74, 55];

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          O que eu construí
        </motion.h2>

        <motion.article
          className={styles.featured}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className={styles.featText}>
            <h3>Central AC Cobrança</h3>
            <p className={styles.featLead}>
              O sistema da cobrança do escritório: cada negociadora entra com o próprio login e vê
              só a sua carteira, e a gestão acompanha tudo em um painel.
            </p>
            <ul className={styles.points}>
              <li>Mais de 900 clientes, com status automático: em dia, atrasado, sem registro ou quitado.</li>
              <li>Lê os PDFs de boletos e PIX do banco e concilia os pagamentos sozinho.</li>
              <li>Calcula o atraso com multa direto no site do TJDFT.</li>
              <li>Acesso pela internet só com login, e um cliente nunca aparece para quem não é dono da carteira.</li>
            </ul>
            <div className={styles.tags}>
              {["Python", "FastAPI", "SQLite", "JavaScript", "Playwright", "Cloudflare Tunnel"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.mock} aria-hidden="true">
            <div className={styles.mockTop}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.mockBody}>
              <div className={styles.chart}>
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className={styles.bar}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease }}
                  />
                ))}
              </div>
              {["Em dia", "Atrasado", "Sem registro"].map((s, i) => (
                <div key={s} className={styles.row}>
                  <i className={styles[`d${i}`]} />
                  <b>{s}</b>
                  <em />
                </div>
              ))}
              <p className={styles.note}>Ilustração com dados fictícios</p>
            </div>
          </div>
        </motion.article>

        <ul className={styles.list}>
          {others.map((p, i) => (
            <motion.li
              key={p.title}
              className={styles.item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease }}
            >
              <div className={styles.itemHead}>
                <h3>{p.title}</h3>
                <span className={styles.itemTags}>{p.tags.join(" · ")}</span>
              </div>
              <div className={styles.itemBody}>
                <p>{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
