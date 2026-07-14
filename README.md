# 🐳 Node.js App Deployed with Docker

[![GitHub repo size](https://img.shields.io/github/repo-size/atulupadhyay2004/node.js-deployed-throught-Docker)](https://github.com/atulupadhyay2004/node.js-deployed-throught-Docker)
[![GitHub stars](https://img.shields.io/github/stars/atulupadhyay2004/node.js-deployed-throught-Docker?style=social)](https://github.com/atulupadhyay2004/node.js-deployed-throught-Docker/stargazers)

> A simple Node.js To-Do API containerized with Docker — build, run, and deploy in seconds.

---

## 📋 Quick Overview

- **Application**: Node.js HTTP server serving tasks from `tasks.json`
- **Containerization**: Docker with Alpine-based image (`node:20-alpine`)
- **Port**: `3000` (configurable via `PORT` env variable)
- **Endpoint**: `GET /` → Returns list of tasks as JSON

---

## 🧠 Architecture
┌─────────────────────────────────────────────────────────────┐
│ DOCKER CONTAINER │
│ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Node.js App (app.js) │ │
│ │ - HTTP Server on port 3000 │ │
│ │ - Reads tasks.json │ │
│ │ - Returns JSON response │ │
│ └────────────────────────────────────────────────────┘ │
│ │
│ Base Image: node:20-alpine │
└─────────────────────────────────────────────────────────────┘


---




🤝 Contributing
Fork the repo

Create a branch: git checkout -b feature/your-feature

Commit: git commit -m 'Add feature'

Push: git push origin feature/your-feature

Open a Pull Request

📬 Contact
Atul Upadhyay
GitHub: @atulupadhyay2004
Project Link: https://github.com/atulupadhyay2004/node.js-deployed-throught-Docker
