const Sequelize = require('sequelize');
const db = require('../config/db');

exports.Testimonial = db.define('testimonial', {

  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  message:{
    type: Sequelize.STRING
  }
});
