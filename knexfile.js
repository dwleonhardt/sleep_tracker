module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sleep_tracker'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
