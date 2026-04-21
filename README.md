<h2 align="center">
  Daniel Groh — Portfolio<br/>
  <a href="https://danielgroh.vercel.app/" target="_blank">danielgroh.vercel.app</a>
</h2>

<p align="center">
  My personal portfolio built with React and TypeScript, showcasing my projects, skills, and career history.
</p>

<p align="center">
  <a href="https://danielgroh.vercel.app/" target="_blank">Live Site</a> &nbsp;·&nbsp;
  <a href="https://github.com/DaniGroh/portfolio/issues">Report Bug</a> &nbsp;·&nbsp;
  <a href="https://github.com/DaniGroh/portfolio/issues">Request Feature</a>
</p>

---

## Tech Stack

- **React 18** with TypeScript
- **styled-components** — component-scoped styling with a shared theme
- **React Router v6** — client-side routing
- **react-icons** — icon library
- **typewriter-effect** — animated typewriter on the hero section
- **Vercel** — deployment and analytics

## Pages

| Route | Description |
|---|---|
| `/` | Hero section with typewriter animation and short bio |
| `/about` | Profile, bio, skills grid, and tools grid |
| `/projects` | Project cards with descriptions, tech tags, and GitHub links |
| `/resume` | Embedded PDF viewer with English / Portuguese toggle |

## Features

- Dark theme with indigo–cyan accent gradient
- Responsive layout — mobile and desktop
- Smooth page entrance animations
- Active navigation state
- Download CV button linking directly to the resume PDF

## Getting Started

**Prerequisites:** Node.js and Yarn installed globally.

```bash
# Clone the repository
git clone https://github.com/DaniGroh/portfolio.git
cd portfolio

# Install dependencies
yarn install

# Start the development server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

| Command | Description |
|---|---|
| `yarn start` | Run in development mode |
| `yarn build` | Build for production |
| `yarn lint` | Run ESLint |
