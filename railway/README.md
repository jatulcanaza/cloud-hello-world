# 🚀 Hello World - Railway

## 📝 Description

Static website deployed on **Railway** using **Docker**.
Example project for research on **Cloud Service Providers**.

This project is part of the academic work of **Juan Tulcanaza** at the **Central University of Ecuador** (November 2025).

## 🛠️ Technologies Used

- **HTML5 / CSS3:** Modern structure and styling

- **JavaScript:** Basic functionality and animations

- **Railway Hosting:** PaaS for frontend deployment

- **Docker:** Application containerization

- **Git / GitHub:** Version control and automated deployment

## 📦 Docker Image

- **DockerHub:** juantulcanaza/railway-hello-world:latest

- **Link:** https://hub.docker.com/r/juantulcanaza/railway-hello-world

- **Last updated:** Less than 1 day ago

- **Image size:** 21.6 MB

## 🌐 Live Demo

- **Website URL:** https://charming-patience-production.up.railway.app/
- **GitHub Repository:** https://github.com/jatulcanaza/cloud-hello-world

## 🧩 Installation & Local Execution
### Option 1: With Docker (Recommended)
```bash
# Pull the image
docker pull juantulcanaza/railway-hello-world:latest

# Run the container
docker run -p 5000:80 juantulcanaza/railway-hello-world:latest

# Verify the created image
docker images | grep railway-hello-world

# Access at: http://localhost:5000
```
### Option 2: Without Docker
```bash
# Clone the repository
git clone https://github.com/jatulcanaza/cloud-hello-world.git
cd cloud-hello-world/railway

# Open index.html in your browser
# You can use a local server such as Live Server in VSCode
```

### Option 3: Build the Image Locally
```bash
# Build the image
docker build -t railway-hello-world .

# Run the container
docker run -p 5000:80 railway-hello-world
```

## 📋 Deployment Steps
### 1. Prepare the Project
```bash
# Clone repository and switch to railway branch
git clone https://github.com/jatulcanaza/cloud-hello-world.git
cd cloud-hello-world
git checkout railway
```
### 2. Build Docker Image
```bash
docker build -t juantulcanaza/railway-hello-world:latest ./railway

# Verify created image
docker images | grep railway-hello-world
```
### 3. Test Locally
```bash
# Run container
docker run -p 5000:80 juantulcanaza/railway-hello-world:latest

# Test in browser
# http://localhost:5000
```
### 4. Push to DockerHub
```bash
# Login to DockerHub
docker login

# Push image
docker push juantulcanaza/railway-hello-world:latest

# Verify at: https://hub.docker.com
```
### 5. Configure Railway

Create an account on Railway

Create a new project

Import from GitHub: jatulcanaza/cloud-hello-world → branch railway

Set Root Directory: railway

Leave Build Command and Output Directory as default (for static sites)

Deploy and wait for completion

Copy the project URL and add it to the README

## 🐛 Troubleshooting
| Error                                 | Solution                                                       |
| ------------------------------------- | -------------------------------------------------------------- |
| ❌ **Build failed**                    | Make sure the root directory is set to `railway`.              |
| ❌ **Port not exposed**                | Ensure the `Dockerfile` includes `EXPOSE 80`.                  |
| ❌ **Site not found**                  | Wait a few minutes or check the logs on the Railway Dashboard. |
| ❌ **Permission denied** during `push` | Run `docker login` before pushing the image.                   |

## 🔍 Comparison with Other Providers
| Provider    | Type | Ease of Use | Cost   | Scalability |
| ----------- | ---- | ----------- | ------ | ----------- |
| **Railway** | PaaS | ⭐⭐⭐⭐        | 💰     | ⭐⭐⭐⭐        |
| **Render**  | PaaS | ⭐⭐⭐⭐        | 💰💰   | ⭐⭐⭐⭐        |
| **Vercel**  | PaaS | ⭐⭐⭐⭐⭐       | 💰     | ⭐⭐⭐         |
| **Heroku**  | PaaS | ⭐⭐⭐⭐        | 💰💰💰 | ⭐⭐⭐⭐        |
| **AWS**     | IaaS | ⭐⭐          | 💰💰💰 | ⭐⭐⭐⭐⭐       |

## 🏢 Service Model: Railway (PaaS)
| Feature             | Description                             |
| ------------------- | --------------------------------------- |
| **Hosting**         | Static and dynamic content              |
| **Git Integration** | Automatic deployment from GitHub        |
| **Environments**    | Separate Dev and Prod environments      |
| **SSL**             | Automatic HTTPS certificate             |
| **Databases**       | Optional PostgreSQL, MySQL, and MongoDB |

## 📸 Screenshots

1️⃣ DockerHub Image
Repository on DockerHub — Image uploaded successfully with tags and description.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/railway/railway/img/dockerhub.png?raw=true" width="760" alt="DockerHub Screenshot"></p>

2️⃣ Railway Deployment
Deployment process — Successful deployment.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/railway/railway/img/railway.png?raw=true" width="760" alt="Railway Deployment"></p>

3️⃣ Running Application
App in production — Static website running correctly on Railway.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/railway/railway/img/app.png?raw=true" width="760" alt="Live App Screenshot"></p>

## ✅ Advantages of Railway Hosting

Fast and simple deployment

Direct integration with GitHub

Separate development and production environments

Automatic SSL

Generous free plan for educational projects

## ❌ Disadvantages

Limited for large-scale applications

Dependence on Railway for hosting

Free plan has monthly usage limits

## 📚 Ideal Use Cases

Landing pages

Portfolios

Technical documentation

Simple static applications

Prototypes and academic demos

## 📖 Additional Resources

📘 [**Official railway documentation**](https://docs.railway.com/)  
📗 [**Deployment of Docker containers on Railway**](https://docs.railway.com/guides/dockerfiles)  
📙 [**Official Docker documentation**](https://docs.docker.com/)  

## 👤 Author


**[Juan Tulcanaza]**

- Project: Cloud Service Providers

- Subject: [Distributed Programming]

- Date: November 2025

## 📄 License

This project is open source under the MIT License.