const router = require("express").Router();
const { PackageController } = require("../controllers/index");
router.put("/retired", PackageController.removePackage);
router.get("/", PackageController.fetchPackageUser);
router.post("/", PackageController.postPackageUser);

module.exports = router;
