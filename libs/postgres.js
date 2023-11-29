const { Client } = require('pg');



async function getConnection() {
    const cliente = new Client({
        host: 'localhost',
        port: '5432',
        user: 'mark',
        database: 'my_store',
        password: 'admin1234'
    })

    await cliente.connect();
    return cliente;

}


module.exports = getConnection;