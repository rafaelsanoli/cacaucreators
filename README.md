# 🍫 Cacau Creators

Plataforma all‑in‑one para criadores brasileiros gerenciarem presença digital, comunidade e monetização — com design premium, performance e foco em crescimento.

<p align="left">
  <img alt="Go" src="https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white" />
  <img alt="Azure" src="https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=white" />
  <img alt="E‑mail" src="https://img.shields.io/badge/SendGrid%2FResend-1A82E2?logo=sendgrid&logoColor=white" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20desenvolvimento-8EB237" />
  <img alt="Idioma" src="https://img.shields.io/badge/pt--BR-🇧🇷-2B1D22" />
</p>

- Feito para criadores, com simplicidade de uso, insights acionáveis e monetização nativa.

---

## Sumário

- [Visão](#visão)
- [Destaques](#destaques)
- [Para quem é](#para-quem-é)
- [Stack e Tecnologias](#stack-e-tecnologias)
- [Arquitetura (alto nível)](#arquitetura-alto-nível)
- [Roadmap](#roadmap)
- [Design Tokens](#design-tokens)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão

O Cacau Creators elimina a fragmentação de ferramentas do criador e reúne, em um só lugar, os três pilares do negócio de conteúdo:
- Cacau Links: link‑in‑bio inteligente com personalização e analytics.
- Comunidade e Assinaturas: tiers, conteúdos exclusivos e relacionamento direto.
- Metas de Financiamento: campanhas pontuais com transparência e recompensas.

Proposta de valor: experiência unificada que aumenta receita, engajamento e previsibilidade — sem fricção técnica.

---

## Destaques

- Link‑in‑bio inteligente
  - CRUD de links, reordenação por drag‑and‑drop, agendamento e expiração
  - Temas, cores, fontes, logo, backgrounds e modo claro/escuro
  - Página pública extremamente rápida, com foco em SEO e compartilhamento social
- Comunidade e Assinaturas (roadmap)
  - Tiers de assinatura, feed exclusivo, conteúdo por nível, comentários e reações
  - Doações únicas e contribuição recorrente vinculada a metas
- Analytics que importam
  - Visitas, cliques por link/bloco, CTR, horários de pico e conversões
- Pagamentos prontos para escalar
  - Base para PIX, repasses a criadores, recibos e conciliação
- Experiência mobile‑first
  - Dashboard para criadores e área do assinante fluidas em qualquer dispositivo
- Segurança e conformidade
  - LGPD, criptografia, 2FA (roadmap), auditoria e portabilidade de dados

---

## Para quem é

- "A Influyoung" (22): criadora no TikTok/Instagram que quer começar a monetizar com produtos e links rastreáveis.
- "O Expert" (35): professor/mentor que precisa de comunidade, assinatura e área de cursos.

---

## Stack e Tecnologias

Linguagens e frameworks
- Backend: Go (alto desempenho e serviços stateless)
- Frontend: Next.js (React), TypeScript, Tailwind CSS, shadcn/ui

Principais bibliotecas
- Web: TanStack Query, Zustand, react‑hook‑form, Zod, dnd‑kit, biblioteca de gráficos (Recharts/Chart.js)
- Go: framework HTTP (Gin), driver MongoDB, validador, logger estruturado, JWT/OAuth e bcrypt

Dados e infraestrutura
- Banco de dados: MongoDB (Atlas/Cosmos API Mongo)
- Cache e rate‑limit: Redis
- Mensageria e jobs: Azure Service Bus
- Armazenamento de arquivos: Azure Blob Storage
- E‑mail transacional: SendGrid/Resend

Observabilidade e entrega
- Monitoramento e métricas gerenciadas em nuvem
- CI/CD com qualidade e padrões de código (Conventional Commits, lint, testes)

---

## Arquitetura (alto nível)

Princípios
- Desempenho: páginas públicas otimizadas e cacheáveis
- Segurança: autenticação robusta, proteção a fraudes e conformidade com LGPD
- Escalabilidade: serviços stateless, filas duráveis e camadas de cache
- DX: monorepo, contratos compartilhados e padrões consistentes

Componentes
- Aplicação web pública (SSR/ISR) e Dashboard do criador (SPA)
- API stateless para domínios de autenticação, links, monetização e analytics
- Camadas de dados e eventos para confiabilidade (cache/filas/armazenamento)

---

## Roadmap

- Fase 1 — MVP
  - Cacau Links com tema básico, editor (CRUD + reorder) e analytics essenciais
  - Base de pagamentos (PIX) e comunicação transacional
- Fase 2 — Monetização
  - Assinaturas (tiers), checkout transparente, KYC e repasses
- Fase 3 — Engajamento
  - Comunidade com feed, comentários, reações e Metas
- Futuro
  - Loja integrada (digitais/físicos), IA para recomendações e copy, white‑label e apps mobile nativos

Status e changelog são acompanhados nos documentos internos do repositório.

---

## Design Tokens

Cores de marca
- Primária (Cacau): #6E3041
- Secundária (Verde): #8EB237
- Background: #F5F5F5
- Texto: #2B1D22
- Neutro/Borda: #E6E6E6

Prévia (visual)
<p>
  <img alt="primary" src="https://img.shields.io/badge/primary-6E3041-6E3041?labelColor=2B1D22" />
  <img alt="secondary" src="https://img.shields.io/badge/secondary-8EB237-8EB237?labelColor=2B1D22" />
  <img alt="background" src="https://img.shields.io/badge/background-F5F5F5-F5F5F5?labelColor=2B1D22" />
  <img alt="text" src="https://img.shields.io/badge/text-2B1D22-2B1D22?labelColor=F5F5F5" />
</p>

---

## Contribuição

- Padrões: Conventional Commits, ESLint/Prettier (web) e linters no backend
- Testes: unitários e end‑to‑end, com automação em CI
- Fluxo: issues, branches por feature e PRs com revisão

Quer ajudar? Abra uma issue com sua sugestão ou envie um PR. Adoramos contribuições da comunidade criativa.

---

## Licença

A definir. Enquanto isso, o conteúdo deste repositório é de uso interno da equipe Cacau Creators. Para uso comercial, parcerias ou imprensa, entre em contato via Issues.

— Cacau Creators ©


