const Sequelize = require('sequelize');
const db = require('../config/db');

exports.Travel = db.define('travels', {

  title: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  departure_date:{
    type: Sequelize.DATE
  },
  return_date:{
    type: Sequelize.DATE
  },
  image: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  available: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
});
