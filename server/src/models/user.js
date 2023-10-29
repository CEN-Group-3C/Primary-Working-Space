const { sq } = require("../database");
const { DataTypes } = require("sequelize");

const User = sq.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

sq.sync().then(() => {
  console.log("User table created");
});

module.exports = User;
