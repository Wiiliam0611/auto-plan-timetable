const Sequelize = require('sequelize');

const db = new Sequelize('database', null, null, {dialect: 'sqlite', storage: 'database.db'});

exports.Student = db.define('student', {
    studentId: Sequelize.NUMERIC,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    studentMajor: Sequelize.STRING
});

module.exports = db;