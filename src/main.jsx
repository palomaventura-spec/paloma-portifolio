import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Phone, Download, Sparkles, BrainCircuit, Code2, Megaphone, Globe2, FileText } from "lucide-react";
import './styles.css';

const t = { /* (mantém seu objeto t igual, não precisa mexer) */ };

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
          {['en','pt','es'].map(l => (
            <button 
              key={l} 
              className={lang === l ? 'active' : ''} 
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="pill"><Sparkles size={16}/>{c.badge}</div>
          <h1>Paloma Aguiar</h1>
          <h2>{c.role}</h2>
          <p>{c.hero}</p>

          <div className="cta">
            <a className="btn primary" href="#cv">
              <Download size={18}/> {c.cv}
            </a>

            <a className="btn" href="mailto:palomaventura@gmail.com">
              <Mail size={18}/> {c.contactMe}
            </a>

            <a 
              className="btn" 
              href="https://www.linkedin.com/in/palomaguiar100" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span> {c.linkedin}
            </a>
          </div>
        </div>

        <div className="heroCard">
          <BrainCircuit size={50}/>
          <h3>LexPortugal AI</h3>
          <p>AI-powered legal document intelligence.</p>
          <div className="miniGrid">
            <span>OCR</span>
            <span>APIs</span>
            <span>n8n</span>
            <span>Frontend</span>
          </div>
        </div>
      </section>

      <section id="about" className="grid2 section">
        <div className="card">
          <h2>{c.aboutTitle}</h2>
          <p>{c.aboutText}</p>
        </div>
        <div className="card accent">
          <h2>{c.diffTitle}</h2>
          <p>{c.diffText}</p>
        </div>
      </section>

      <section id="project" className="section">
        <div className="sectionTitle">
          <span><BrainCircuit size={18}/> {c.projectTitle}</span>
          <h2>{c.projectName}</h2>
          <p>{c.projectText}</p>
        </div>

        <div className="features">
          {c.features.map(f => (
            <div className="feature" key={f}>
              <FileText size={22}/>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionTitle">
          <span><Code2 size={18}/> {c.skillsTitle}</span>
        </div>

        <div className="skills">
          {c.skillItems.map(([title, text]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">
          <span><Megaphone size={18}/> {c.expTitle}</span>
        </div>

        <div className="timeline">
          {c.exp.map(([title, date, text]) => (
            <div className="timelineItem" key={title}>
              <strong>{title}</strong>
              <small>{date}</small>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section grid2">
        <div className="card">
          <h2><Globe2 size={22}/> {c.languagesTitle}</h2>
          <ul>
            {c.languages.map(x => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <div id="cv" className="card accent">
          <h2>CV</h2>
          <div className="cta small">
            <a className="btn primary" href="/Paloma_Aguiar_Europass_EN.pdf" target="_blank">Europass EN</a>
            <a className="btn" href="/Paloma_Aguiar_CV_Atualizado.pdf" target="_blank">CV PT</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <h2>{c.contactTitle}</h2>
        <p>{c.contactText}</p>

        <div className="contactCards">
          <a href="mailto:palomaventura@gmail.com">
            <Mail/> palomaventura@gmail.com
          </a>

          <a href="https://wa.me/5521972952963" target="_blank">
            <Phone/> +55 21 97295-2963
          </a>

          <a href="https://www.linkedin.com/in/palomaguiar100" target="_blank">
            <span>in</span> palomaguiar100
          </a>
        </div>
      </section>

      <footer>{c.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);