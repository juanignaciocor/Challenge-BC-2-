const User = require("./user");
const Package = require("./package");

Package.belongsTo(User);
User.belongsToMany(Package, { through: "user_package" });

module.exports = {
  User,
  Package,
};
