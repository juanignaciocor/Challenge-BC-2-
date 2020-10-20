const e = require("express");
const { Package, User } = require("../models/index");
const controller = {};
controller.fetchPackageUser = async (req, res, next) => {
  try {
    const allPackageUser = await Package.findAll({});
    res.status(200).json(allPackageUser);
  } catch (err) {
    next(err);
  }
};
//
controller.postPackageUser = async (req, res, next) => {
  try {
    const allPackageUser = await Package.findAll({
      where: {
        userId: req.body.userId,
        state: "reception",
      },
    });
    if (allPackageUser.length < 3) {
      const package = await Package.create({
        name: req.body.name,
        category: req.body.category,
      });
      const user = await User.findOne({
        where: {
          id: req.body.userId,
        },
      });
      user.addPackage(package.id);
      package.setUser(req.body.userId);
      res.status(201).json(package);
    } else {
      res.status(403).send({
        message: "Supero el limite de paquetes",
      });
    }
  } catch (err) {
    next(err);
  }
};

controller.removePackage = async (req, res, next) => {
  try {
    const removeUserPackage = await Package.update(
      { state: "retired" },
      { where: { userId: Number(req.query.userId), state: "reception" } }
    );
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = controller;
