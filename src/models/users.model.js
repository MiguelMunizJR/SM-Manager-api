const db = require("../db/database");
const DataTypes = require("sequelize").DataTypes;

const Users = db.define("users", {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		allowNull: false
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "first_name"
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "last_name"
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		},
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	birthday: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		validate: {
			isDate: true
		}
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		field: "is_active"
	}
});

module.exports = Users;
