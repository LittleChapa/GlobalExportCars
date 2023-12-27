const Router = require('express');
const mainController = require('../controllers/mainController');
const router = new Router();

router.post('/', mainController.create);
router.patch('/update/:id', mainController.update);
router.get('/:id', mainController.getOne);

module.exports = router;
