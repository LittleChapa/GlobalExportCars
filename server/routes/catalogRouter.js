const Router = require("express");
const catalogController = require("../controllers/catalogController");
const router = new Router();

router.post("/", catalogController.create);
router.patch("/:id", catalogController.update);
router.delete("/:id", catalogController.remove);
router.get("/", catalogController.getAll);

module.exports = router;
