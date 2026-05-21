import React, { useState } from 'react';
import './styles.css';
import { createRoot } from 'react-dom/client';
import {
  Mail,
  Phone,
  Download,
  Sparkles,
  BrainCircuit,
  Code2,
  Megaphone,
  Globe2,
  FileText,
  Rocket,
  BadgeCheck,
} from 'lucide-react';

import './styles.css';

const t = {
  en: {
    about: 'About',
    project: 'Project',
    skills: 'Skills',
    contact: 'Contact',

    role: 'Frontend Developer • AI Automation • Legal-Tech',

    hero:
      'Building intelligent digital experiences through frontend engineering, AI automation and modern product design.',

    cv: 'Download CV',
    contactMe: 'Contact Me',
    linkedin: 'LinkedIn',

    badge: 'Luso-Brazilian • AI • Frontend • Legal-Tech',

    aboutTitle: 'About Me',

    aboutText:
      'Luso-Brazilian professional with 15+ years of experience in Portuguese citizenship processes. Today focused on frontend development, AI-powered systems, automation and digital product experiences.',

    diffTitle: 'Strategic Difference',

    diffText:
      'My background combines law, automation, frontend engineering and product vision. This allows me to transform complex workflows into scalable digital solutions.',

    projectTitle: 'Featured Projects',

    projectName: 'LexPortugal AI',

    projectText:
      'AI-powered legal-tech platform for OCR document analysis, workflow automation and Portuguese citizenship processes.',

    features: [
      'OCR document reading',
      'AI-powered workflows',
      'Frontend dashboards',
      'Automation systems',
      'Legal-tech architecture',
      'API integrations',
    ],

    skillsTitle: 'Tech Stack',

    skillItems: [
      [
        'Frontend',
        'React, Next.js, JavaScript, Tailwind CSS, Responsive UI',
      ],

      [
        'Backend & APIs',
        'Python, FastAPI, REST APIs, PostgreSQL, JSON',
      ],

      [
        'AI & Automation',
        'n8n, OCR, AI Workflows, API Automation, WhatsApp Automation',
      ],

      [
        'UI/UX & Design',
        'Canva Pro, Photoshop, UX/UI Systems, Product Design',
      ],
    ],

    expTitle: 'Experience',

    exp: [
      [
        'Creator — LexPortugal AI',
        'Present',
        'AI-powered legal-tech platform focused on OCR processing, automation and frontend systems.',
      ],

      [
        'Frontend & Product Development',
        'Present',
        'Building interfaces, dashboards and modern digital products using React ecosystem.',
      ],

      [
        'Portuguese Citizenship Specialist',
        '2008 – Present',
        'Extensive experience in Portuguese nationality processes and legal documentation.',
      ],

      [
        'AI Automation Developer',
        'Present',
        'Automation systems, lead qualification, APIs and AI workflow integrations.',
      ],
    ],

    languagesTitle: 'Languages',

    languages: [
      'Portuguese: Native',
      'Spanish: Intermediate',
      'English: Intermediate',
    ],

    contactTitle: "Let's build something",

    contactText:
      'Open to remote opportunities, freelance projects and international collaborations.',

    footer: 'Professional Frontend & AI Portfolio.',
  },
};

function App() {
  const [lang] = useState('en');
  const c = t[lang];

  return (
    <main className="container">
      <header className="header">
        <a className="logo" href="#">
          PA
        </a>

        <nav>
          <a href="#about">{c.about}</a>
          <a href="#project">{c.project}</a>
          <a href="#skills">{c.skills}</a>
          <a href="#contact">{c.contact}</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <div className="pill">
            <Sparkles size={16} />
            {c.badge}
          </div>

          <h1>
            Building intelligent digital products with
            <span> AI, Frontend & Automation</span>
          </h1>

          <h2>{c.role}</h2>

          <p className="heroText">{c.hero}</p>

          <div className="heroStats">
            <div>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Frontend Systems</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Automation Workflows</span>
            </div>
          </div>

          <div className="cta">
            <a className="btn primary" href="#cv">
              <Download size={18} />
              {c.cv}
            </a>

            <a
              className="btn"
              href="mailto:palomaventura@gmail.com"
            >
              <Mail size={18} />
              {c.contactMe}
            </a>

            <a
              className="btn"
              href="https://www.linkedin.com/in/palomadaguiar100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span>
              {c.linkedin}
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <div className="iconBox">
              <BrainCircuit size={48} />
            </div>

            <h3>LexPortugal AI</h3>

            <p>
              AI-powered legal-tech platform for intelligent document
              analysis, OCR processing and automation systems.
            </p>

            <div className="miniGrid">
              <span>OCR</span>
              <span>React</span>
              <span>FastAPI</span>
              <span>n8n</span>
            </div>
          </div>

          <div className="floating top">
            <Rocket size={18} />
            Frontend Developer
          </div>

          <div className="floating bottom">
            <BadgeCheck size={18} />
            AI Product Builder
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
          <span>
            <BrainCircuit size={18} />
            {c.projectTitle}
          </span>

          <h2>{c.projectName}</h2>

          <p>{c.projectText}</p>
        </div>

        <div className="features">
          {c.features.map((f) => (
            <div className="feature" key={f}>
              <FileText size={20} />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionTitle">
          <span>
            <Code2 size={18} />
            {c.skillsTitle}
          </span>
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
          <span>
            <Megaphone size={18} />
            {c.expTitle}
          </span>
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
          <h2>
            <Globe2 size={20} />
            {c.languagesTitle}
          </h2>

          <ul>
            {c.languages.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div id="cv" className="card accent">
          <h2>Curriculum</h2>

          <p>
            Download professional CV versions below.
          </p>

          <div className="cta small">
            <a
              className="btn primary"
              href="/Paloma_Aguiar_Europass_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Europass EN
            </a>

            <a
              className="btn"
              href="/Paloma_Aguiar_CV_Atualizado.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV PT
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <h2>{c.contactTitle}</h2>

        <p>{c.contactText}</p>

        <div className="contactCards">
          <a href="mailto:palomaventura@gmail.com">
            <Mail />
            palomaventura@gmail.com
          </a>

          <a
            href="https://wa.me/5521972952963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone />
            +55 21 97295-2963
          </a>

          <a
            href="https://www.linkedin.com/in/palomadaguiar100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>in</span>
            palomadaguiar100
          </a>
        </div>
      </section>

      <footer>{c.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);