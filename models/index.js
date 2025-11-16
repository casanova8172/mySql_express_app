const student = require('./student')
const IdentityCard = require('./identityCard')
const Department = require('../models/department');

// one to one association
student.hasOne(IdentityCard);
IdentityCard.belongsTo(student);

// one to many association
Department.hasMany(student);
student.belongsTo(Department);

module.exports = {
    student,
    IdentityCard
};