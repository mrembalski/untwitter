FROM nginx:latest

WORKDIR /app

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"] 