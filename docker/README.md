# Docker

## Dockerfiles

* Built images:
```sh
> cd docker/laravel
> docker build -t kuwai/laravel:prod . -f Dockerfile.prod
> cd docker/nginx
> docker build -t kuwai/nginx:prod . -f Dockerfile.prod
```
* Created network `laranet`:
```sh
> docker network create laranet
```
* Started containers:
```sh
> docker run -d --network laranet --name laravel kuwai/laravel:prod
> docker run -d --network laranet --name nginx -p 8080:80 kuwai/nginx:prod
```

## Docker Compose

```
# laravel
> docker-compose -f docker-compose.laravel.yaml up -d
# node + db
> docker-compose up -d
```

When Dockerfile changes, pass `--build` flag on `docker-compose up`.

### MySQL
```
# enter container
> docker exec -it db bash
# create table
> mysql -uroot -p
> root
> use nodedb;
> create table people(id serial, name varchar(255), primary key(id));
```