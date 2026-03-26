/* global html2pdf, gsap, AOS */

const RESUME_DATA = {
  name: "German Hernandez Lopez",
  title: {
    es: "Software Architect · Technical Lead · Senior Backend Engineer",
    en: "Software Architect · Technical Lead · Senior Backend Engineer",
  },
  contact: {
    location: {
      es: "Tlaxcala, México",
      en: "Tlaxcala, Mexico",
    },
    phone: "+52 56 1748 8375",
    email: "inggermantics@gmail.com",
    linkedin: "linkedin.com/in/german-hernandez-lopez-05a691110",
    github: "github.com/inggerman",
  },
  summary: {
    es: "Arquitecto de software con más de 10 años de experiencia en backend enterprise, fintech, onboarding digital, pagos, modernización tecnológica y liderazgo técnico. Combino criterio arquitectónico, ejecución hands-on, automatización y uso práctico de agentes de IA para construir plataformas mantenibles, escalables y listas para crecer.",
    en: "Software architect with 10+ years of experience across enterprise backend systems, fintech, digital onboarding, payments, platform modernization and technical leadership. I combine architectural judgment, hands-on execution, automation and practical AI agent usage to build maintainable, scalable systems ready to evolve.",
  },
  profile: {
    es: [
      "Ingeniero en Tecnologías de la Información y Comunicaciones con trayectoria desde desarrollo backend hasta arquitectura de software y liderazgo técnico.",
      "Experiencia sólida en fintech, onboarding digital, validación de identidad, pagos, QR, links de pago, P2P y plataformas transaccionales.",
      "Hands-on con Java, Go y Python, además de cloud, automatización, infraestructura como código, observabilidad y prácticas orientadas a confiabilidad.",
      "Experiencia usando agentes de IA, Cursor, Windsurf, prompt engineering, MCP y tooling asistido para acelerar diseño, implementación y delivery.",
      "Perfil orientado a diseño de sistemas, delivery de producto, modernización de legados y adopción práctica de IA aplicada a ingeniería.",
    ],
    en: [
      "Information and Communications Technology engineer with a career path that evolved from backend development into software architecture and technical leadership.",
      "Strong experience across fintech, digital onboarding, identity validation, payments, QR, payment links, P2P and transactional platforms.",
      "Hands-on with Java, Go and Python, plus cloud, automation, infrastructure as code, observability and reliability-oriented engineering practices.",
      "Experience using AI agents, Cursor, Windsurf, prompt engineering, MCP and assisted tooling to accelerate design, implementation and delivery.",
      "Focused on system design, product delivery, legacy modernization and practical AI adoption for software engineering.",
    ],
  },
  focus: {
    es: [
      "Software Architecture",
      "Backend Engineering",
      "Fintech & Payments",
      "Software Automation",
      "QA Automation / Cypress",
      "Agent Workflows",
      "Technical Leadership",
      "AI-Oriented Engineering",
      "Prompt Engineering",
      "MCP / Agent Tooling",
    ],
    en: [
      "Software Architecture",
      "Backend Engineering",
      "Fintech & Payments",
      "Software Automation",
      "QA Automation / Cypress",
      "Agent Workflows",
      "Technical Leadership",
      "AI-Oriented Engineering",
      "Prompt Engineering",
      "MCP / Agent Tooling",
    ],
  },
  services: {
    es: [
      {
        title: "Arquitectura de Software",
        text: "Diseño de arquitectura, definición de componentes, límites del sistema, tradeoffs técnicos y hojas de ruta para plataformas nuevas o en evolución.",
      },
      {
        title: "Modernización de Plataformas",
        text: "Estrategias para migración de legados, modularización progresiva, evolución de backend enterprise y reducción de deuda técnica.",
      },
      {
        title: "Backend & APIs",
        text: "Diseño e implementación de servicios backend, APIs, integraciones empresariales, microservicios y componentes orientados a confiabilidad.",
      },
      {
        title: "Fintech & Payments",
        text: "Acompañamiento técnico para onboarding digital, validación de identidad, pagos, P2P, QR, links de pago y plataformas transaccionales.",
      },
      {
        title: "Automatización de Software",
        text: "Automatización de pruebas y procesos de software con enfoque en calidad, cobertura funcional, flujos E2E, Cypress y aceleración del delivery.",
      },
      {
        title: "IA Aplicada a Ingeniería",
        text: "Adopción de agentes de IA, prompt engineering, MCP, Cursor, Windsurf y workflows asistidos para acelerar diseño y ejecución técnica.",
      },
    ],
    en: [
      {
        title: "Software Architecture",
        text: "Architecture design, component definition, system boundaries, technical tradeoffs and roadmaps for new or evolving platforms.",
      },
      {
        title: "Platform Modernization",
        text: "Strategies for legacy migration, progressive modularization, enterprise backend evolution and technical debt reduction.",
      },
      {
        title: "Backend & APIs",
        text: "Design and implementation of backend services, APIs, enterprise integrations, microservices and reliability-oriented components.",
      },
      {
        title: "Fintech & Payments",
        text: "Technical support for digital onboarding, identity validation, payments, P2P, QR, payment links and transactional platforms.",
      },
      {
        title: "Software Automation",
        text: "Test and software process automation focused on quality, functional coverage, E2E flows, Cypress and faster delivery.",
      },
      {
        title: "AI Applied to Engineering",
        text: "Adoption of AI agents, prompt engineering, MCP, Cursor, Windsurf and assisted workflows to accelerate design and execution.",
      },
    ],
  },
};

const UI_TEXT = {
  es: {
    brandTag: "Agent Orchestration / Software / AI",
    navDownloads: "PDF",
    navAbout: "Perfil",
    navExperience: "Experiencia",
    navExpertise: "Especialidad",
    navServices: "Servicios",
    navContact: "Contacto",
    menu: "Menú",
    eyebrow: "Control plane · orquestación de agentes · backend enterprise",
    heroTitle: "No diseño software. Diseño sistemas que piensan, reaccionan y escalan.",
    heroSummary: "Arquitecto de software y líder técnico con más de 10 años de experiencia en fintech, pagos, onboarding digital, modernización de plataformas y delivery backend. Mi enfoque mezcla arquitectura, automatización de software, prompts para IA, ecosistema Java y mentalidad de sistemas para construir plataformas listas para escalar.",
    heroPrimary: "Descargar CV",
    heroSecondary: "Hablemos",
    signal1Title: "Architecture-first delivery",
    signal1Text: "Conecto intención de negocio, decisiones técnicas y ejecución hands-on como un workflow operable.",
    signal2Title: "Fintech + QA + Reliability",
    signal2Text: "Experiencia en onboarding, pagos, calidad funcional, pruebas E2E y automatización de software.",
    signal3Title: "AI-enabled engineering",
    signal3Text: "Prompts, agentes, MCP, Cursor, Windsurf y automatización aplicada a ingeniería de software.",
    boardNode1: "Ingreso de eventos de negocio",
    boardNode1Meta: "webhook / queue / schedule",
    boardNode2: "Razonamiento arquitectónico",
    boardNode2Meta: "constraints / risks / design",
    boardNode3: "Entrega confiable",
    boardNode3Meta: "services / infra / observability",
    photoPlaceholder: "Tu foto / portrait",
    metricYears: "años diseñando y evolucionando software",
    metricArch: "años formales en arquitectura",
    metricLeadership: "personas lideradas",
    metricDomainValue: "Fintech",
    metricDomain: "pagos, QR, P2P, links y onboarding",
    downloadsKicker: "PDF export",
    downloadsTitle: "Descargas profesionales en A4, cortas o extendidas.",
    downloadsText: "Exporta una versión ejecutiva de una página o una versión extendida de dos páginas. Ambas se pueden descargar en español o inglés.",
    downloadShortBadge: "1 página",
    downloadShortTitle: "CV ejecutivo",
    downloadShortText: "Resumen preciso para postulación rápida, recruiters y sharing inmediato.",
    downloadLongBadge: "2 páginas",
    downloadLongTitle: "CV extendido",
    downloadLongText: "Versión más completa con trayectoria, fortalezas y dominios clave.",
    routeDownloadsLabel: "export route",
    routeDownloadsTitle: "resume-pipeline / a4-ready",
    routeDownloadsMeta: "short -> extended -> es/en -> share",
    aboutKicker: "Profile",
    aboutTitle: "Perfil profesional",
    routeAboutLabel: "profile state",
    routeAboutTitle: "architect / backend / ai systems",
    routeAboutMeta: "context -> criterio -> ejecución",
    focusKicker: "Focus",
    focusTitle: "Áreas de especialidad",
    workflow1Title: "Discover",
    workflow1Text: "Entiendo dominio, restricciones, riesgo operativo y objetivos del negocio.",
    workflow2Title: "Design",
    workflow2Text: "Defino límites, componentes, tradeoffs y estrategia técnica.",
    workflow3Title: "Deliver",
    workflow3Text: "Aterrizo arquitectura en implementación, calidad y evolución continua.",
    experienceKicker: "Trajectory",
    experienceTitle: "Experiencia principal",
    experienceText: "Trayectoria centrada en arquitectura, liderazgo técnico, plataformas fintech y modernización.",
    routeExperienceLabel: "career graph",
    routeExperienceTitle: "fintech-core / delivery-path",
    routeExperienceMeta: "legacy -> platform -> architecture",
    stackKicker: "Stack",
    stackTitle: "Stack técnico y capacidades",
    routeExpertiseLabel: "stack map",
    routeExpertiseTitle: "runtime / qa / ai orchestration",
    routeExpertiseMeta: "languages -> testing -> agent workflows",
    servicesKicker: "Services",
    servicesTitle: "Servicios prestados",
    servicesText: "Servicios orientados a arquitectura, modernización, automatización de software y adopción práctica de IA en ingeniería.",
    routeServicesLabel: "service graph",
    routeServicesTitle: "architecture / delivery / ai enablement",
    routeServicesMeta: "diagnose -> design -> execute",
    contactKicker: "Contact",
    contactTitle: "Contacto",
    routeContactLabel: "contact channel",
    routeContactTitle: "open-link / architect-loop",
    routeContactMeta: "email -> linkedin -> github",
    contactLocationLabel: "Ubicación",
    contactLocationValue: "Tlaxcala, México",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Correo",
    contactNote: "Español nativo. Inglés profesional en fortalecimiento. Interés constante en arquitectura de software, automatización de pruebas, prompts para IA, ciencia y hardware de alto desempeño.",
    footer: "Diseñado para GitHub Pages con enfoque editorial, técnico y bilingüe.",
    pdfStatusShort: "Generando CV ejecutivo",
    pdfStatusLong: "Generando CV extendido",
    pdfStatusEs: "en español",
    pdfStatusEn: "in English",
    pdfSectionExperience: "Experiencia principal",
    pdfSectionFocus: "Fortalezas",
    pdfSectionStack: "Stack técnico",
    pdfSectionEducation: "Formación",
    pdfSectionDomains: "Dominios y proyectos",
    pdfSectionContact: "Contacto",
    pdfFooter: "Disponible en web en español e inglés. PDF optimizado para A4.",
    pdfEducation: "Ingeniería en Tecnologías de la Información y Comunicaciones · Instituto Tecnológico de Apizaco",
    pdfDomains: "Fintech, onboarding digital, validación de identidad, pagos, P2P, QR, payment links, banca, modernización Java, automatización de software, Cypress, prompt engineering, MCP y agentes de IA.",
  },
  en: {
    brandTag: "Agent Orchestration / Software / AI",
    navDownloads: "PDF",
    navAbout: "Profile",
    navExperience: "Experience",
    navExpertise: "Expertise",
    navServices: "Services",
    navContact: "Contact",
    menu: "Menu",
    eyebrow: "Control plane · agent orchestration · enterprise backend",
    heroTitle: "I do not design software. I design systems that think, react and scale.",
    heroSummary: "Software architect and technical lead with 10+ years of experience across fintech, payments, digital onboarding, platform modernization and backend delivery. My approach blends architecture, software automation, AI prompts, the Java ecosystem and systems thinking to build platforms ready to scale.",
    heroPrimary: "Download resume",
    heroSecondary: "Let's talk",
    signal1Title: "Architecture-first delivery",
    signal1Text: "I connect business intent, technical decisions and hands-on execution as an operable workflow.",
    signal2Title: "Fintech + QA + Reliability",
    signal2Text: "Experience across onboarding, payments, functional quality, E2E testing and software automation.",
    signal3Title: "AI-enabled engineering",
    signal3Text: "Prompts, agents, MCP, Cursor, Windsurf and practical automation for software engineering.",
    boardNode1: "Business event intake",
    boardNode1Meta: "webhook / queue / schedule",
    boardNode2: "Architecture reasoning",
    boardNode2Meta: "constraints / risks / design",
    boardNode3: "Reliable delivery",
    boardNode3Meta: "services / infra / observability",
    photoPlaceholder: "Your photo / portrait",
    metricYears: "years designing and evolving software",
    metricArch: "formal years in architecture",
    metricLeadership: "people led",
    metricDomainValue: "Fintech",
    metricDomain: "payments, QR, P2P, links and onboarding",
    downloadsKicker: "PDF export",
    downloadsTitle: "Professional A4 downloads, short or extended.",
    downloadsText: "Export a one-page executive version or a two-page extended version. Both are available in Spanish and English.",
    downloadShortBadge: "1 page",
    downloadShortTitle: "Executive resume",
    downloadShortText: "Compact version for fast applications, recruiters and direct sharing.",
    downloadLongBadge: "2 pages",
    downloadLongTitle: "Extended resume",
    downloadLongText: "Broader version with trajectory, strengths and core domains.",
    routeDownloadsLabel: "export route",
    routeDownloadsTitle: "resume-pipeline / a4-ready",
    routeDownloadsMeta: "short -> extended -> es/en -> share",
    aboutKicker: "Profile",
    aboutTitle: "Professional profile",
    routeAboutLabel: "profile state",
    routeAboutTitle: "architect / backend / ai systems",
    routeAboutMeta: "context -> criteria -> execution",
    focusKicker: "Focus",
    focusTitle: "Areas of expertise",
    workflow1Title: "Discover",
    workflow1Text: "I understand domain, constraints, operational risk and business goals.",
    workflow2Title: "Design",
    workflow2Text: "I define boundaries, components, tradeoffs and technical strategy.",
    workflow3Title: "Deliver",
    workflow3Text: "I translate architecture into implementation, quality and continuous evolution.",
    experienceKicker: "Trajectory",
    experienceTitle: "Core experience",
    experienceText: "A trajectory focused on architecture, technical leadership, fintech platforms and modernization.",
    routeExperienceLabel: "career graph",
    routeExperienceTitle: "fintech-core / delivery-path",
    routeExperienceMeta: "legacy -> platform -> architecture",
    stackKicker: "Stack",
    stackTitle: "Technical stack and capabilities",
    routeExpertiseLabel: "stack map",
    routeExpertiseTitle: "runtime / qa / ai orchestration",
    routeExpertiseMeta: "languages -> testing -> agent workflows",
    servicesKicker: "Services",
    servicesTitle: "Professional services",
    servicesText: "Services focused on architecture, modernization, software automation and practical AI adoption for engineering teams.",
    routeServicesLabel: "service graph",
    routeServicesTitle: "architecture / delivery / ai enablement",
    routeServicesMeta: "diagnose -> design -> execute",
    contactKicker: "Contact",
    contactTitle: "Contact",
    routeContactLabel: "contact channel",
    routeContactTitle: "open-link / architect-loop",
    routeContactMeta: "email -> linkedin -> github",
    contactLocationLabel: "Location",
    contactLocationValue: "Tlaxcala, Mexico",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactNote: "Native Spanish speaker. Professional English in progress. Ongoing interest in software architecture, test automation, AI prompts, science and high-performance hardware.",
    footer: "Built for GitHub Pages with an editorial, technical and bilingual approach.",
    pdfStatusShort: "Generating executive resume",
    pdfStatusLong: "Generating extended resume",
    pdfStatusEs: "en español",
    pdfStatusEn: "in English",
    pdfSectionExperience: "Core experience",
    pdfSectionFocus: "Strengths",
    pdfSectionStack: "Technical stack",
    pdfSectionEducation: "Education",
    pdfSectionDomains: "Domains and projects",
    pdfSectionContact: "Contact",
    pdfFooter: "Available on the website in Spanish and English. PDF optimized for A4.",
    pdfEducation: "Information and Communications Technology Engineering · Instituto Tecnológico de Apizaco",
    pdfDomains: "Fintech, digital onboarding, identity validation, payments, P2P, QR, payment links, banking, Java modernization, software automation, Cypress, prompt engineering, MCP and AI agents.",
  },
};

let currentLang = "es";
let isExporting = false;

RESUME_DATA.expertise = {
  es: [
    {
      title: "Backend & Architecture",
      text: "Java, Go, Python, REST APIs, microservices, integración empresarial, diseño de componentes y sistemas distribuidos.",
    },
      {
        title: "Java Ecosystem",
        text: "Spring Boot, Spring MVC, Spring WebFlux, Spring Data JPA, Spring Security, Hibernate, JPA, Maven, Gradle, Spring Cloud, Feign, Resilience4j, Kafka Streams y testing enterprise.",
      },
      {
        title: "Testing & Quality Automation",
        text: "Cypress, automatización E2E, pruebas funcionales, validación de flujos críticos, calidad continua y soporte al release de software.",
      },
    {
      title: "Data, Messaging & Quality",
      text: "MongoDB, Oracle, Redis, Kafka, RabbitMQ, JUnit 4/5, SOLID, Clean Code y diseño mantenible.",
    },
    {
      title: "AI Applied Engineering",
      text: "Automatización de flujos, uso de IA en delivery, prompt engineering, MCP, Cursor, Windsurf, agentes, copilots y tooling asistido para acelerar diseño e implementación.",
    },
    {
      title: "Leadership & Delivery",
      text: "Mentoría, diseño técnico, priorización, colaboración con producto y aterrizaje de arquitectura a ejecución.",
    },
  ],
  en: [
    {
      title: "Backend & Architecture",
      text: "Java, Go, Python, REST APIs, microservices, enterprise integration, component design and distributed systems.",
    },
      {
        title: "Java Ecosystem",
        text: "Spring Boot, Spring MVC, Spring WebFlux, Spring Data JPA, Spring Security, Hibernate, JPA, Maven, Gradle, Spring Cloud, Feign, Resilience4j, Kafka Streams and enterprise testing.",
      },
      {
        title: "Testing & Quality Automation",
        text: "Cypress, E2E automation, functional testing, critical flow validation, continuous quality and support for software releases.",
      },
    {
      title: "Data, Messaging & Quality",
      text: "MongoDB, Oracle, Redis, Kafka, RabbitMQ, JUnit 4/5, SOLID, Clean Code and maintainable design.",
    },
    {
      title: "AI Applied Engineering",
      text: "Flow automation, AI-assisted delivery, prompt engineering, MCP, Cursor, Windsurf, agents, copilots and practical tooling to accelerate design and implementation.",
    },
    {
      title: "Leadership & Delivery",
      text: "Mentoring, technical design, prioritization, product collaboration and architecture-to-delivery execution.",
    },
  ],
};

RESUME_DATA.experience = {
  es: [
    {
      role: "Líder Técnico · Arquitecto de Software",
      company: "FEMSA / Spin by OXXO",
      date: "2023 - Actual",
      text: "Arquitectura y evolución de componentes fintech con foco en onboarding, pagos internos, P2P, QR, links de pago y servicios gateway. Participación en decisiones técnicas, diseño de componentes y alineación con producto y delivery.",
      tags: ["Java", "Go", "Python", "AWS", "Kubernetes", "Terraform"],
    },
    {
      role: "Backend Engineer asignado a Spin by OXXO",
      company: "IDS Comercial",
      date: "2022 - 2023",
      text: "Desarrollo de módulos de alta, activación y vinculación de usuarios para onboarding digital, incluyendo biometría, INE, CURP, listas negras y validaciones regulatorias.",
      tags: ["Spring Boot", "Security", "Identity", "Onboarding"],
    },
    {
      role: "Líder Técnico",
      company: "YoloPago",
      date: "2021 - 2022",
      text: "Liderazgo técnico de equipo enfocado en soluciones de pago e integración comercial, portal de clientes y aplicación Android para terminales punto de venta.",
      tags: ["Payments", "POS", "Integrations", "Android"],
    },
    {
      role: "Senior Developer · Tech Lead · Project Lead",
      company: "Grupo Salinas",
      date: "2017 - 2021",
      text: "Migración de sistemas legados Java, modularización progresiva y participación en plataformas bancarias, transferencias, POS y apoyos del bienestar.",
      tags: ["Banking", "Java", "Legacy Modernization", "POS"],
    },
    {
      role: "Freelance / Consultoría",
      company: "Proyectos diversos",
      date: "Etapas complementarias",
      text: "Participación en proyectos financieros, software a la medida para RH, búsqueda avanzada, extracción documental e iniciativas de infraestructura como código.",
      tags: ["Consulting", "NLP", "IaC", "Custom Software"],
    },
  ],
  en: [
    {
      role: "Technical Lead · Software Architect",
      company: "FEMSA / Spin by OXXO",
      date: "2023 - Present",
      text: "Architecture and evolution of fintech components focused on onboarding, internal payments, P2P, QR, payment links and gateway services. Active participation in technical decisions, component design and product alignment.",
      tags: ["Java", "Go", "Python", "AWS", "Kubernetes", "Terraform"],
    },
    {
      role: "Backend Engineer assigned to Spin by OXXO",
      company: "IDS Comercial",
      date: "2022 - 2023",
      text: "Built user registration, activation and linking modules for digital onboarding, including biometrics, government ID validation, CURP, blacklists and regulatory checks.",
      tags: ["Spring Boot", "Security", "Identity", "Onboarding"],
    },
    {
      role: "Technical Lead",
      company: "YoloPago",
      date: "2021 - 2022",
      text: "Led a team delivering payment solutions, commercial integrations, a customer portal and an Android application for POS terminals.",
      tags: ["Payments", "POS", "Integrations", "Android"],
    },
    {
      role: "Senior Developer · Tech Lead · Project Lead",
      company: "Grupo Salinas",
      date: "2017 - 2021",
      text: "Migrated legacy Java systems, drove progressive modularization and contributed to banking, transfers, POS and public support platforms.",
      tags: ["Banking", "Java", "Legacy Modernization", "POS"],
    },
    {
      role: "Freelance / Consulting",
      company: "Multiple projects",
      date: "Complementary stages",
      text: "Delivered financial projects, custom HR software, advanced search, document extraction initiatives and infrastructure-as-code efforts.",
      tags: ["Consulting", "NLP", "IaC", "Custom Software"],
    },
  ],
};

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function renderProfile(lang) {
  const target = qs("#profileList");
  target.innerHTML = RESUME_DATA.profile[lang]
    .map((item) => `<li><p>${item}</p></li>`)
    .join("");
}

function renderFocus(lang) {
  const target = qs("#focusChips");
  target.innerHTML = RESUME_DATA.focus[lang]
    .map((item) => `<span class="pill">${item}</span>`)
    .join("");
}

function renderExperience(lang) {
  const target = qs("#experienceTimeline");
  target.innerHTML = RESUME_DATA.experience[lang]
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-head">
            <div>
              <div class="timeline-role">${item.role}</div>
              <div class="timeline-company">${item.company}</div>
            </div>
            <div class="timeline-date">${item.date}</div>
          </div>
          <div class="timeline-copy">
            <p>${item.text}</p>
          </div>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderExpertise(lang) {
  const target = qs("#expertiseGrid");
  target.innerHTML = RESUME_DATA.expertise[lang]
    .map(
      (item) => `
        <article class="expertise-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderServices(lang) {
  const target = qs("#servicesGrid");
  target.innerHTML = RESUME_DATA.services[lang]
    .map(
      (item) => `
        <article class="service-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function updateStaticText(lang) {
  document.documentElement.lang = lang;
  document.title =
    lang === "es"
      ? "German Hernandez Lopez | Arquitectura, Software e IA"
      : "German Hernandez Lopez | Architecture, Software & AI";

  qsa("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (UI_TEXT[lang][key]) {
      node.textContent = UI_TEXT[lang][key];
    }
  });

  qsa("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
  });
}

function renderApp(lang) {
  currentLang = lang;
  updateStaticText(lang);
  renderProfile(lang);
  renderFocus(lang);
  renderExperience(lang);
  renderExpertise(lang);
  renderServices(lang);
}

function setButtonsDisabled(disabled, label = "") {
  qsa(".pdf-action").forEach((button) => {
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = button.textContent;
    }
    button.disabled = disabled;
    button.textContent = disabled ? label : button.dataset.originalLabel;
  });
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildResumeDocument(lang, variant) {
  const t = UI_TEXT[lang];
  const data = RESUME_DATA;
  const isLong = variant === "long";
  const summary = escapeHtml(data.summary[lang]);
  const experience = data.experience[lang];
  const focus = data.focus[lang];
  const expertise = data.expertise[lang];
  const jobs = isLong ? experience.slice(0, 5) : experience.slice(0, 4);
  const focusMarkup = focus
    .map((item) => `<span class="pdf-pill">${escapeHtml(item)}</span>`)
    .join("");
  const jobsMarkup = jobs
    .map(
      (item) => `
        <article class="pdf-job">
          <div class="pdf-job-head">
            <div>
              <div class="pdf-job-role">${escapeHtml(item.role)}</div>
              <div class="pdf-job-company">${escapeHtml(item.company)}</div>
            </div>
            <div class="pdf-job-date">${escapeHtml(item.date)}</div>
          </div>
          <p>${escapeHtml(item.text)}</p>
          <div class="pdf-tag-row">${item.tags
            .map((tag) => `<span class="pdf-tag">${escapeHtml(tag)}</span>`)
            .join("")}</div>
        </article>
      `
    )
    .join("");
  const expertiseMarkup = expertise
    .slice(0, isLong ? expertise.length : 4)
    .map(
      (item) => `
        <div class="pdf-mini-card">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `
    )
    .join("");
  const contactLine = `${data.contact.location[lang]} · ${data.contact.phone} · ${data.contact.email} · ${data.contact.linkedin} · ${data.contact.github}`;
  const statusLine =
    lang === "es"
      ? "workflow state: architecture -> backend -> ai delivery"
      : "workflow state: architecture -> backend -> ai delivery";
  const metrics = lang === "es"
    ? [
        ["10+", "años en software"],
        ["3+", "arquitectura formal"],
        ["12", "personas lideradas"],
      ]
    : [
        ["10+", "years in software"],
        ["3+", "formal architecture"],
        ["12", "people led"],
      ];
  const stackLine = "java / go / python / cypress / prompts / mcp";
  const architectureLine =
    lang === "es"
      ? "system design / fintech / testing / ai instructions / agent workflows"
      : "system design / fintech / testing / ai instructions / agent workflows";

  return `
    <div class="pdf-root pdf-${variant}">
      <style>
        .pdf-root, .pdf-root * { box-sizing: border-box; }
        .pdf-root { width: 210mm; margin: 0 auto; background: #dfe9f4; color: #0d1726; font-family: "Segoe UI", Arial, sans-serif; padding: 0; }
        .pdf-page { width: 210mm; min-height: 297mm; padding: 10mm; background: linear-gradient(180deg, #eaf2f9 0%, #dde8f3 100%); display: flex; flex-direction: column; justify-content: space-between; page-break-after: always; }
        .pdf-page:last-child { page-break-after: auto; }
        .pdf-sheet { width: 100%; min-height: 277mm; margin: 0 auto; padding: 0; border-radius: 6mm; border: 1px solid #b9cada; background: linear-gradient(180deg, rgba(255,255,255,0.99), rgba(246,249,252,0.99)); box-shadow: 0 0 0 0.4mm rgba(255,255,255,0.85) inset; overflow: hidden; }
        .pdf-topbar { padding: 4mm 8mm; background: linear-gradient(90deg, #0c1828, #10243d 55%, #13314a); color: #dff8f2; font-family: "Courier New", monospace; font-size: 2.7mm; letter-spacing: 0.08em; text-transform: uppercase; }
        .pdf-frame { padding: 9mm; position: relative; }
        .pdf-frame::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(12, 24, 40, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(12, 24, 40, 0.03) 1px, transparent 1px); background-size: 18px 18px; opacity: 0.3; pointer-events: none; }
        .pdf-header { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 8mm; align-items: start; padding-bottom: 7mm; border-bottom: 0.5mm solid #d8e4f0; }
        .pdf-kicker { display: inline-block; padding: 2.2mm 4mm; border-radius: 99mm; border: 0.4mm solid #b9d6f7; color: #0d6b8f; background: #edf9f6; font-size: 3mm; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .pdf-name { margin: 4mm 0 1.5mm; font-size: 10.2mm; line-height: 0.94; letter-spacing: -0.04em; font-weight: 800; color: #08111e; text-transform: uppercase; }
        .pdf-title { font-size: 4.1mm; font-weight: 700; color: #145d99; }
        .pdf-status { margin-top: 2.4mm; font-family: "Courier New", monospace; color: #58718e; font-size: 2.8mm; }
        .pdf-summary { margin-top: 4mm; color: #3b4b62; font-size: 3.42mm; line-height: 1.7; }
        .pdf-signal-stack { display: grid; gap: 2.5mm; margin-top: 4mm; }
        .pdf-signal { padding: 3mm 3.4mm; border-radius: 3mm; border: 0.35mm solid #d7e2ec; background: #f7fbfe; }
        .pdf-signal-label { display: block; color: #0d6b8f; font-size: 2.35mm; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-family: "Courier New", monospace; }
        .pdf-signal-value { display: block; margin-top: 1mm; color: #1f3550; font-size: 2.75mm; line-height: 1.45; }
        .pdf-contact-card { padding: 5mm; border-radius: 4mm; background: linear-gradient(180deg, #f2f8fd, #ebf2f9); border: 0.4mm solid #d6e2ef; }
        .pdf-contact-card h3, .pdf-section h3 { margin: 0 0 3mm; font-size: 3.2mm; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #0c2137; }
        .pdf-contact-card p, .pdf-section p, .pdf-mini-card p, .pdf-job p { margin: 0; color: #3b4b62; font-size: 3.24mm; line-height: 1.66; }
        .pdf-metric-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; margin-top: 4mm; }
        .pdf-metric { padding: 3.2mm; border-radius: 3mm; background: #f4f8fb; border: 0.35mm solid #d7e2ec; }
        .pdf-metric strong { display: block; font-size: 4.8mm; color: #0b1830; }
        .pdf-metric span { display: block; margin-top: 0.8mm; color: #617790; font-size: 2.6mm; }
        .pdf-main { margin-top: 7mm; display: grid; grid-template-columns: 0.78fr 1.22fr; gap: 7mm; }
        .pdf-column { display: grid; gap: 6mm; align-content: start; }
        .pdf-section { padding: 5mm; border-radius: 4mm; border: 0.4mm solid #d7e4ef; background: #ffffff; position: relative; }
        .pdf-section::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 1.2mm; background: linear-gradient(180deg, #7ebcff, #72f1d0); border-radius: 4mm 0 0 4mm; }
        .pdf-pill-row, .pdf-tag-row { display: flex; flex-wrap: wrap; gap: 2mm; margin-top: 3mm; }
        .pdf-pill, .pdf-tag { display: inline-flex; padding: 1.8mm 2.8mm; border-radius: 99mm; background: #eef5fc; border: 0.35mm solid #d4e1ef; color: #28415d; font-size: 2.72mm; font-weight: 600; }
        .pdf-mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
        .pdf-mini-card { padding: 4.2mm; border-radius: 3.4mm; border: 0.35mm solid #d9e4ef; background: #f8fbfe; }
        .pdf-mini-card h4 { margin: 0 0 2mm; font-size: 3.1mm; color: #0b1c30; }
        .pdf-job { padding-left: 4mm; border-left: 1mm solid #98c6f3; }
        .pdf-job + .pdf-job { margin-top: 4mm; }
        .pdf-job-head { display: flex; justify-content: space-between; gap: 4mm; margin-bottom: 1.8mm; }
        .pdf-job-role { font-size: 3.42mm; font-weight: 800; color: #0b1b30; }
        .pdf-job-company { margin-top: 1mm; color: #0d6b8f; font-size: 3mm; font-weight: 700; }
        .pdf-job-date { font-size: 2.8mm; color: #60738d; white-space: nowrap; }
        .pdf-footer { margin-top: 6mm; padding-top: 4mm; border-top: 0.4mm solid #d8e4f0; color: #62738d; font-size: 2.8mm; font-family: "Courier New", monospace; }
      </style>
      <section class="pdf-page">
        <div class="pdf-sheet">
          <div class="pdf-topbar">agent orchestration dossier / ${variant === "short" ? "exec-mode" : "extended-mode"}</div>
          <div class="pdf-frame">
          <header class="pdf-header">
            <div>
              <span class="pdf-kicker">${lang === "es" ? "Arquitectura · Software · IA" : "Architecture · Software · AI"}</span>
              <div class="pdf-name">${escapeHtml(data.name)}</div>
              <div class="pdf-title">${escapeHtml(data.title[lang])}</div>
              <div class="pdf-status">${escapeHtml(statusLine)}</div>
              <p class="pdf-summary">${summary}</p>
              <div class="pdf-metric-row">
                ${metrics.map(([value, label]) => `<div class="pdf-metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}
              </div>
            </div>
            <aside class="pdf-contact-card">
              <h3>${t.pdfSectionContact}</h3>
              <p>${escapeHtml(contactLine)}</p>
              <div class="pdf-signal-stack">
                <div class="pdf-signal">
                  <span class="pdf-signal-label">stack.core</span>
                  <span class="pdf-signal-value">${escapeHtml(stackLine)}</span>
                </div>
                <div class="pdf-signal">
                  <span class="pdf-signal-label">arch.focus</span>
                  <span class="pdf-signal-value">${escapeHtml(architectureLine)}</span>
                </div>
              </div>
            </aside>
          </header>
          <div class="pdf-main">
            <div class="pdf-column">
              <section class="pdf-section">
                <h3>${t.pdfSectionFocus}</h3>
                <div class="pdf-pill-row">${focusMarkup}</div>
              </section>
              <section class="pdf-section">
                <h3>${t.pdfSectionStack}</h3>
                <div class="pdf-mini-grid">${expertiseMarkup}</div>
              </section>
              <section class="pdf-section">
                <h3>${t.pdfSectionEducation}</h3>
                <p>${escapeHtml(t.pdfEducation)}</p>
              </section>
            </div>
            <div class="pdf-column">
              <section class="pdf-section">
                <h3>${t.pdfSectionExperience}</h3>
                ${jobsMarkup}
              </section>
            </div>
          </div>
          <div class="pdf-footer">${t.pdfFooter}</div>
          </div>
        </div>
      </section>
      ${
        isLong
          ? `
      <section class="pdf-page">
        <div class="pdf-sheet">
          <div class="pdf-topbar">agent orchestration dossier / extended-context</div>
          <div class="pdf-frame">
          <div class="pdf-main" style="margin-top:0; grid-template-columns: 1fr; gap: 6mm;">
            <section class="pdf-section">
              <h3>${t.pdfSectionDomains}</h3>
              <p>${escapeHtml(t.pdfDomains)}</p>
            </section>
            <section class="pdf-section">
              <h3>${t.pdfSectionExperience}</h3>
              ${experience
                .map(
                  (item) => `
                    <article class="pdf-job">
                      <div class="pdf-job-head">
                        <div>
                          <div class="pdf-job-role">${escapeHtml(item.role)}</div>
                          <div class="pdf-job-company">${escapeHtml(item.company)}</div>
                        </div>
                        <div class="pdf-job-date">${escapeHtml(item.date)}</div>
                      </div>
                      <p>${escapeHtml(item.text)}</p>
                      <div class="pdf-tag-row">${item.tags.map((tag) => `<span class="pdf-tag">${escapeHtml(tag)}</span>`).join("")}</div>
                    </article>
                  `
                )
                .join("")}
            </section>
          </div>
          <div class="pdf-footer">${t.pdfFooter}</div>
          </div>
        </div>
      </section>
      `
          : ""
      }
    </div>
  `;
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

async function exportPdf(lang, variant) {
  if (isExporting) {
    return;
  }

  isExporting = true;
  const statusLabel = `${UI_TEXT[lang][variant === "short" ? "pdfStatusShort" : "pdfStatusLong"]} ${UI_TEXT[lang][lang === "es" ? "pdfStatusEs" : "pdfStatusEn"]}`;
  setButtonsDisabled(true, statusLabel);

  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.top = "0";
  host.style.left = "50%";
  host.style.transform = "translateX(-50%)";
  host.style.width = "210mm";
  host.style.zIndex = "9999";
  host.style.opacity = "0.01";
  host.style.pointerEvents = "none";
  host.innerHTML = buildResumeDocument(lang, variant);
  document.body.appendChild(host);

  try {
    await nextFrame();
    await nextFrame();
    const filename = `German_Hernandez_Lopez_CV_${variant === "short" ? "Executive" : "Extended"}_${lang.toUpperCase()}.pdf`;
    await html2pdf()
      .set({
        margin: [0, 0, 0, 0],
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#eef4fb",
          scrollX: 0,
          scrollY: 0,
        },
        pagebreak: {
          mode: ["css", "legacy"],
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(host.firstElementChild)
      .save();
  } finally {
    host.remove();
    isExporting = false;
    setButtonsDisabled(false);
  }
}

function bindEvents() {
  qsa("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => renderApp(button.dataset.langSwitch));
  });

  qsa(".pdf-action").forEach((button) => {
    button.addEventListener("click", () => {
      exportPdf(button.dataset.pdfLang, button.dataset.pdfVariant);
    });
  });

  const mobileMenuBtn = qs("#mobileMenuBtn");
  const mobilePanel = qs("#mobilePanel");

  mobileMenuBtn?.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("is-open");
    mobilePanel.hidden = !isOpen;
  });

  qsa(".mobile-panel a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("is-open");
      mobilePanel.hidden = true;
    });
  });
}

function initMotion() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }

  if (typeof gsap !== "undefined") {
    gsap.from(".brand", {
      y: -18,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".hero-copy > *", {
      y: 22,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.1,
    });

    gsap.to(".orb-a", {
      x: 24,
      y: 18,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".orb-b", {
      x: -20,
      y: 24,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".graph-pulse", {
      scale: 1.18,
      opacity: 0.72,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut",
    });

    gsap.to(".graph-edge", {
      strokeDashoffset: -48,
      duration: 3.6,
      ease: "none",
      repeat: -1,
      stagger: 0.08,
    });

    gsap.from(".telemetry-card", {
      y: 18,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      delay: 0.35,
      ease: "power2.out",
    });

    gsap.from(".section-route-card", {
      y: 12,
      opacity: 0,
      duration: 0.7,
      stagger: 0.06,
      delay: 0.22,
      ease: "power2.out",
    });

    gsap.to(".code-rain", {
      y: 18,
      x: 12,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".architecture-ghost", {
      opacity: 0.38,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp(currentLang);
  bindEvents();
  initMotion();
});
