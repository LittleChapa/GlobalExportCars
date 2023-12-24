const Router = require("express");
const countryController = require("../controllers/countryController");
const router = new Router();

router.post("/", countryController.create);
router.get("/", countryController.getAll);
router.get("/:id", countryController.getOne);

module.exports = router;
