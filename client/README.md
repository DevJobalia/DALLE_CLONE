# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Technology / Packages used

- VITE: To create local development server, rather than using command create-react-app + Built tool
- TAILWIND: A utility-first CSS framework
- FILE-SAVER: To save files at client side, for web. that generate file for client.
  - For files coming from server use [Content-Disposition](https://github.com/eligrey/FileSaver.js/wiki/Saving-a-remote-file#using-http-header)
- react-router-dom

# PACKAGE INSTALLATION MANUAL

```bash
cd DALLE_CLONE
cd client
npm create vite@latest ./
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install file-saver
npm install react-router-dom

```

# To run

In client directory

```bash
 npm run dev
```

# Component Structure

    .
    ├── Home                    # Test files (alternatively `spec` or `tests`)
    │   ├── benchmarks          # Load and stress tests
    │   ├── integration         # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit                # Unit tests
    └── Create Post
        └── getRandomPrompts

# miscellanous

- ES7+ REACT/REDUX/REACT-NATIVE EXTENSION
  - rafce: provides snippet for react component boilerplate
- Ways to style in jsx
  - className
  - import css
  - style
  - sx for Material UI
- Tailwind CSS IntelliSense
- index.js file in each componenet: For ease of import in other file
- key attribute of component: Unique identity for repeated comoponent call
- utils folder: contains utility functiions which can be reused in application
- useState: to store data or update data for given component

# parts not explain (self research)

- setup / boiler plate for tailwind
  - how to setup own tailwind.config.js
  - what is tailwind directives
- media query code
- HOW IMPORT EXPORT WORK IN JS
  - Use of {} in import
- spread operator
- Optional chaining
- HTML SEMANTIC TAGS
- e.target in createPost method: https://www.w3schools.com/jsref/event_target.asp

# confusion

- isSupriseMe: prop
