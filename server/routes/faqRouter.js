const Router = require("express");
const faqController = require("../controllers/faqController");
const router = new Router();

router.post("/", faqController.create);
router.patch("/:id", faqController.update);
router.delete("/:id", faqController.remove);
router.get("/", faqController.getAll);

module.exports = router;
