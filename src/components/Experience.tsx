"use client";
import { motion } from "framer-motion";
import { Briefcase, Activity } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Analista Administrativo & Engenheiro de Automações",
    company: "Aldrigues Cândido Advogados",
    period: "Atual",
    description: "Reestruturação tecnológica e gestão documental de alta performance.",
    achievements: [
      "Desenvolvimento de robôs (Python/Playwright) de alta complexidade para acessar plataformas jurídicas (Global Office), preencher formulários dinâmicos e injetar JavaScript para contornar barreiras de segurança e máscaras de dados legadas.",
      "Extração inteligente de dados em PDFs armazenados no Dropbox via PyMuPDF, automatizando leituras que antes eram 100% manuais e sujeitas a erro humano.",
      "Construção de um Gerador Automático de Termos de Acordo integrado a bases de dados financeiras.",
      "Manutenção de planilhas complexas, cruzamento de dados financeiros avançados e organização administrativa estratégica."
    ]
  },
  {
    role: "Estagiário de Tecnologia",
    company: "Secretaria de Mobilidade do DF (SEMOB-DF)",
    period: "Maio 2025 - Agosto 2026",
    description: "Governo do Distrito Federal: desenvolvendo sistemas de mobilidade urbana usados por toda a população do DF.",
    achievements: [
      "Modernização do módulo de Vinculação de Validadores do sistema de Transporte Urbano do DF (validadorVeiculo - antigo SITWEB) em TypeScript.",
      "Desenvolvimento de APIs robustas com NestJS e TypeScript para suporte a sistemas críticos de mobilidade.",
      "Implementação de pipeline completo de ingestão e busca semântica (RAG) utilizando Python, pgvector e Docling para consultas avançadas a LLMs baseadas em documentos internos.",
      "Desenvolvimento de aplicação para upload e gestão de imagens de paraciclos de Brasília (telaImagens) integrada a bancos PostgreSQL/Oracle.",
      "Gerenciamento de ambientes conteinerizados com Docker e geração de relatórios estratégicos com Qlik Sense."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <div className={styles.tag}>Trajetória</div>
          <h2 className={styles.title}>Experiência <span>Profissional</span></h2>
        </motion.div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className={`${styles.card} glass-panel`}
            >
              <div className={styles.glow} />
              <div className={styles.cardHeader}>
                <div className={styles.companyWrap}>
                  <Briefcase size={20} className={styles.icon} />
                  <h3 className={styles.company}>{exp.company}</h3>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <h4 className={styles.role}>{exp.role}</h4>
              <p className={styles.desc}>{exp.description}</p>
              <ul className={styles.achievements}>
                {exp.achievements.map((ach, i) => (
                  <li key={i}><Activity size={16} className={styles.bullet} /> <span>{ach}</span></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
