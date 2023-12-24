const Router = require("express");
const aboutController = require("../controllers/aboutController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.patch("/:id", checkRoleMiddleware("ADMIN"), aboutController.update);
router.get("/", aboutController.getAll);

module.exports = router;
