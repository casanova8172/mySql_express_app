const student = require('./student')
const IdentityCard = require('./identityCard')
const Department = require('../models/department');
const courses = require('./courses')
const StudentCourse = require('./StudentCourse');

// one to one association
student.hasOne(IdentityCard);
IdentityCard.belongsTo(student);

// one to many association
Department.hasMany(student);
student.belongsTo(Department);

// many to many association
student.belongsToMany(courses, { through: StudentCourse });
courses.belongsToMany(student, { through: StudentCourse });

module.exports = {
    student,
    IdentityCard,
    courses,
    StudentCourse
};