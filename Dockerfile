
# STAGE 1: Backend Dependencies (Composer)
FROM composer:2 as base
WORKDIR /app
COPY . .
RUN composer install --no-dev --no-interaction --no-plugins --no-scripts --prefer-dist --optimize-autoloader

# STAGE 2: Frontend Assets (Node.js)
FROM node:18 as node_builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# STAGE 3: Final Production Image
FROM php:8.2-fpm-alpine as production
WORKDIR /var/www/html

# Install ekstensi PHP yang umum dibutuhkan Laravel (tanpa database)
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS linux-headers \
    && docker-php-ext-install pdo sockets \
    && apk del .build-deps

# Salin file aplikasi dari stage 'base' yang sudah berisi folder 'vendor'
COPY --from=base /app .

# Salin aset frontend yang sudah di-build dari stage 'node_builder'
COPY --from=node_builder /app/public/build ./public/build

# Atur kepemilikan dan izin file agar bisa ditulis oleh web server
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port untuk PHP-FPM
EXPOSE 9000

# Perintah untuk menjalankan PHP-FPM
CMD ["php-fpm"]