module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tugasbesar'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};