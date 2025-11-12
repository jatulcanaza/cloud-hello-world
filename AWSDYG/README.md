# ☁️ Hello World - AWS EC2 + Docker

## 📝 Description

This project deploys a simple **Node.js "Hello World" web application** using **Docker** on an **Amazon EC2 instance**.  
It was created as part of the academic research on **Cloud Service Providers** by **Anthony Chamorro** at the **Central University of Ecuador** (November 2025).

## 🛠️ Technologies Used

- **Node.js + Express:** Simple backend web server
- **Docker:** Containerization for easy deployment
- **AWS EC2:** Cloud computing service hosting the container
- **Amazon Elastic IP:** To provide a public and permanent access address
- **PowerShell / SSH:** Used for server connection and deployment commands

## 📦 Docker Image

- **DockerHub Repository:** [chamorrito/hello-ec2-node](https://hub.docker.com/repository/docker/chamorrito/hello-ec2-node/general)
- **Image Tag:** `latest`
- **Image Size:** ~120 MB

You can pull it with:

docker pull chamorrito/hello-ec2-node:latest

## 🌐 Live Demo

Public URL: http://98.95.228.166/

Status: ✅ Running on AWS EC2 with auto-restart enabled

## 🧩 Local Execution
Option 1: Run with Docker
# Pull image
docker pull chamorrito/hello-ec2-node:latest

# Run container
docker run -d -p 8080:80 chamorrito/hello-ec2-node

# Open in browser
http://localhost:8080

# Clone repository
git clone https://github.com/tuusuario/hello-ec2-node.git
cd hello-ec2-node

# Build the image
docker build -t hello-ec2-node .

# Run container
docker run -d -p 8080:80 hello-ec2-node

## 🚀 Deployment Steps (AWS EC2)

Create EC2 instance (Amazon Linux 2, t3.micro)

Install Docker
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -aG docker ec2-user

Log in to Docker Hub
docker login

Pull and run container
docker pull chamorrito/hello-ec2-node
docker run -d -p 80:80 --restart always chamorrito/hello-ec2-node

Assign Elastic IP to your instance
Access your app → http://98.95.228.166/

##👨‍💻 Author

Anthony Chamorro
Student – Central University of Ecuador
📅 November 2025
💬 Project: Deployment of a simple web app using AWS EC2 and Docker

