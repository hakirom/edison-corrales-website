export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    advantages: string;
    methodology: string;
    caseStudies: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{ label: string; value: string }>;
  };
  about: {
    title: string;
    subtitle: string;
    bio: string;
    achievements: string[];
    highlights: Array<{ icon: string; title: string; description: string }>;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
      idealFor: string;
    }>;
  };
  whyUs: {
    title: string;
    subtitle: string;
    comparison: Array<{
      aspect: string;
      traditional: string;
      edison: string;
    }>;
    stats: Array<{ label: string; value: string }>;
  };
  methodology: {
    title: string;
    subtitle: string;
    phases: Array<{
      title: string;
      description: string;
    }>;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    items: Array<{
      company: string;
      challenge: string;
      solution: string;
      result: string;
      metrics: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    formFields: {
      name: string;
      email: string;
      company: string;
      role: string;
      challenge: string;
      button: string;
    };
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    nav: Array<{ label: string; href: string }>;
    copyright: string;
    credentials: string;
  };
}

const es: Translations = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    advantages: "Ventajas",
    methodology: "Metodología",
    caseStudies: "Casos de Éxito",
    contact: "Contacto",
  },
  hero: {
    badge: "Client Manager | Banking Sector",
    title: "Transformación Digital y Liderazgo Estratégico para el Sector Financiero",
    subtitle:
      "Especialista en venta consultiva y transformación digital con 20+ años de experiencia. Lidero relaciones estratégicas con cuentas de alto impacto en finanzas, retail y seguros.",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Ver LinkedIn",
    stats: [
      { label: "Años de Experiencia", value: "20+" },
      { label: "Proyectos Exitosos", value: "80+" },
      { label: "Sectores Dominados", value: "3" },
    ],
  },
  about: {
    title: "Sobre Edison Corrales",
    subtitle:
      "20+ años impulsando transformación digital y liderazgo en banca, retail y seguros",
    bio: "Edison Corrales Arboleda es un ejecutivo de relaciones con clientes apasionado, con más de 20 años de experiencia en el sector tecnológico. Especializado en venta consultiva y desarrollo de negocios estratégicos, lidera asociaciones clave en los sectores financiero, retail y de seguros, ayudando a las empresas a superar desafíos e impulsar su transformación digital mediante soluciones innovadoras. Como Client Manager en NTT DATA, orquesta relaciones estratégicas con cuentas del sector bancario, apalancando soluciones tecnológicas de alto impacto que generan valor real al negocio.",
    achievements: [
      "80+ proyectos exitosos de transformación digital y implementación",
      "Experto en ventas consultivas y desarrollo de relaciones estratégicas",
      "Liderazgo comprobado en equipos multidisciplinarios y cross-funcionales",
      "Especialista en soluciones tecnológicas para banca, retail y seguros",
    ],
    highlights: [
      {
        icon: "Target",
        title: "Venta Consultiva Enfocada",
        description:
          "Diseño de estrategias de ventas que mejoran el desempeño del negocio y la eficiencia operacional",
      },
      {
        icon: "Zap",
        title: "Transformación Digital Acelerada",
        description:
          "Experiencia probada en modernización de sistemas legacy e implementación de soluciones innovadoras",
      },
      {
        icon: "Users",
        title: "Liderazgo de Equipos",
        description:
          "Fomento de la innovación, colaboración y mentalidad de mejora continua en equipos multidisciplinarios",
      },
    ],
  },
  services: {
    title: "Servicios de Consultoría",
    subtitle:
      "Tres pilares de expertise para impulsar tu transformación digital",
    items: [
      {
        title: "Venta Consultiva y Business Development",
        description:
          "Diseño e implementación de estrategias comerciales que mejoren el desempeño y la eficiencia operacional.",
        features: [
          "Análisis de oportunidades comerciales",
          "Desarrollo de proposiciones de valor",
          "Gestión de relaciones clave (Key Account Management)",
          "Estrategia de expansión de mercado",
        ],
        idealFor: "Directores comerciales, VP Ventas, líderes de negocio",
      },
      {
        title: "Transformación Digital y Modernización",
        description:
          "Guía estratégica en procesos de transformación digital, modernización de sistemas y adopción de nuevas tecnologías.",
        features: [
          "Diagnóstico de madurez digital",
          "Roadmap de transformación tecnológica",
          "Evaluación e implementación de soluciones",
          "Change management y capacitación de equipos",
        ],
        idealFor: "CIOs, CTOs, líderes de IT y operaciones",
      },
      {
        title: "Liderazgo Estratégico en Equipos",
        description:
          "Mentoría en liderazgo, gobernanza y gestión de equipos multidisciplinarios para alcanzar objetivos estratégicos.",
        features: [
          "Coaching ejecutivo y liderazgo",
          "Gobernanza y gestión de proyectos complejos",
          "Construcción de cultura de innovación",
          "Gestión de riesgo y compliance",
        ],
        idealFor: "Ejecutivos, gerentes generales, líderes de transformación",
      },
    ],
  },
  whyUs: {
    title: "¿Por Qué Edison?",
    subtitle: "Experiencia verificada. Resultados tangibles.",
    comparison: [
      {
        aspect: "Experiencia Práctica",
        traditional: "Consultores teóricos sin experiencia operativa",
        edison: "20+ años como operador y ejecutivo en empresas reales",
      },
      {
        aspect: "Enfoque",
        traditional: "Venta de proyectos extensos y costosos",
        edison: "Asesoría estratégica con ROI verificable y resultados medibles",
      },
      {
        aspect: "Sectores",
        traditional: "Generalistas sin profundidad sectorial",
        edison: "Expertise comprobada en banca, retail y seguros",
      },
      {
        aspect: "Relaciones",
        traditional: "Consultor externo desconectado",
        edison: "Socio estratégico que construye relaciones de confianza duraderas",
      },
    ],
    stats: [
      { label: "Años en Tecnología", value: "20+" },
      { label: "Proyectos Implementados", value: "80+" },
      { label: "Clientes Satisfechos", value: "40+" },
    ],
  },
  methodology: {
    title: "Mi Metodología de Trabajo",
    subtitle:
      "Un enfoque de 4 fases para garantizar transformación exitosa",
    phases: [
      {
        title: "Diagnóstico Estratégico",
        description:
          "Análisis profundo de tu situación actual, desafíos clave y oportunidades. Validación de necesidades reales y definición de objetivos claros.",
      },
      {
        title: "Diseño de Solución",
        description:
          "Codiseño de estrategias personalizadas, roadmaps y planes de acción. Alineación con objetivos de negocio y recursos disponibles.",
      },
      {
        title: "Implementación y Ejecución",
        description:
          "Acompañamiento en la ejecución con equipos internos. Gestión de cambio, capacitación y monitoreo de avance.",
      },
      {
        title: "Optimización Continua",
        description:
          "Medición de resultados, ajustes necesarios y escalado de iniciativas exitosas. Transferencia de conocimiento y autonomía.",
      },
    ],
  },
  caseStudies: {
    title: "Casos de Éxito",
    subtitle: "Transformación digital en sectores clave: finanzas, retail y seguros",
    items: [
      {
        company: "Institución Financiera Multinacional",
        challenge:
          "Modernización de plataforma de créditos obsoleta. Procesos manuales causando retrasos de 30+ días en aprobaciones.",
        solution:
          "Liderazgo de proyecto de transformación digital. Implementación de plataforma moderna, automatización de flujos y capacitación de equipos.",
        result:
          "Reducción de tiempo de aprobación a 48 horas. Incremento de volumen en 150% sin aumentar costos operativos.",
        metrics: [
          "Aprobaciones en 48 horas (antes 30+ días)",
          "150% aumento en volumen de créditos",
          "$5M en ingresos adicionales anuales",
        ],
      },
      {
        company: "Grupo Retail Latinoamericano",
        challenge:
          "Fragmentación de sistemas entre canales. Falta de integración entre online y offline limitando competitividad.",
        solution:
          "Asesoría estratégica en transformación digital omnichannel. Diseño de arquitectura integrada y governance de implementación.",
        result:
          "Integración completa de canales. Experiencia de cliente mejorada y operaciones optimizadas.",
        metrics: [
          "100% de canales integrados",
          "20% mejora en customer experience",
          "35% reducción en costos operativos",
        ],
      },
      {
        company: "Aseguradora Regional",
        challenge:
          "Procesos de underwriting lentos impactando competitividad. Falta de talento en tecnología limitando innovación.",
        solution:
          "Liderazgo de transformación digital con enfoque en automatización. Construcción de equipo técnico de alto desempeño.",
        result:
          "Underwriting automatizado. Nuevos productos digitales lanzados en mercado.",
        metrics: [
          "Tiempo de underwriting -70%",
          "3 nuevos productos digitales",
          "150% aumento en pólizas",
        ],
      },
    ],
  },
  contact: {
    title: "Agendar una Consulta Estratégica",
    subtitle:
      "30 minutos para explorar cómo puedo impulsar tu transformación digital",
    ctaTitle: "¿Listo para avanzar?",
    formFields: {
      name: "Nombre completo",
      email: "Email corporativo",
      company: "Empresa",
      role: "Cargo / Rol",
      challenge: "¿Cuál es tu mayor desafío actualmente?",
      button: "Enviar Solicitud",
    },
    successMessage: "¡Gracias! Te contactaré en las próximas 24 horas.",
    errorMessage:
      "Error al enviar. Por favor, intenta de nuevo.",
  },
  footer: {
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Acerca de", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Casos de Éxito", href: "#caseStudies" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright:
      "© 2026 Edison Corrales. Todos los derechos reservados.",
    credentials:
      "20+ años de experiencia en liderazgo estratégico, venta consultiva y transformación digital | SR Client Manager, Banking Sector | NTT DATA",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    advantages: "Why Edison",
    methodology: "Methodology",
    caseStudies: "Case Studies",
    contact: "Contact",
  },
  hero: {
    badge: "Client Manager | Banking Sector",
    title: "Digital Transformation and Strategic Leadership for Financial Services",
    subtitle:
      "Specialist in consultative selling and digital transformation with 20+ years of experience. Leading strategic partnerships with high-impact accounts in finance, retail, and insurance.",
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "View LinkedIn",
    stats: [
      { label: "Years of Experience", value: "20+" },
      { label: "Successful Projects", value: "80+" },
      { label: "Industries Mastered", value: "3" },
    ],
  },
  about: {
    title: "About Edison Corrales",
    subtitle:
      "20+ years driving digital transformation and leadership in banking, retail, and insurance",
    bio: "Edison Corrales Arboleda is a passionate Client Relationship Executive with over 20 years of experience in the technology sector. Specializing in consultative sales and strategic business development, he leads key partnerships in the financial, retail, and insurance sectors, helping companies overcome challenges and drive digital transformation through innovative solutions. As Client Manager at NTT DATA, Edison orchestrates strategic relationships with banking sector accounts, leveraging high-impact technology solutions that generate real business value.",
    achievements: [
      "80+ successful digital transformation and implementation projects",
      "Expert in consultative sales and strategic relationship development",
      "Proven leadership in cross-functional and multidisciplinary teams",
      "Specialist in technology solutions for banking, retail, and insurance",
    ],
    highlights: [
      {
        icon: "Target",
        title: "Consultative Selling",
        description:
          "Design and execution of sales strategies that enhance business performance and operational efficiency.",
      },
      {
        icon: "Zap",
        title: "Accelerated Digital Transformation",
        description:
          "Proven expertise in legacy modernization and implementation of innovative solutions.",
      },
      {
        icon: "Users",
        title: "Team Leadership",
        description:
          "Fostering innovation, collaboration, and continuous improvement mindset in multidisciplinary teams.",
      },
    ],
  },
  services: {
    title: "Consulting Services",
    subtitle: "Three pillars of expertise to drive your digital transformation",
    items: [
      {
        title: "Consultative Sales & Business Development",
        description:
          "Design and implementation of commercial strategies that improve performance and operational efficiency.",
        features: [
          "Commercial opportunity analysis",
          "Value proposition development",
          "Key Account Management",
          "Market expansion strategy",
        ],
        idealFor: "CROs, VPs of Sales, business leaders",
      },
      {
        title: "Digital Transformation & Modernization",
        description:
          "Strategic guidance in digital transformation, system modernization, and technology adoption.",
        features: [
          "Digital maturity assessment",
          "Technology transformation roadmap",
          "Solution evaluation and implementation",
          "Change management and team training",
        ],
        idealFor: "CIOs, CTOs, IT and operations leaders",
      },
      {
        title: "Strategic Leadership & Team Excellence",
        description:
          "Executive mentoring in leadership, governance, and management of multidisciplinary teams for strategic objectives.",
        features: [
          "Executive coaching and leadership",
          "Governance and complex project management",
          "Innovation culture building",
          "Risk management and compliance",
        ],
        idealFor: "Executives, general managers, transformation leaders",
      },
    ],
  },
  whyUs: {
    title: "Why Edison?",
    subtitle: "Verified experience. Tangible results.",
    comparison: [
      {
        aspect: "Practical Experience",
        traditional: "Theoretical consultants with no operational background",
        edison: "20+ years as operator and executive in real companies",
      },
      {
        aspect: "Approach",
        traditional: "Sales of extended and costly projects",
        edison: "Strategic advisory with verified ROI and measurable results",
      },
      {
        aspect: "Industries",
        traditional: "Generalists without sectoral depth",
        edison: "Proven expertise in banking, retail, and insurance",
      },
      {
        aspect: "Relationships",
        traditional: "External consultant disconnected from reality",
        edison: "Strategic partner building lasting trust-based relationships",
      },
    ],
    stats: [
      { label: "Years in Technology", value: "20+" },
      { label: "Projects Implemented", value: "80+" },
      { label: "Satisfied Clients", value: "40+" },
    ],
  },
  methodology: {
    title: "My Working Methodology",
    subtitle:
      "A 4-phase approach to ensure successful transformation",
    phases: [
      {
        title: "Strategic Diagnosis",
        description:
          "Deep analysis of your current situation, key challenges, and opportunities. Validation of real needs and definition of clear objectives.",
      },
      {
        title: "Solution Design",
        description:
          "Co-design of personalized strategies, roadmaps, and action plans. Alignment with business objectives and available resources.",
      },
      {
        title: "Implementation & Execution",
        description:
          "Support during execution with internal teams. Change management, training, and progress monitoring.",
      },
      {
        title: "Continuous Optimization",
        description:
          "Results measurement, necessary adjustments, and scaling of successful initiatives. Knowledge transfer and autonomy.",
      },
    ],
  },
  caseStudies: {
    title: "Success Stories",
    subtitle: "Digital transformation in key sectors: finance, retail, and insurance",
    items: [
      {
        company: "Multinational Financial Institution",
        challenge:
          "Modernization of obsolete credit platform. Manual processes causing 30+ day approval delays.",
        solution:
          "Leadership of digital transformation project. Modern platform implementation, workflow automation, and team training.",
        result:
          "Approval time reduced to 48 hours. 150% volume increase without raising operational costs.",
        metrics: [
          "Approvals in 48 hours (previously 30+ days)",
          "150% increase in credit volume",
          "$5M additional annual revenue",
        ],
      },
      {
        company: "Latin American Retail Group",
        challenge:
          "System fragmentation across channels. Lack of integration between online and offline limiting competitiveness.",
        solution:
          "Strategic advisory in omnichannel digital transformation. Integrated architecture design and implementation governance.",
        result:
          "Complete channel integration. Improved customer experience and optimized operations.",
        metrics: [
          "100% of channels integrated",
          "20% improvement in customer experience",
          "35% reduction in operational costs",
        ],
      },
      {
        company: "Regional Insurance Company",
        challenge:
          "Slow underwriting processes impacting competitiveness. Lack of tech talent limiting innovation.",
        solution:
          "Leadership of digital transformation focused on automation. Building high-performing technical team.",
        result:
          "Automated underwriting. New digital products launched to market.",
        metrics: [
          "Underwriting time -70%",
          "3 new digital products",
          "150% increase in policies",
        ],
      },
    ],
  },
  contact: {
    title: "Schedule a Strategic Consultation",
    subtitle:
      "30 minutes to explore how I can drive your digital transformation",
    ctaTitle: "Ready to move forward?",
    formFields: {
      name: "Full Name",
      email: "Corporate Email",
      company: "Company",
      role: "Role / Title",
      challenge: "What's your biggest challenge right now?",
      button: "Send Request",
    },
    successMessage:
      "Thank you! I'll contact you within 24 hours.",
    errorMessage:
      "Error sending request. Please try again.",
  },
  footer: {
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#caseStudies" },
      { label: "Contact", href: "#contact" },
    ],
    copyright:
      "© 2026 Edison Corrales. All rights reserved.",
    credentials:
      "20+ years of experience in strategic leadership, consultative sales, and digital transformation | SR Client Manager, Banking Sector | NTT DATA",
  },
};

export { es, en };
