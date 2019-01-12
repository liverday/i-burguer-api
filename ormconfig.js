const env = require('dotenv')
env.config()

const migrationsDir = isProd ? 'dist/migration/*.js' : 'src/migration/*.ts'

module.exports = {
  type: "mysql",
  entities: [
    __dirname + '/**/*.entity.ts'
  ],
  url: process.env.CLEARDB_DATABASE_URL,
  synchronize: false,
  migrations: [migrationsDir],
  cli: {
    migrationsDir: 'src/migration'
  }
}