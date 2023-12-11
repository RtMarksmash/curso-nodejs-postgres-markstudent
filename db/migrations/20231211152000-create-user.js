'use strict';

const { query } = require('express');
const { userSchema, USER_TABLE } = require('../models/user.model');
const { options } = require('joi');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(USER_TABLE, userSchema);
    },

    async down(queryInterface) {
        await queryInterface.drop(USER_TABLE)
    }
};