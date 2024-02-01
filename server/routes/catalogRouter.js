const Router = require('express');
const catalogController = require('../controllers/catalogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', authMiddleware, catalogController.create);
router.patch('/update/:id', authMiddleware, catalogController.update);
router.delete('/:id', authMiddleware, catalogController.remove);
router.get('/', catalogController.getAll);

module.exports = router;
