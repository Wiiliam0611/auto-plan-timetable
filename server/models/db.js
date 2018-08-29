const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', null, null, {dialect: 'sqlite', storage: 'database.db'});

exports.student = sequelize.define('student', {
    studentId: Sequelize.NUMERIC,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    studentMajor: Sequelize.STRING
});

exports.subject = sequelize.define('subject', {

});

exports.section = sequelize.define('section', {

});

exports.plan = sequelize.define('plan', {

});



