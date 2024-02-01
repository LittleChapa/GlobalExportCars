const Router = require('express');
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router();

router.patch('/update/:id', authMiddleware, applicationController.update);
router.get('/', applicationController.getAll);

module.exports = router;
