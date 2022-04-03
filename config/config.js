require('dotenv').config()

const { MYSQL_USER, MYSQL_PASSWORD, DATABASE, MYSQL_HOST, DIALECT } = process.env;

module.exports ={
  "development": {
    "username":MYSQL_USER,
    "password":MYSQL_PASSWORD,
    "database":DATABASE,
    "host":MYSQL_HOST,
    "dialect":DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}