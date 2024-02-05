const Router = require('express');
const mainController = require('../controllers/mainController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.post('/', authMiddleware, mainController.create);
router.patch('/update/:id', authMiddleware, mainController.update);
router.get('/:id', mainController.getOne);

module.exports = router;
