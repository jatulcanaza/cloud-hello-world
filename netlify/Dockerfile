# Lightweight base image of Nginx
FROM nginx:alpine

# Copy all website files to Nginx's root directory
COPY . /usr/share/nginx/html

# Expose port 80 (where Nginx serves the site)
EXPOSE 80

# Default command: start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
