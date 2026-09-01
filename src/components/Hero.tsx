"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, BrainCircuit } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import styles from "./Hero.module.css";

function StarBackground(props: any) {
  const ref = useRef<any>(null);
  // generate 5000 random points in a sphere
  const sphere = random.inSphere(new Float32Array(15000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffaa"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>
      
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <Terminal size={14} className={styles.icon} />
            <span>Fullstack Developer & AI Engineer</span>
          </div>
          
          <h1 className={styles.title}>
            Gustavo <br/>
            <span className={styles.highlight}>Lino.</span>
          </h1>
          
          <p className={styles.subtitle}>
            Construindo a ponte entre o <strong>caos administrativo</strong> e sistemas escaláveis. 
            Especialista em automações (<strong>Python/Playwright</strong>), IA Generativa (<strong>RAG/pgvector</strong>) 
            e desenvolvimento Web de alto desempenho (<strong>Next.js/NestJS</strong>).
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              Meus Projetos <Code size={16} />
            </a>
            <a href="#experience" className={styles.secondaryBtn}>
              Experiência <BrainCircuit size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
