
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Phone, Linkedin, Download, Sparkles, BrainCircuit, Code2, Megaphone, Globe2, FileText } from 'lucide-react';
import './styles.css';

const t = {
  en: {
    about: 'About', project: 'Project', skills: 'Skills', contact: 'Contact',
    role: 'AI & Automation | Frontend Developer | Legal-Tech',
    hero: 'Luso-Brazilian professional building intelligent digital solutions for legal processes, automation, frontend and growth.',
    cv: 'Download CV', contactMe: 'Contact Me', linkedin: 'LinkedIn',
    badge: 'Luso-Brazilian • Legal-Tech • AI Automation',
    aboutTitle: 'About Me',
    aboutText: 'Legal professional with more than 15 years of experience in Portuguese citizenship processes. Today, I combine legal expertise, artificial intelligence, frontend development and automation to build practical digital solutions for real-world problems.',
    diffTitle: 'Strategic Difference',
    diffText: 'My background connects Brazil and Portugal, law and technology, product vision and execution. This allows me to understand complex legal workflows and transform them into efficient digital systems.',
    projectTitle: 'Main Project',
    projectName: 'LexPortugal AI',
    projectText: 'AI-powered platform for Portuguese citizenship document analysis using OCR and artificial intelligence. It helps identify document inconsistencies, Hague Apostille validation issues, eligibility risks and generates structured technical reports.',
    features: ['OCR document reading', 'Apostille detection', 'Automated analysis', 'Client dashboard', 'Technical report generation', 'Legal workflow automation'],
    skillsTitle: 'Skills',
    skillItems: [
      ['Frontend', 'HTML, CSS, JavaScript, React, Vite, Next.js, Tailwind CSS'],
      ['Backend & Data', 'Python, FastAPI, REST APIs, JSON, SQLite, PostgreSQL in progress'],
      ['AI & Automation', 'n8n, API integrations, OCR, AI workflows, WhatsApp automation'],
      ['Design & Growth', 'UX/UI, Canva, Photoshop, copywriting, social media, paid ads, lead generation']
    ],
    expTitle: 'Experience',
    exp: [
      ['Portuguese Citizenship Consultant', '2008 – Present', 'Document analysis, client support, process organization and expertise in Portuguese nationality cases.'],
      ['Creator & Developer — LexPortugal AI', 'Present', 'AI-powered platform for document analysis, OCR processing and report generation.'],
      ['AI Automation Developer', 'Present', 'WhatsApp automation, API integrations, lead qualification and scheduling systems.'],
      ['Social Media & Ads', 'Experience', 'Social media strategy, paid ads, creative content, copywriting and lead generation.']
    ],
    languagesTitle: 'Languages',
    languages: ['Portuguese: Native', 'Spanish: Intermediate', 'English: Intermediate — strong reading and writing, speaking in development'],
    contactTitle: 'Let’s connect',
    contactText: 'Open to remote opportunities, freelance projects, partnerships and legal-tech innovation.',
    footer: 'Built as a professional portfolio landing page.'
  },
  pt: {
    about: 'Sobre', project: 'Projeto', skills: 'Habilidades', contact: 'Contato',
    role: 'IA & Automação | Frontend Developer | Legal-Tech',
    hero: 'Profissional luso-brasileira criando soluções digitais inteligentes para processos jurídicos, automação, frontend e crescimento.',
    cv: 'Baixar CV', contactMe: 'Fale Comigo', linkedin: 'LinkedIn',
    badge: 'Luso-brasileira • Legal-Tech • Automação com IA',
    aboutTitle: 'Sobre Mim',
    aboutText: 'Profissional com formação jurídica e mais de 15 anos de experiência em processos de cidadania portuguesa. Hoje, combino conhecimento jurídico, inteligência artificial, desenvolvimento frontend e automação para criar soluções digitais práticas para problemas reais.',
    diffTitle: 'Diferencial Estratégico',
    diffText: 'Minha trajetória conecta Brasil e Portugal, direito e tecnologia, visão de produto e execução. Isso me permite compreender fluxos jurídicos complexos e transformá-los em sistemas digitais eficientes.',
    projectTitle: 'Projeto Principal',
    projectName: 'LexPortugal AI',
    projectText: 'Plataforma com IA para análise de documentos de cidadania portuguesa usando OCR e inteligência artificial. Ajuda a identificar inconsistências documentais, validação de Apostila de Haia, riscos de elegibilidade e gera relatórios técnicos estruturados.',
    features: ['Leitura OCR', 'Detecção de apostila', 'Análise automatizada', 'Dashboard de clientes', 'Relatório técnico', 'Automação jurídica'],
    skillsTitle: 'Habilidades',
    skillItems: [
      ['Frontend', 'HTML, CSS, JavaScript, React, Vite, Next.js, Tailwind CSS'],
      ['Backend & Dados', 'Python, FastAPI, APIs REST, JSON, SQLite, PostgreSQL em evolução'],
      ['IA & Automação', 'n8n, integrações por API, OCR, fluxos com IA, automação WhatsApp'],
      ['Design & Growth', 'UX/UI, Canva, Photoshop, copywriting, social media, anúncios pagos, geração de leads']
    ],
    expTitle: 'Experiência',
    exp: [
      ['Consultora em Cidadania Portuguesa', '2008 – Atual', 'Análise documental, atendimento ao cliente, organização de processos e expertise em nacionalidade portuguesa.'],
      ['Criadora & Desenvolvedora — LexPortugal AI', 'Atual', 'Plataforma com IA para análise documental, OCR e geração de relatórios.'],
      ['Desenvolvedora de Automação com IA', 'Atual', 'Automação via WhatsApp, integração com APIs, qualificação de leads e agendamento.'],
      ['Social Media & Anúncios', 'Experiência', 'Estratégia de redes sociais, anúncios pagos, criativos, copywriting e geração de leads.']
    ],
    languagesTitle: 'Idiomas',
    languages: ['Português: Nativo', 'Espanhol: Intermediário', 'Inglês: Intermediário — boa leitura e escrita, conversação em desenvolvimento'],
    contactTitle: 'Vamos conversar',
    contactText: 'Aberta a oportunidades remotas, projetos freelance, parcerias e inovação em legal-tech.',
    footer: 'Landing page profissional de portfólio.'
  },
  es: {
    about: 'Sobre mí', project: 'Proyecto', skills: 'Habilidades', contact: 'Contacto',
    role: 'IA & Automatización | Frontend Developer | Legal-Tech',
    hero: 'Profesional luso-brasileña creando soluciones digitales inteligentes para procesos legales, automatización, frontend y crecimiento.',
    cv: 'Descargar CV', contactMe: 'Contactar', linkedin: 'LinkedIn',
    badge: 'Luso-brasileña • Legal-Tech • Automatización con IA',
    aboutTitle: 'Sobre mí',
    aboutText: 'Profesional con formación jurídica y más de 15 años de experiencia en procesos de ciudadanía portuguesa. Actualmente combino conocimiento legal, inteligencia artificial, desarrollo frontend y automatización para crear soluciones digitales prácticas.',
    diffTitle: 'Diferencial Estratégico',
    diffText: 'Mi experiencia conecta Brasil y Portugal, derecho y tecnología, visión de producto y ejecución. Esto me permite comprender flujos legales complejos y transformarlos en sistemas digitales eficientes.',
    projectTitle: 'Proyecto Principal',
    projectName: 'LexPortugal AI',
    projectText: 'Plataforma con IA para análisis documental de ciudadanía portuguesa usando OCR e inteligencia artificial. Ayuda a identificar inconsistencias, validación de Apostilla de La Haya, riesgos de elegibilidad y genera informes técnicos.',
    features: ['Lectura OCR', 'Detección de apostilla', 'Análisis automatizado', 'Dashboard de clientes', 'Informes técnicos', 'Automatización legal'],
    skillsTitle: 'Habilidades',
    skillItems: [
      ['Frontend', 'HTML, CSS, JavaScript, React, Vite, Next.js, Tailwind CSS'],
      ['Backend & Datos', 'Python, FastAPI, APIs REST, JSON, SQLite, PostgreSQL en progreso'],
      ['IA & Automatización', 'n8n, integraciones API, OCR, flujos con IA, automatización WhatsApp'],
      ['Diseño & Growth', 'UX/UI, Canva, Photoshop, copywriting, social media, anuncios pagos, generación de leads']
    ],
    expTitle: 'Experiencia',
    exp: [
      ['Consultora en Ciudadanía Portuguesa', '2008 – Actual', 'Análisis documental, atención al cliente, organización de procesos y experiencia en nacionalidad portuguesa.'],
      ['Creadora & Desarrolladora — LexPortugal AI', 'Actual', 'Plataforma con IA para análisis documental, OCR y generación de informes.'],
      ['Desarrolladora de Automatización con IA', 'Actual', 'Automatización vía WhatsApp, integración con APIs, calificación de leads y agendamiento.'],
      ['Social Media & Anuncios', 'Experiencia', 'Estrategia de redes sociales, anuncios pagos, creatividad, copywriting y generación de leads.']
    ],
    languagesTitle: 'Idiomas',
    languages: ['Portugués: Nativo', 'Español: Intermedio', 'Inglés: Intermedio — buena lectura y escritura, conversación en desarrollo'],
    contactTitle: 'Hablemos',
    contactText: 'Abierta a oportunidades remotas, proyectos freelance, alianzas e innovación legal-tech.',
    footer: 'Landing page profesional de portafolio.'
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const c = t[lang];

  return (
    <main>
      <header className="header">
        <a className="logo" href="#">PA</a>
        <nav>
          <a href="#about">{c.about}</a>
          <a href="#project">{c.project}</a>
          <a href="#skills">{c.skills}</a>
          <a href="#contact">{c.contact}</a>
        </nav>
        <div className="langs">
          {['en','pt','es'].map(l => <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="pill"><Sparkles size={16}/>{c.badge}</div>
          <h1>Paloma Aguiar</h1>
          <h2>{c.role}</h2>
          <p>{c.hero}</p>
          <div className="cta">
            <a className="btn primary" href="#cv"><Download size={18}/>{c.cv}</a>
            <a className="btn" href="mailto:palomaventura@gmail.com"><Mail size={18}/>{c.contactMe}</a>
            <a className="btn" href="https://www.linkedin.com/in/palomaguiar100" target="_blank"><Linkedin size={18}/>{c.linkedin}</a>
          </div>
        </div>
        <div className="heroCard">
          <BrainCircuit size={50}/>
          <h3>LexPortugal AI</h3>
          <p>AI-powered legal document intelligence.</p>
          <div className="miniGrid"><span>OCR</span><span>APIs</span><span>n8n</span><span>Frontend</span></div>
        </div>
      </section>

      <section id="about" className="grid2 section">
        <div className="card"><h2>{c.aboutTitle}</h2><p>{c.aboutText}</p></div>
        <div className="card accent"><h2>{c.diffTitle}</h2><p>{c.diffText}</p></div>
      </section>

      <section id="project" className="section">
        <div className="sectionTitle"><span><BrainCircuit size={18}/>{c.projectTitle}</span><h2>{c.projectName}</h2><p>{c.projectText}</p></div>
        <div className="features">{c.features.map(f => <div className="feature" key={f}><FileText size={22}/><span>{f}</span></div>)}</div>
      </section>

      <section id="skills" className="section">
        <div className="sectionTitle"><span><Code2 size={18}/>{c.skillsTitle}</span></div>
        <div className="skills">{c.skillItems.map(([title, text]) => <div className="card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="section">
        <div className="sectionTitle"><span><Megaphone size={18}/>{c.expTitle}</span></div>
        <div className="timeline">{c.exp.map(([title, date, text]) => <div className="timelineItem" key={title}><strong>{title}</strong><small>{date}</small><p>{text}</p></div>)}</div>
      </section>

      <section className="section grid2">
        <div className="card"><h2><Globe2 size={22}/>{c.languagesTitle}</h2><ul>{c.languages.map(x => <li key={x}>{x}</li>)}</ul></div>
        <div id="cv" className="card accent"><h2>CV</h2><p>Upload your PDFs into the public folder and keep these file names.</p><div className="cta small"><a className="btn primary" href="/Paloma_Aguiar_Europass_EN.pdf" target="_blank">Europass EN</a><a className="btn" href="/Paloma_Aguiar_CV_Atualizado.pdf" target="_blank">CV PT</a></div></div>
      </section>

      <section id="contact" className="contact section">
        <h2>{c.contactTitle}</h2>
        <p>{c.contactText}</p>
        <div className="contactCards">
          <a href="mailto:palomaventura@gmail.com"><Mail/> palomaventura@gmail.com</a>
          <a href="https://wa.me/5521972952963" target="_blank"><Phone/> +55 21 97295-2963</a>
          <a href="https://www.linkedin.com/in/palomaguiar100" target="_blank"><Linkedin/> palomaguiar100</a>
        </div>
      </section>
      <footer>{c.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
