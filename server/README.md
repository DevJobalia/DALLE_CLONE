# Technology / Packages used

- nodemon: To keep backend running, even after making changes to it
- cloudinary: To store images ON CLOUD (best practice: for storing large no. of images and just providing url in Db)
- cors: for cross origin request
- dotEnv: for storing secrets
- express
- mongoose
- leap.ai

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
npm install cloudinary cors dotenv express mongoose nodemon
```

5. To work with modules of es6+ which is called using "import and export" and not "requires"

```json
  "name": "server",
  "version": "1.0.0",
  "description": "",

  "type": "module",

  "main": "index.js",
```

6. packages for Leap.ai

```bash
npm install @leap-ai/sdk
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

# Technology / Packages used

- USE OF ENV: hide of imp data, rather than writing it as part of code

# miscellanous

- every time we update .env we must restart the server

- A database cluster: is a collection of databases that is managed by a single instance of a running database server

All nodes have the same responsibility, and data replication between them basically consists of each node passing information to the next. Every time nodes are added or removed from the cluster, the cluster reorganizes to maintain consistency. Your application can read/write on any node in the cluster.

- _BACKENd AND FRONT END INTEGERATON_: export route made using express.route(): to return data from server
  - in react createPage page: we use fetch() to retrive data

# parts not explain (self research)

- process.env.MONGODB_URL
- model, collection in mongo db.
- api end points for front end
- dot env, enviorment variables
- req.body (learn basic express and node terminology and its uses)
  - HOW IT HELPS REACT SEND DATA TO EXPRESS
  - E.G. dalleRoutes req.body.prompt
- res.status (express)

# confusion

- isSupriseMe: prop
