const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:1@localhost:5432/study-saturdays', {
    logging: false
  }
)

module.exports = db;
