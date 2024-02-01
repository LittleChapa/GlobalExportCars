const Router = require('express');
const aboutController = require('../controllers/aboutController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router();

router.post('/', authMiddleware, aboutController.create);
router.patch('/update/:id', authMiddleware, aboutController.update);
router.get('/', aboutController.getAll);

module.exports = router;
