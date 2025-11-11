# Dockerfile for a static website served with lightweight Nginx
FROM nginx:alpine
# Uses the official lightweight Nginx image based on Alpine Linux

# Remove the default Nginx HTML files (optional, keeps the image clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files (e.g., your HTML, CSS, JS) into Nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow external HTTP access
EXPOSE 80

# Default command to run Nginx in the foreground (keeps the container alive)
CMD ["nginx", "-g", "daemon off;"]
