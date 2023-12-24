const Router = require("express");
const mainController = require("../controllers/mainController");
const router = new Router();

router.post("/", mainController.create);
router.patch("/:id", mainController.update);
router.get("/", mainController.getAll);

module.exports = router;
