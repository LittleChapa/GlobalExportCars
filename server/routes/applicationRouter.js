const Router = require("express");
const applicationController = require("../controllers/applicationController");
const router = new Router();

router.patch("/:id", applicationController.update);
router.get("/", applicationController.getAll);

module.exports = router;
