const S = require("sequelize");
const db = require("../db/index.js");
const Op = S.Op;

class User extends S.Model {}

User.init(
  {
    full_name: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    flight: {
      type: S.STRING,
      require: true,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
