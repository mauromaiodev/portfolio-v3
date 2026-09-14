# Mauro Maio — portfolio-v3

Portfólio pessoal em Next.js 16, tema Dracula (somente dark), i18n pt-BR/en e CMS no Neon.

## Stack

- Next.js 16 App Router, TypeScript, Tailwind CSS v4
- next-intl (detecção de idioma do navegador + seletor PT/EN)
- Neon Postgres + Drizzle ORM
- Auth.js v5 (GitHub OAuth, allowlist `mauromaiodev`)

## Desenvolvimento

```bash
cp .env.example .env.local
npm install
npx drizzle-kit push
npm run db:seed
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000) (redireciona para `/pt` ou `/en` conforme o idioma do navegador)  
Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Variáveis de ambiente

Veja `.env.example`.

| Chave | Uso |
| --- | --- |
| `DATABASE_URL` | Neon pooled (app) |
| `DATABASE_URL_UNPOOLED` | Neon direto (`drizzle-kit push`) |
| `AUTH_SECRET` | Auth.js |
| `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` | GitHub OAuth App |
| `AUTH_ADMIN_GITHUB_LOGIN` | Login GitHub permitido no CMS |

Callback do OAuth App:

- `http://localhost:3000/api/auth/callback/github`
- `https://<domínio>/api/auth/callback/github`

## Conteúdo

O seed copia dados de `next-portfolio-mauro/portfolio.ts` (PT) com tradução EN. Depois disso, tudo entra pelo `/admin`.

## Deploy (Vercel)

1. Importar este repositório
2. Colar as env vars
3. Rodar `drizzle-kit push` e `npm run db:seed` uma vez (local ou script)
