"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  ChevronDown,
  MessageCircle 
} from "lucide-react";

// ==========================================
// --- CONFIGURAÇÃO: COLOQUE SEUS LINKS AQUI ---
// ==========================================
const SOCIAIS = {
  github: "https://github.com/NiltonMartins", 
  linkedin: "https://www.linkedin.com/in/nilton-gimenes-martins/", 
  whatsapp: "https://wa.me/5516991975588", 
  email: "mailto:martirs.niltong@gmail.com",
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Portfolio() {
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-blue-500/30 font-sans antialiased">
      
      {/* Luzes de Fundo (Blur) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] -right-[5%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Navegação */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#050505]/40 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-bold tracking-[0.4em] uppercase cursor-pointer"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          NILTON <span className="text-blue-500 font-black">MARTINS</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-400">
          <button onClick={() => scrollTo('sobre')} className="hover:text-white transition-colors">Sobre</button>
          <button onClick={() => scrollTo('projetos')} className="hover:text-white transition-colors">Projetos</button>
          <a href={SOCIAIS.email} className="text-blue-400 hover:text-white transition-colors">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-8 bg-blue-500" />
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">Python Automation Architect</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}
          className="text-[13vw] md:text-[8.5vw] leading-[0.8] font-black tracking-tighter mb-12 text-white"
        >
          CÓDIGO QUE<br />GERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic font-serif pr-4 text-[14vw] md:text-[9.5vw]">VALOR</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="md:col-span-6 text-lg text-gray-400 leading-relaxed font-light"
          >
            Especialista em criar pontes entre processos manuais exaustivos e automações de alta performance. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="md:col-span-6 flex flex-wrap gap-4 md:justify-end"
          >
            <div className="flex gap-3">
              <a href={SOCIAIS.linkedin} target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Linkedin size={20}/></a>
              <a href={SOCIAIS.github} target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Github size={20}/></a>
              <a href={SOCIAIS.whatsapp} target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"><MessageCircle size={20}/></a>
            </div>
            
            <button 
              onClick={() => scrollTo('projetos')}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-900/20"
            >
              Ver Projetos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="sobre" className="relative z-10 py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <motion.h3 {...fadeUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter italic text-white">Expertise_</motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Zap />} title="RPA & Bots" desc="Scripts que executam tarefas repetitivas em escala industrial." />
          <FeatureCard icon={<Layers />} title="Data Pipeline" desc="Arquitetura de fluxos de dados para inteligência de negócio." />
          <FeatureCard icon={<Terminal />} title="Backend Core" desc="APIs robustas e motores de processamento em Python." />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <ProjectItem num="01" title="Automated Stock" tags={["Python", "APIs"]} desc="Monitoramento de ativos e arbitragem em tempo real." link={SOCIAIS.github} />
        <ProjectItem num="02" title="Data Scraper" tags={["Selenium", "SQL"]} desc="Extração inteligente de dados com bypass de bloqueios." link={SOCIAIS.github} />
      </section>

      {/* Footer */}
      <footer id="contato" className="relative z-10 py-40 border-t border-white/5 text-center">
        <motion.h2 {...fadeUp} className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-16 uppercase">
          VAMOS <span className="text-blue-500 font-serif italic">CONECTAR</span>?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10">
           <a href={SOCIAIS.linkedin} target="_blank" className="text-xs uppercase tracking-[0.4em] font-bold text-gray-500 hover:text-white transition-colors italic">LinkedIn</a>
           <a href={SOCIAIS.github} target="_blank" className="text-xs uppercase tracking-[0.4em] font-bold text-gray-500 hover:text-white transition-colors italic">GitHub</a>
           <a href={SOCIAIS.whatsapp} target="_blank" className="text-xs uppercase tracking-[0.4em] font-bold text-gray-500 hover:text-white transition-colors italic">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

// Sub-componentes
function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div {...fadeUp} className="p-10 bg-white/[0.01] border border-white/[0.03] rounded-[3rem] hover:border-blue-500/20 transition-all group">
      <div className="mb-8 text-blue-500 scale-150 origin-left group-hover:scale-[1.7] transition-transform duration-500">{icon}</div>
      <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light text-sm">{desc}</p>
    </motion.div>
  );
}

function ProjectItem({ num, title, tags, desc, link }: { num: string, title: string, tags: string[], desc: string, link: string }) {
  return (
    <motion.div {...fadeUp} className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-white/5 hover:bg-white/[0.01] transition-colors">
      <div className="md:col-span-1 text-gray-700 font-mono text-xl">{num}</div>
      <div className="md:col-span-5">
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors italic">{title}</h3>
        <div className="flex gap-3 flex-wrap">{tags.map(tag => (
          <span key={tag} className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-gray-500 font-bold">{tag}</span>
        ))}</div>
      </div>
      <div className="md:col-span-5 text-gray-400 font-light flex items-center">{desc}</div>
      <div className="md:col-span-1 flex items-center justify-end">
        <a href={link} target="_blank" className="p-4 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight size={24} />
        </a>
      </div>
    </motion.div>
  );
}