const S = require("sequelize");
const db = require("../db/index.js");

class Package extends S.Model {}

Package.init(
  {
    name: {
      type: S.STRING,
      require: true,
    },
    category: {
      type: S.ENUM({
        values: ["big", "medium", "small"],
      }),
    },
    state: {
      type: S.STRING,
      defaultValue: "reception",
    },
  },
  { sequelize: db, modelName: "package" }
);

module.exports = Package;
