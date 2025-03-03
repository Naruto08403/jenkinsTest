# Use the official Nginx image
FROM nginx:alpine

# Remove default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy your calculator app to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 8081

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
