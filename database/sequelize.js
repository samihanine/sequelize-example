require('dotenv').config();
const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    operatorsAliases: 0,
    define: {
      timestamps: false
    },
    logging: false
});

const modelDefiners = [
	require('../models/user.model'),
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
//applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;