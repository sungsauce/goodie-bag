const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    validate: {
      isNull: false,
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      isNull: false,
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9e/Peppermint_Butler.png/revision/latest?cb=20100512224052',
    validate: {
      isURL: true
    }
  }
});
