const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "mvp",
  host: "localhost",
  port: 5432
});

pool.connect((err, data) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  } else {
    let dbConnected = pool.query('SELECT * FROM products WHERE products.id=1').then(data => {
      console.log(data.rows[0].id, 'Database is now connected!');
    })
    return dbConnected;
  }

});