# 🚀 DevOps CI/CD Pipeline Project

## 📌 Overview
This project demonstrates a complete CI/CD pipeline using Jenkins, Docker, and AWS EC2.

The pipeline automates the process of building, packaging, and deploying a Node.js application.

---

## ⚙️ Tech Stack
- Jenkins (CI/CD)
- Docker (Containerization)
- Docker Hub (Image Registry)
- AWS EC2 (Deployment Server)
- GitHub (Source Code)

---

## 🔄 Workflow

1. Code pushed to GitHub
2. Jenkins pipeline is triggered (Poll SCM)
3. Docker image is built
4. Image is pushed to Docker Hub
5. EC2 instance pulls the latest image
6. Old container is removed
7. New container is deployed

---

## 🐳 Docker Commands Used

```bash
docker build -t devops-app .
docker tag devops-app kuldeep45/devops-app:latest
docker push kuldeep45/devops-app:latest
docker pull kuldeep45/devops-app:latest
docker run -d -p 3000:3000 --name myapp kuldeep45/devops-app:latest