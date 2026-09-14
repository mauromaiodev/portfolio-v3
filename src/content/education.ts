import type { EducationSeed } from "./types";

export const educationSeed: EducationSeed[] = [
  {
    school: "Anhanguera Educacional",
    subHeader: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
    duration: { pt: "Jan 2021 — Abr 2023", en: "Jan 2021 — Apr 2023" },
    desc: {
      pt: "Criar soluções tecnológicas eficientes para atender às necessidades específicas de organizações e usuários.",
      en: "Design efficient technical solutions for the needs of organizations and users.",
    },
    bullets: {
      pt: [
        "Construção efetiva do software",
        "Programação, teste, integração de componentes e tecnologias específicas",
      ],
      en: [
        "Effective software construction",
        "Programming, testing, component integration and domain technologies",
      ],
    },
  },
  {
    school: "Rocketseat",
    subHeader: {
      pt: "Fullstack Developer, Information Technology",
      en: "Fullstack Developer, Information Technology",
    },
    duration: { pt: "Mar 2020 — Jul 2020", en: "Mar 2020 — Jul 2020" },
    desc: {
      pt: "Sistemas web com ReactJS no frontend, Node.js no backend e app mobile (Android e iOS) com React Native.",
      en: "Web systems with ReactJS on the frontend, Node.js on the backend, and mobile (Android and iOS) with React Native.",
    },
    bullets: {
      pt: [
        "PostgreSQL e MongoDB em containers Docker",
        "Styled Components para interface",
        "Context API e Redux para estado no React",
      ],
      en: [
        "PostgreSQL and MongoDB in Docker containers",
        "Styled Components for UI",
        "Context API and Redux for React state",
      ],
    },
  },
];
