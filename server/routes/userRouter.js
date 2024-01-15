const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.post('/login', userController.login);
router.get('/check', authMiddleware, userController.check);
router.post('/applications', userController.nodeMailerGet);

module.exports = router;
