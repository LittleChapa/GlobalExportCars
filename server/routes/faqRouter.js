const Router = require('express');
const faqController = require('../controllers/faqController');
const router = new Router();

router.post('/', authMiddleware, faqController.create);
router.patch('/update/:id', authMiddleware, faqController.update);
router.delete('/:id', authMiddleware, faqController.remove);
router.get('/', faqController.getAll);

module.exports = router;
