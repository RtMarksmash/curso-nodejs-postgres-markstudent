const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'mark',
    database: 'my_store',
    password: 'admin1234'
})




module.exports = pool;