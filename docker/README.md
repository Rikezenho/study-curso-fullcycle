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