# Use lightweight Nginx image
FROM nginx:alpine

# Remove default content from Nginx (optional, clean slate)
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files into Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Default command to run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
