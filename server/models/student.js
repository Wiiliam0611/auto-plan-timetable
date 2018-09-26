const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', null, null, {dialect: 'sqlite', storage: 'database.db'});

const studentTable = sequelize.define('student', {
    studentId: Sequelize.NUMERIC,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    studentMajor: Sequelize.STRING
});

studentTable.sync();



class Student{
    constructor(obj) {
        this.studentId = obj['studentId'];
        this.password = obj['password'];
        this.firstName = obj['firstName'];
        this.lastName = obj['lastName'];
        this.studentMajor = obj['studentMajor'];
    }

    save(cb){
        studentTable.create(this);
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

const student1 = new Student({
    studentId: 1,
    password: 'test',
    firstName: 'Hefei',
    lastName: 'Yang',
    studentMajor: 'no specific'
});

student1.save(err=> {
    if (err) console.error(err);
    console.log('user name is ' + student1.lastName);
});
