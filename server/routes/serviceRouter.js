const Router = require('express');
const serviceController = require('../controllers/serviceController');
const router = new Router();

router.post('/', authMiddleware, serviceController.create);
router.patch('/update/:id', authMiddleware, serviceController.update);
router.delete('/:id', authMiddleware, serviceController.remove);
router.get('/', serviceController.getAll);

module.exports = router;
