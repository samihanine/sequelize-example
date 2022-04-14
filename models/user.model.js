const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: false
		},
		mail: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				is: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
			}
		},
	});
};