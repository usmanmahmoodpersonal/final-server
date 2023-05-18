/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
//  imageUrl: {
//    type: Sequelize.BLOB,
//    allowNull: true,
//    defaultValue: blankProfile.png,
//    validate: {
//      isUrl: true
//    }
//  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      max: 4.0,
      min: 0
    }
  }
});

// Export the student model
module.exports = Student;

