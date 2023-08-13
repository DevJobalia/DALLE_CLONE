# Technology / Packages used

- nodemon: To keep backend running, even after making changes to it
- cloudinary: To store images
- cors: for cross origin request
- dotEnv: for storing secrets
- express
- mongoose
- openai

-axios

# PACKAGE INSTALLATION MANUAL

1. SPLIT CLIENT AND SERVER TERMINAL
2. INTIAL SETUP

```bash
cd DALLE_CLONE
cd server
```

TO INITIALISE EMPTY PACKAGE.JSON (WITH NO DEPENDENCY)

```bash
npm init -y
```

3. CHANGES IN PACKAGE.JSON

- remove test
- add: "start" : "nodemon index"

```json
"scripts": {
    "start": "nodemon index"
  },
```

4. INSTALL PACKAGES

```bash
npm install cloudinary cors dotenv express mongoose nodemon openai
```

5. To work with modules of es6+ which is called using "import and export" and not "requires"

```json
  "name": "server",
  "version": "1.0.0",
  "description": "",

  "type": "module",

  "main": "index.js",
```

# To run server

```bash
 npm start
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
