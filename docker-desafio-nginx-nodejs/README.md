# Desafio - Docker - Node.js + Nginx

Nginx como proxy reverso da porta 8080 para a 3000 (servidor Express). O banco já é startado com uma migration com a tabela `aluno`, inserindo uma única linha com o `name`: `Henrique Kuwai`.

## Getting started
- Rode o `docker-compose.yaml` com o comando:
```
docker-compose up -d
```
- Será startado em sequência: `desafio-db` (banco de dados MySQL), `desafio-app` (app Express) e `desafio-nginx` (proxy reverso com Nginx).
- Acesse por [http://localhost:8080](http://localhost:8080).
