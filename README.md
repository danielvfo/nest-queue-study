<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

Projeto criado para implementar um exemplo simples de fila utilizando Bull e Redis.

## Tecnologias utilizadas

Node version >= 18.17.1

## Instalando e executando o projeto

```bash
$ git clone git@github.com:danielvfo/nest-queue-study.git
```

```bash
$ cd nest-queue-study
```

```bash
$ npm install
```

```bash
$ docker run -d -p 6379:6379 redis
```

```bash
$ npm run start
```

Em outra aba do terminal
```bash
$ curl -X POST http://localhost:3000/contracts
```

## Informações adicionais

- Author - [Daniel Vieira](https://github.com/danielvfo)
- Twitter/X - [@danielvfo](https://twitter.com/danielvfo)
