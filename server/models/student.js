const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', null, null, {dialect: 'sqlite', storage: 'database.db'});

const studentTable = sequelize.define('student', {
    studentId: Sequelize.NUMERIC,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    studentMajor: Sequelize.STRING
});
// const sequelize = require('sequelize');
// const db = require('./db');

class Student{
    constructor(obj) {
        this.studentId = obj['studentId'];
        this.password = obj['password'];
        this.firstName = obj['firstName'];
        this.lastName = obj[' lastName'];
        this.studentMajor = obj['studentMajor'];
    }

    save(cb){
        sequelize
            .sync({force: true})
            .then(() => {
                studentTable.create({
                    studentId: this.studentId,
                    password: this.password,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    studentMajor: this.studentMajor
                })
            });
        cb();
    }

    update(cb) {
    //    update the existed student account
    }

    hashPassword(cd) {
    //    hash student password
    }

    get(id, cb) {
    //    get a student via id
    }

    authenticate(name, pass, cb) {

    }
}

module.exports = Student;

const student = new Student({
    studentId: 1,
    password: 'test',
    firstName: 'Hefei',
    lastName: 'Yang',
    studentMajor: 'no specific'
});

student.save(err=> {
    if (err) console.error(err);
    console.log('user name is ' + student.lastName);
});