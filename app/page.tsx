"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  MessageCircle 
} from "lucide-react";

const SOCIAIS = {
  github: "https://github.com/NiltonMartins", 
  linkedin: "https://www.linkedin.com/in/nilton-gimenes-martins/", 
  whatsapp: "https://wa.me/5516991975588", 
  email: "mailto:martirs.niltong@gmail.com",
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as any;

export default function Portfolio() {
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      
      {/* Luzes de Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] md:w-[40%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-[30%] -right-[5%] w-[50%] md:w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Navegação - Ajustada para altura menor */}
      <nav className="fixed top-0 w-full z-20 px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group cursor-pointer flex items-center"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image 
            src="/extenso_fundo_escuro.png" 
            alt="Nilton Martins" 
            width={1123} 
            height={144} 
            // Alterado: h-5 no mobile (pequeno) e md:h-7 no desktop (ajustado)
            className="relative h-5 md:h-7 w-auto object-contain"
            priority
          />
        </motion.div>
        
        <div className="flex gap-4 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold text-gray-400">
          <button onClick={() => scrollTo('sobre')} className="hover:text-white transition-colors">Sobre</button>
          <button onClick={() => scrollTo('projetos')} className="hidden md:block hover:text-white transition-colors">Projetos</button>
          <a href={SOCIAIS.whatsapp} className="text-blue-400 hover:text-white transition-colors">Contato</a>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4 md:mb-6"
        >
          <div className="h-[1px] w-8 bg-blue-500" />
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">Python Automation Architect</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[16vw] md:text-[8.5vw] leading-[0.9] md:leading-[0.8] font-black tracking-tighter mb-8 md:mb-12 text-white"
        >
          CÓDIGO QUE<br />GERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic font-serif pr-2">VALOR</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="md:col-span-6 text-base md:text-lg text-gray-400 leading-relaxed font-light"
          >
            Especialista em criar pontes entre processos manuais exaustivos e automações de alta performance para empresas que buscam escala.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="md:col-span-6 flex flex-wrap gap-4 md:justify-end"
          >
            <div className="flex gap-2">
              <SocialIcon href={SOCIAIS.linkedin} icon={<Linkedin size={18}/>} />
              <SocialIcon href={SOCIAIS.github} icon={<Github size={18}/>} />
              <SocialIcon href={SOCIAIS.whatsapp} icon={<MessageCircle size={18}/>} />
            </div>
            
            <button 
              onClick={() => scrollTo('projetos')}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              Ver Projetos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="sobre" className="relative z-10 py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <motion.h3 {...fadeUp} className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tighter italic text-white">Expertise_</motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard icon={<Zap />} title="RPA & Bots" desc="Scripts que executam tarefas repetitivas em escala industrial." />
          <FeatureCard icon={<Layers />} title="Data Pipeline" desc="Arquitetura de fluxos de dados para inteligência de negócio." />
          <FeatureCard icon={<Terminal />} title="Backend Core" desc="APIs robustas e motores de processamento em Python." />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="relative z-10 py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <ProjectItem 
          num="01" 
          title="Plataforma SaaS de Gerenciamento de Imóveis com Arquitetura Distribuída" 
          tags={["Django", "Nest.js", "Redis", "Docker", ]} 
          desc="SaaS full stack com backend robusto, arquitetura distribuída e deploy em cloud utilizando Vercel, Render e Neon. | 
  
                Para testar a plataforma, utilize as credenciais:

                Usuário: teste@teste.teste
                Senha: Teste@d4fe2f83" 
          link="https://uberhost-front.vercel.app/"
        />
        <ProjectItem 
          num="02" 
          title="Personal Portfolio" 
          tags={["Next.js", "Tailwind", "Framer Motion"]} 
          desc="Interface de alta performance com foco em UX/UI minimalista e animações fluidas." 
          link="https://github.com/NiltonMartins/portfolio"
        />
      </section>

      {/* Footer */}
      <footer id="contato" className="relative z-10 py-24 md:py-40 border-t border-white/5 text-center px-6">
        <motion.div {...fadeUp} className="flex justify-center mb-8 relative group">
           <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full opacity-50" />
           <Image 
             src="/Logo_fundo_escuro.png" 
             alt="NM Logo" 
             width={60} 
             height={60} 
             className="relative h-12 md:h-16 w-auto opacity-40 group-hover:opacity-100 transition-all duration-500" 
           />
        </motion.div>

        <motion.h2 {...fadeUp} className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-12 md:mb-16 uppercase">
          VAMOS <span className="text-blue-500 font-serif italic">CONECTAR</span>?
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
           <FooterLink href={SOCIAIS.linkedin} label="LinkedIn" />
           <FooterLink href={SOCIAIS.github} label="GitHub" />
           <FooterLink href={SOCIAIS.whatsapp} label="WhatsApp" />
        </div>
      </footer>
    </div>
  );
}

// Helpers de Componentes para limpar o código principal
function SocialIcon({ href, icon }: { href: string, icon: any }) {
  return (
    <a href={href} target="_blank" className="p-3 md:p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all">
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-white transition-colors italic">
      {label}
    </a>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div {...fadeUp} className="p-8 md:p-10 bg-white/[0.01] border border-white/[0.03] rounded-[2rem] md:rounded-[3rem] hover:border-blue-500/20 transition-all group">
      <div className="mb-6 md:mb-8 text-blue-500 scale-125 md:scale-150 origin-left group-hover:scale-[1.4] transition-transform duration-500">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-tighter text-white">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light text-xs md:text-sm">{desc}</p>
    </motion.div>
  );
}

function ProjectItem({ num, title, tags, desc, link }: { num: string, title: string, tags: string[], desc: string, link: string }) {
  return (
    <motion.div {...fadeUp} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-t border-white/5 hover:bg-white/[0.01] transition-colors">
      <div className="md:col-span-1 text-gray-700 font-mono text-lg md:text-xl">{num}</div>
      <div className="md:col-span-5">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors italic">{title}</h3>
        <div className="flex gap-2 flex-wrap">{tags.map(tag => (
          <span key={tag} className="text-[8px] md:text-[9px] uppercase tracking-widest border border-white/10 px-2 md:px-3 py-1 rounded-full text-gray-500 font-bold">{tag}</span>
        ))}</div>
      </div>
      <div className="md:col-span-5 text-gray-400 font-light flex items-center text-sm md:text-base">{desc}</div>
      <div className="md:col-span-1 flex items-center justify-end">
        <a href={link} target="_blank" className="p-3 md:p-4 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight size={20} />
        </a>
      </div>
    </motion.div>
  );
}