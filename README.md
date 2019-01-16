## I-Burguer API

API feita em [Nest](https://github.com/nestjs/nest) com [TypeORM](http://typeorm.io) para servir o projeto [i-burguer](https://github.com/liverday/i-burguer)

## Installation

```bash
$ npm install
```

## Running the app

 - Primeiro, precisa mapear um banco de dados. Por padrão o projeto está configurado o MySQL. Para isso, precisa criar um arquivo `.env`. 
 - `env` é um arquivo de configuração de variáveis de ambiente, onde o pacote [dotenv](https://github.com/motdotla/dotenv) no ínicio da aplicação pegará essas variáveis e exportará ao sistema de origem. exemplo: 
 
 ```sh
 CLEARDB_DATABASE_URL=mysql://root:@localhost:3306/database
 ```
 - Depois disso, precisa criar os schemas no banco selecionado. Dentro de `src/start/` tem um pequeno script para a criação desses schemas. Assim como alguns valores iniciais
 - Com eles prontos, somente rodar o comando `npm start` ou `npm run start:dev` para um servidor que ouve as mudanças!
