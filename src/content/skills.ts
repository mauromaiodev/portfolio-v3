import type { SkillGroupSeed } from "./types";

export const skillGroupsSeed: SkillGroupSeed[] = [
  {
    title: { pt: "Frontend", en: "Frontend" },
    highlights: {
      pt: [
        "React, Next.js, TypeScript e JavaScript",
        "Vue, Nuxt, React Query, Zod e React Hook Form",
        "Tailwind, Styled Components e MUI",
      ],
      en: [
        "React, Next.js, TypeScript, and JavaScript",
        "Vue, Nuxt, React Query, Zod, and React Hook Form",
        "Tailwind, Styled Components, and MUI",
      ],
    },
    items: [
      { name: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
      { name: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
      { name: "TypeScript", iconifyTag: "devicon:typescript" },
      { name: "JavaScript", iconifyTag: "devicon:javascript" },
      { name: "Vue", iconifyTag: "logos:vue" },
      { name: "Nuxt", iconifyTag: "logos:nuxt-icon" },
      { name: "Tailwind", iconifyTag: "logos:tailwindcss-icon" },
    ],
  },
  {
    title: { pt: "Backend", en: "Backend" },
    highlights: {
      pt: ["Go, Node.js e Express", "APIs REST e MongoDB"],
      en: ["Go, Node.js, and Express", "REST APIs and MongoDB"],
    },
    items: [
      { name: "Go", iconifyTag: "logos:go" },
      { name: "Node.js", iconifyTag: "devicon:nodejs-wordmark" },
      { name: "Express", iconifyTag: "simple-icons:express" },
      { name: "MongoDB", iconifyTag: "vscode-icons:file-type-mongo" },
    ],
  },
  {
    title: { pt: "Infra e DevOps", en: "Infra and DevOps" },
    highlights: {
      pt: [
        "AWS, Docker e Kubernetes",
        "CI/CD, Azure DevOps e Git",
      ],
      en: ["AWS, Docker, and Kubernetes", "CI/CD, Azure DevOps, and Git"],
    },
    items: [
      { name: "AWS", iconifyTag: "logos:aws" },
      { name: "Docker", iconifyTag: "logos:docker-icon" },
      { name: "Kubernetes", iconifyTag: "logos:kubernetes" },
      { name: "GitHub", iconifyTag: "akar-icons:github-fill" },
    ],
  },
  {
    title: { pt: "Segurança", en: "Security" },
    highlights: {
      pt: ["Keycloak, OAuth, JWT e Next-Auth"],
      en: ["Keycloak, OAuth, JWT, and Next-Auth"],
    },
    items: [{ name: "Keycloak", iconifyTag: "simple-icons:keycloak" }],
  },
  {
    title: { pt: "Qualidade e práticas", en: "Quality and practices" },
    highlights: {
      pt: [
        "Jest, React Testing Library, SOLID e Clean Code",
        "SSR, SEO, acessibilidade (WCAG), Scrum e Kanban",
      ],
      en: [
        "Jest, React Testing Library, SOLID, and Clean Code",
        "SSR, SEO, accessibility (WCAG), Scrum, and Kanban",
      ],
    },
    items: [{ name: "Jest", iconifyTag: "logos:jest" }],
  },
  {
    title: { pt: "Idiomas", en: "Languages" },
    highlights: {
      pt: ["Português (nativo)", "Inglês (avançado)"],
      en: ["Portuguese (native)", "English (advanced)"],
    },
    items: [],
  },
];
