## Estudo com reactjs, laravel com api e docker
Example project on how to develop project on Docker Compose

### Rodar vendor do compose
 #### Acessa o container com o comando
      docker exec -it phpturma bash
 #### Depois roda o composer com o seguinte comando
      composer install
 #### Deve criar um arquivo .env 
 #### Depois deve rodar o seguinte comando
     docker-compose exec php-fpm php artisan key:generate
### Configurando a conexão no arquivo .env
 ```
      DB_CONNECTION=mysql
      DB_HOST=ipcontainer
      DB_PORT=5002
      DB_DATABASE=academic
      DB_USERNAME=root
      DB_PASSWORD=livre
```

### Rodar Migrates
     docker-compose exec php-fpm php artisan migrate

### Acessar o container para npm install
    docker-compose exec react-ui npm install
