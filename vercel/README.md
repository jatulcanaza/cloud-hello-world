# ⚡ Hello World - Vercel

## 📝 Description

Static website deployed on **Vercel**. Docker is used only for local testing and portability.
Example project for research on **Cloud Service Providers**.

This project is part of the academic work of **Juan Tulcanaza** at the **Central University of Ecuador** (November 2025).

## 🛠️ Technologies Used

- **HTML5 / CSS3:** Modern structure and responsive design

- **JavaScript:** Interactive behavior and animations

- **Vercel Hosting:** Fast PaaS optimized for frontend deployment

- **Docker:** Used only for local testing and packaging

- **Git / GitHub:**  Version control and continuous deployment

## 📦 Docker Image

- **DockerHub:**  juantulcanaza/vercel-hello-world:latest

- **Link:** https://hub.docker.com/r/juantulcanaza/vercel-hello-world

- **Last updated:** Less than 1 day ago

- **Image size:** 21.56 MB

## 🌐 Live Demo

- **Website URL:** https://vercel-hello-world-theta-seven.vercel.app/
- **GitHub Repository:** https://github.com/jatulcanaza/cloud-hello-world

## 🧩 Installation & Local Execution
### Option 1: With Docker (For local testing)
```bash
# Pull the image
docker pull juantulcanaza/vercel-hello-world:latest

# Run the container
docker run -p 8000:80 juantulcanaza/vercel-hello-world:latest

# Verify the created image
docker images | grep vercel-hello-world

# Access at: http://localhost:8000
```
### Option 2: Without Docker
```bash
# Clone the repository
git clone https://github.com/jatulcanaza/cloud-hello-world.git
cd cloud-hello-world/vercel

# Open index.html in your browser
# You can use a local server such as Live Server in VSCode
``` 
### Option 3: Build the Image Locally
```bash
# Build the image
docker build -t vercel-hello-world .

# Run the container
docker run -p 8000:80 vercel-hello-world
```
### 🚀 Deployment Steps (Vercel)
### 1. Prepare the Repository
```bash
# Clone repository and switch to vercel branch
git clone https://github.com/jatulcanaza/cloud-hello-world.git
cd cloud-hello-world
git checkout vercel
```
#### 2. Deploy to Vercel

Go to https://vercel.com/

Create an account 

Create a new project

Import from GitHub → jatulcanaza/cloud-hello-world

Select Branch: vercel

Set Root Directory: vercel/

Leave build and output settings disabled (static site)

Deploy and wait for completion 🚀

## 🐛 Troubleshooting
| Error                      | Solution                                                         |
| -------------------------- | ---------------------------------------------------------------- |
| ❌ **Build failed**         | Make sure the root directory is set to `vercel`.                 |
| ❌ **Page not found**       | Wait a few minutes or verify deployment logs on Vercel.          |
| ❌ **Docker push error**    | Run `docker login` before pushing the image.                     |
| ⚠️ **Branch not detected** | Confirm that the `vercel` branch exists and is pushed to GitHub. |

## 🔍 Comparison with Other Providers
| Provider    | Type | Ease of Use | Cost   | Scalability |
| ----------- | ---- | ----------- | ------ | ----------- |
| **Vercel**  | PaaS | ⭐⭐⭐⭐⭐       | 💰     | ⭐⭐⭐         |
| **Railway** | PaaS | ⭐⭐⭐⭐        | 💰     | ⭐⭐⭐⭐        |
| **Render**  | PaaS | ⭐⭐⭐⭐        | 💰💰   | ⭐⭐⭐⭐        |
| **Heroku**  | PaaS | ⭐⭐⭐⭐        | 💰💰💰 | ⭐⭐⭐⭐        |
| **AWS**     | IaaS | ⭐⭐          | 💰💰💰 | ⭐⭐⭐⭐⭐       |

## 🏢 Service Model: Vercel (PaaS)
| Feature             | Description                                  |
| ------------------- | -------------------------------------------- |
| **Hosting**         | Optimized for static and frontend frameworks |
| **Git Integration** | Automatic deployment from GitHub branches    |
| **Environments**    | Production and Preview Deploys               |
| **SSL**             | Automatic HTTPS certificates                 |
| **Scalability**     | Edge Network with global CDN                 |

## 📸 Screenshots

1️⃣ DockerHub Image
Repository on DockerHub — Image uploaded successfully with tags and description.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/vercel/vercel/img/dockerhub.png?raw=true" width="760" alt="DockerHub Screenshot"></p>

2️⃣ Vercel Deployment
Deployment process — Successful deployment in production environment.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/vercel/vercel/img/vercel.png?raw=true" width="760" alt="Vercel Deployment"></p>

3️⃣ Running Application
App in production — Static website running correctly on Vercel.

<p align="center"><img src="https://github.com/jatulcanaza/cloud-hello-world/blob/vercel/vercel/img/app.png?raw=true" width="760" alt="Live App Screenshot"></p>

## ✅ Advantages of Vercel Hosting

Blazing-fast deployment in seconds

Perfect integration with GitHub branches

Free SSL certificate and CDN by default

Ideal for static or Next.js projects

Preview environments for every commit

## ❌ Disadvantages

Limited backend functionality (frontend-only)

Some advanced features require paid plans

Performance depends on global CDN distribution

## 📚 Ideal Use Cases

Portfolios and landing pages

Static and frontend web apps

Educational and demo projects

Documentation websites

Quick prototypes

## 📖 Additional Resources

📘 [**Official vercel documentation**](https://vercel.com/docs)  
📙 [**Official Docker documentation**](https://docs.docker.com/)  

## 👤 Author


**[Juan Tulcanaza]**

- Project: Cloud Service Providers

- Subject: [Distributed Programming]

- Date: November 2025

## 📄 License

This project is open source under the MIT License.