import type { SkillGroupSeed } from "./types";

export const skillGroupsSeed: SkillGroupSeed[] = [
  {
    title: { pt: "Fullstack Development", en: "Fullstack Development" },
    highlights: {
      pt: [
        "Soluções em JavaScript e TypeScript de ponta a ponta",
        "SPAs e PWAs responsivos em React.js e Next.js",
        "APIs e dados com Node.js, MongoDB e Supabase",
      ],
      en: [
        "End-to-end solutions in JavaScript and TypeScript",
        "Responsive SPAs and PWAs with React.js and Next.js",
        "APIs and data with Node.js, MongoDB and Supabase",
      ],
    },
    items: [
      { name: "HTML-5", iconifyTag: "vscode-icons:file-type-html" },
      { name: "CSS-3", iconifyTag: "vscode-icons:file-type-css" },
      { name: "Javascript", iconifyTag: "devicon:javascript" },
      { name: "Typescript", iconifyTag: "devicon:typescript" },
      { name: "Reactjs", iconifyTag: "vscode-icons:file-type-reactjs" },
      { name: "Redux", iconifyTag: "logos:redux" },
      { name: "Nextjs", iconifyTag: "vscode-icons:file-type-light-next" },
      { name: "NodeJS", iconifyTag: "devicon:nodejs-wordmark" },
      { name: "MongoDB", iconifyTag: "vscode-icons:file-type-mongo" },
      { name: "Mongoose", iconifyTag: "devicon:mongoose-wordmark" },
      { name: "NPM", iconifyTag: "logos:npm-icon" },
      { name: "Yarn", iconifyTag: "logos:yarn" },
    ],
  },
  {
    title: { pt: "Arquitetura Cloud", en: "Cloud Architecture" },
    highlights: {
      pt: [
        "Experiência em plataformas de nuvem",
        "Hospedagem e manutenção de sites em VMs",
        "Pipelines de CI/CD com GitHub Actions",
      ],
      en: [
        "Hands-on experience with cloud platforms",
        "Hosting and maintaining sites on virtual machines",
        "CI/CD pipelines with GitHub Actions",
      ],
    },
    items: [
      { name: "VERCEL", iconifyTag: "logos:vercel" },
      { name: "AWS", iconifyTag: "logos:aws" },
      { name: "Github", iconifyTag: "akar-icons:github-fill" },
      { name: "Docker", iconifyTag: "logos:docker-icon" },
    ],
  },
];
