module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisProt: process.env.REDIS_PORT,
    pgUser: process.env.PGUSER, // usually postgres
    pgHost: process.env.PGHOST, // usually localhost
    pgDatabase: process.env.PGDATABASE, // name od the database
    pgPassword: process.env.PGPASSWORD, 
    pgPort: process.env.PGPORT // usually 5432
};

// BAD CODE
// pgClient.on('error', () => console.log('Lost PG connection'));
 
// pgClient
//   .query('CREATE TABLE IF NOT EXISTS values (number INT)')
//   .catch(err => console.log(err));

// GOOD CODE
// pgClient.on("connect", (client) => {
//     client
//       .query("CREATE TABLE IF NOT EXISTS values (number INT)")
//       .catch((err) => console.error(err));
//   });