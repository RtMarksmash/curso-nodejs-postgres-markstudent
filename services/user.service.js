const boom = require('@hapi/boom');

const { getConnect } = require('../libs/postgres')

class UserService {
    constructor() {}

    async create(data) {
        return data;
    }

    async find() {
        const Client = await getConnect();
        const rta = await Client.query('SELECT * FROM tasks');
        return rta.rows;
    }

    async findOne(id) {
        return { id };
    }

    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    async delete(id) {
        return { id };
    }
}

module.exports = UserService;