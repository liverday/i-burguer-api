const env = require('dotenv')
env.config()

module.exports = {
  type: "mysql",
  entities: [
    __dirname + '/**/*.entity.ts'
  ],
  url: process.env.CLEARDB_DATABASE_URL,
  synchronize: false,
}