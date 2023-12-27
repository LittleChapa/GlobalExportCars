const Router = require('express');
const aboutController = require('../controllers/aboutController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', aboutController.create);
router.patch('/update/:id', aboutController.update);
router.get('/', aboutController.getAll);

module.exports = router;
