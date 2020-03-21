FROM nginx:alpine

COPY ./public/assets /var/www/public/assets

CMD ["nginx"]
EXPOSE 80