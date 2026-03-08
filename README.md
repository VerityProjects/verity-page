# Verity — Landing Page

Landing page da **Verity**, empresa de tecnologia que desenvolve soluções de IA para fluxo de caixa e inteligência financeira. O site apresenta o produto (VerityMind AI), funcionalidades, metodologia e formas de contato.

## O que é este projeto

- **Site institucional** em página única (single-page) com seções: Product, Features, Methodology e Pricing.
- **Contato:** botões "Start Free Trial" e "Talk to Sales" abrem o e-mail `contact.verityia@gmail.com`; a seção de Pricing também direciona para esse contato.
- **Navbar** com links de navegação (scroll suave), Log in e Get Started (exibem toast informando que a ferramenta está em desenvolvimento).
- **Stack:** Vite, React, TypeScript, Tailwind CSS e shadcn/ui (componentes UI).

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:8080](http://localhost:8080).

## Build e preview

```bash
npm run build
npm run preview
```

O build gera a pasta **`dist/`**, usada no deploy.

## Deploy (Vercel)

- **Framework Preset:** Vite  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`

## Estrutura principal

- `src/pages/Index.tsx` — Página principal (monta as seções)
- `src/components/` — Navbar, HeroSection, FeaturesSection, MethodologySection, CTASection, Footer
- `src/components/ui/` — Componentes shadcn (Button, Toast/Sonner, Tooltip)
- `public/` — Favicon (`verity-icon.svg`), logos, `robots.txt`
- `src/assets/` — Logo e imagem do dashboard usados no site

## Contato

E-mail: **contact.verityia@gmail.com**  
Instagram: [@verity.ia](https://www.instagram.com/verity.ia/)
