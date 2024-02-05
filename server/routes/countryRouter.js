const Router = require("express");
const countryController = require("../controllers/countryController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/", authMiddleware, countryController.create);
router.get("/", countryController.getAll);
router.get("/:id", countryController.getOne);

module.exports = router;
