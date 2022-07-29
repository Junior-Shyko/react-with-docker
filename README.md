# react-nodejs-docker-compose
Example project on how to develop project on Docker Compose

### Rodar vendor do compose
 #### Acessa o container com o comando
      docker exec -it phpturma bash
      - Depois roda o composer com o seguinte comando
      composer install

Rodar Migrates
docker-compose exec php-fpm php artisan migrate


Instalar axios
docker-compose exec react-ui npm install axios
