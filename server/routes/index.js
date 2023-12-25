const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const aboutRouter = require('./aboutRouter');
const applicationRouter = require('./applicationRouter');
const catalogRouter = require('./catalogRouter');
const countryRouter = require('./countryRouter');
const faqRouter = require('./faqRouter');
const mainRouter = require('./mainRouter');
const serviceRouter = require('./serviceRouter');

router.use('/user', userRouter);
router.use('/main', mainRouter);
router.use('/about', aboutRouter);
router.use('/catalog', catalogRouter);
router.use('/application', applicationRouter);
router.use('/service', serviceRouter);
router.use('/country', countryRouter);
router.use('/faq', faqRouter);

module.exports = router;
