## I-Burguer API

API feita em [Nest](https://github.com/nestjs/nest) com [TypeORM](http://typeorm.io) para servir o projeto [i-burguer](https://github.com/liverday/i-burguer)

## Installation

```bash
$ npm install
```

## Running the app

 - Primeiro, precisa mapear as variáveis de ambiente para o sistema funcionar. Por padrão o projeto está utilizando o banco MySQL. 
 Para configurar sua URL, precisaremos criar um arquivo `.env`. Caso você nunca tenha feito alguma conexão com um banco de dados utilizando NestJS, veja [aqui](https://docs.nestjs.com/techniques/database)
 
 - `.env` é um arquivo de configuração de variáveis de ambiente, onde a biblioteca [dotenv](https://github.com/motdotla/dotenv) no ínicio da aplicação pegará essas variáveis e exportará ao sistema de origem. exemplo: 
 
 ```sh
 CLEARDB_DATABASE_URL=mysql://<username>:<password>@<host>:<port>/<database>
 ```
 - Depois disso, precisa criar os schemas no banco selecionado. Dentro de `src/start/` tem um pequeno script para a criação desses schemas, assim como alguns valores iniciais.
 
 - Com eles prontos, somente rodar o comando `npm start` ou `npm run start:dev` para um servidor que ouve as mudanças!
