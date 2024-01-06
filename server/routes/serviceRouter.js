const Router = require('express');
const serviceController = require('../controllers/serviceController');
const router = new Router();

router.post('/', serviceController.create);
router.patch('/update/:id', serviceController.update);
router.delete('/:id', serviceController.remove);
router.get('/', serviceController.getAll);

module.exports = router;
