const env = require('dotenv')
env.config()

const isProd = process.env.NODE_ENV === 'production'
const entitiesExtension =  isProd ? 'js' : 'ts'
const migrationsDir = isProd ? 'dist/migration/*.js' : 'src/migration/*.ts'

module.exports = {
  type: "mysql",
  entities: [
    __dirname + '/**/*.entity.' + entitiesExtension
  ],
  url: process.env.CLEARDB_DATABASE_URL,
  synchronize: false,
  migrations: [migrationsDir],
  cli: {
    migrationsDir: 'src/migration'
  }
}