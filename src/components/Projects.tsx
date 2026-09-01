"use client";
import { motion } from "framer-motion";
import { Bot, FileText, ShoppingCart, Calendar, Car, PieChart, Lock, Globe, Calculator, LayoutTemplate } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "SiSMOB - Sistema Integrado",
    desc: "Portal unificado de mobilidade do GDF. Substituição do legado Oracle Forms por uma nova camada moderna (NestJS/React) integrando múltiplas subsecretarias, com geração de relatórios complexos em PDF e controle de frota (SCL/SIF).",
    tags: ["NestJS", "React", "Oracle DB", "Governo"],
    icon: <Globe size={24} />,
    color: "var(--accent-primary)"
  },
  {
    title: "Global Office Bot",
    desc: "Automação robótica desenvolvida em Python/Playwright para acessar painéis jurídicos legados. Injeta scripts JavaScript para bypass de restrições de input e gerencia filas de tarefas corporativas complexas.",
    tags: ["Python", "Playwright", "JavaScript", "Automation"],
    icon: <Bot size={24} />,
    color: "var(--accent-secondary)"
  },
  {
    title: "RAG Pipeline - Doc Smart",
    desc: "Processamento e análise de documentos (PDFs/Manuais) utilizando IA. Implementação de RAG com banco vetorial para extração semântica de dados governamentais e jurídicos.",
    tags: ["TypeScript", "pgvector", "LLMs", "AI"],
    icon: <Bot size={24} />,
    color: "var(--accent-tertiary)"
  },
  {
    title: "Gerador Automático de Termos",
    desc: "Sistema inteligente para cruzamento de planilhas financeiras e geração autônoma de Termos de Acordo. Reduziu o tempo de fechamento de horas para minutos.",
    tags: ["Python", "Data Processing", "PyMuPDF"],
    icon: <FileText size={24} />,
    color: "#ffaa00"
  },
  {
    title: "Calculadora de Dívidas (GEAP)",
    desc: "Calculadora customizada desenvolvida para auxiliar vendedoras na negociação de dívidas do plano de saúde GEAP (projeto Aldrigues Cândido). Automatiza cálculos complexos e geração de propostas.",
    tags: ["JavaScript", "Finance", "Automation", "UX"],
    icon: <Calculator size={24} />,
    color: "#00ffaa"
  },
  {
    title: "Jenne Hair - Agendamento",
    desc: "Plataforma SaaS para agendamentos e landing page de estética com foco absurdo em UX/UI e conversão, arquitetura serverless.",
    tags: ["TypeScript", "UX/UI", "Next.js"],
    icon: <Calendar size={24} />,
    color: "#ff00aa"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <div className={styles.tag}>Showcase</div>
          <h2 className={styles.title}>Projetos em <span>Destaque</span></h2>
        </motion.div>
        
        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`${styles.card} glass-panel`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ color: proj.color, borderColor: proj.color, backgroundColor: `${proj.color}15` }}>
                  {proj.icon}
                </div>
              </div>
              <h3 className={styles.projTitle}>{proj.title}</h3>
              <p className={styles.projDesc}>{proj.desc}</p>
              <div className={styles.tags}>
                {proj.tags.map((tag, i) => (
                  <span key={i} className={styles.projTag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}