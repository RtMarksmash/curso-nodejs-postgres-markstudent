const { config } = require('../config/config');


const USER = decodeURIComponent(config.dbUser);
const PASSWORD = decodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
    development: {
        url: URI,
        dialect: 'postgres'
    },
    product: {
        url: URI,
        dialect: 'postgres'

    }
}